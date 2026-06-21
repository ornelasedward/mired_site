// Calendly webhook receiver — fires when someone books or cancels via your embed.
//
// Configure webhook subscription URL:
//   https://<project>.supabase.co/functions/v1/calendly-webhook
// Events: invitee.created, invitee.canceled
//
// Set CALENDLY_WEBHOOK_SIGNING_KEY from your Calendly OAuth app (Webhook signing key).

import { corsHeaders, serviceClient } from "../_shared/admin.ts";
import { pushToCrm } from "../_shared/leads.ts";

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), {
    status: s,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO_EMAIL") ?? "contact@mired.io";
const FROM_ADDRESS = "Mired <contact@mired.io>";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function verifyCalendlySignature(
  rawBody: string,
  header: string,
  signingKey: string,
  toleranceSec = 300,
): Promise<boolean> {
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const [k, v] = p.trim().split("=");
      return [k, v];
    }),
  );
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;

  const ts = parseInt(t, 10);
  if (Number.isNaN(ts)) return false;
  const age = Math.abs(Math.floor(Date.now() / 1000) - ts);
  if (age > toleranceSec) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(signingKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${t}.${rawBody}`),
  );
  const expected = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (expected.length !== v1.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ v1.charCodeAt(i);
  }
  return diff === 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const signingKey = Deno.env.get("CALENDLY_WEBHOOK_SIGNING_KEY");
  const sigHeader = req.headers.get("Calendly-Webhook-Signature") ?? "";
  const raw = await req.text();

  if (signingKey) {
    const ok = await verifyCalendlySignature(raw, sigHeader, signingKey);
    if (!ok) return json({ error: "Invalid signature" }, 401);
  } else {
    console.warn("CALENDLY_WEBHOOK_SIGNING_KEY not set; signature verification skipped");
  }

  let body: {
    event?: string;
    payload?: Record<string, unknown>;
    created_at?: string;
  };
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const eventType = body.event ?? "";
  const payload = body.payload ?? {};
  const inviteeUri = (payload.uri as string | undefined) ?? "";
  const eventUri = (payload.event as string | undefined) ?? null;
  const email = (payload.email as string | undefined)?.trim() ?? "";
  const name = (payload.name as string | undefined)?.trim() ?? "";
  const scheduledEvent = (payload.scheduled_event as Record<string, unknown> | undefined) ?? {};
  const eventName = (scheduledEvent.name as string | undefined) ?? "Calendly booking";
  const startTime = (scheduledEvent.start_time as string | undefined) ?? null;

  if (!inviteeUri || !email) {
    return json({ ignored: true, reason: "missing invitee uri or email" });
  }

  const supabase = serviceClient();

  if (eventType === "invitee.created") {
    const { error: insertError } = await supabase.from("calendly_bookings").upsert(
      {
        calendly_invitee_uri: inviteeUri,
        calendly_event_uri: eventUri,
        webhook_event: eventType,
        name,
        email,
        scheduled_at: startTime,
        event_name: eventName,
        status: "scheduled",
        payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "calendly_invitee_uri" },
    );

    if (insertError) {
      console.error("calendly_bookings insert failed:", insertError);
      return json({ error: insertError.message }, 500);
    }

    await supabase.from("quote_requests").insert({
      name: name || email.split("@")[0],
      phone: "—",
      email,
      message: `Calendly booking: ${eventName}${startTime ? ` @ ${startTime}` : ""}`,
      source: "calendly_booking",
      challenge: null,
    });

    // They booked — cancel pending nurture emails so we don't nag them to book.
    await supabase
      .from("lead_nurture_queue")
      .update({ status: "cancelled" })
      .eq("email", email)
      .eq("status", "pending");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const when = startTime
        ? new Date(startTime).toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short",
        })
        : "TBD";

      await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: [NOTIFY_TO],
          reply_to: email,
          subject: `New booking — ${name || email} (${eventName})`,
          html: `
            <h2>New Calendly booking</h2>
            <p><strong>Name:</strong> ${escape(name || "—")}</p>
            <p><strong>Email:</strong> ${escape(email)}</p>
            <p><strong>Event:</strong> ${escape(eventName)}</p>
            <p><strong>When:</strong> ${escape(when)}</p>
          `,
        }),
      });
    }

    await pushToCrm({
      source: "calendly_booking",
      name: name || email.split("@")[0],
      email,
      message: `${eventName}${startTime ? ` @ ${startTime}` : ""}`,
    });

    return json({ received: true, event: eventType });
  }

  if (eventType === "invitee.canceled") {
    await supabase
      .from("calendly_bookings")
      .update({ status: "canceled", webhook_event: eventType, updated_at: new Date().toISOString() })
      .eq("calendly_invitee_uri", inviteeUri);

    return json({ received: true, event: eventType });
  }

  return json({ ignored: eventType });
});
