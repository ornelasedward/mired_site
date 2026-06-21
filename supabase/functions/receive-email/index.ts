// Resend "email.received" webhook handler.
// Receives inbound email events, fetches full email contents from Resend's
// Received Emails API, and persists them to public.inbound_emails.
//
// Webhook signatures from Resend are signed with Svix. If RESEND_WEBHOOK_SECRET
// is set, we verify the signature; otherwise we skip verification (useful for
// local dev / initial setup, but the secret should be set in production).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { Webhook } from "https://esm.sh/svix@1.24.0";
import { BRAND, emailFooterHtml, emailFooterText } from "../_shared/brand.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, svix-id, svix-timestamp, svix-signature",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_ADDRESS = `Mired <${BRAND.email}>`;
const FORWARD_TO =
  Deno.env.get("INBOUND_FORWARD_EMAIL") ??
  Deno.env.get("NOTIFY_TO_EMAIL") ??
  "contactmired@gmail.com";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

async function forwardInboundNotification(args: {
  apiKey: string;
  from: string;
  to: string[];
  subject: string | null;
  textBody: string | null;
  siteUrl: string;
}): Promise<void> {
  const preview = (args.textBody ?? "").trim().slice(0, 500) || "(no text body)";
  const adminUrl = `${args.siteUrl.replace(/\/$/, "")}/admin/inbox`;
  const subject = args.subject?.trim()
    ? `New message: ${args.subject.trim()}`
    : "New message for Mired";
  const html = `
    <div style="font-family:Arial,sans-serif;color:#222;font-size:14px;line-height:1.5;max-width:560px;">
      <p>You received a new email at contact@mired.io.</p>
      <p><strong>From:</strong> ${escapeHtml(args.from)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(args.subject ?? "(no subject)")}</p>
      <p style="white-space:pre-wrap;">${escapeHtml(preview)}</p>
      <p><a href="${adminUrl}">View in admin inbox</a></p>
      ${emailFooterHtml}
    </div>`;
  const text = [
    "You received a new email at contact@mired.io.",
    `From: ${args.from}`,
    `Subject: ${args.subject ?? "(no subject)"}`,
    "",
    preview,
    "",
    `View in admin inbox: ${adminUrl}`,
    "",
    emailFooterText,
  ].join("\n");

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${args.apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [FORWARD_TO],
      reply_to: BRAND.email,
      subject,
      html,
      text,
    }),
  });
  if (!res.ok) {
    console.error("Inbound forward notify failed:", res.status, await res.text());
  }
}

interface ResendInboundEvent {
  type: string;
  created_at: string;
  data: {
    email_id: string;
    created_at: string;
    from: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    message_id?: string;
    subject?: string;
    attachments?: Array<{
      id: string;
      filename: string;
      content_type: string;
      content_disposition?: string;
      content_id?: string;
    }>;
  };
}

interface ResendEmailDetail {
  id: string;
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  subject?: string;
  html?: string | null;
  text?: string | null;
  created_at?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const RESEND_WEBHOOK_SECRET = Deno.env.get("RESEND_WEBHOOK_SECRET");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const rawBody = await req.text();

    // Verify Svix signature if a secret is configured.
    let event: ResendInboundEvent;
    if (RESEND_WEBHOOK_SECRET) {
      const wh = new Webhook(RESEND_WEBHOOK_SECRET);
      const headers = {
        "svix-id": req.headers.get("svix-id") ?? "",
        "svix-timestamp": req.headers.get("svix-timestamp") ?? "",
        "svix-signature": req.headers.get("svix-signature") ?? "",
      };
      try {
        event = wh.verify(rawBody, headers) as ResendInboundEvent;
      } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return new Response(JSON.stringify({ error: "Invalid signature" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } else {
      console.warn("RESEND_WEBHOOK_SECRET not set; skipping signature verification");
      event = JSON.parse(rawBody) as ResendInboundEvent;
    }

    if (event.type !== "email.received") {
      // Ignore other event types but acknowledge.
      return new Response(JSON.stringify({ ignored: event.type }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const meta = event.data;

    // Fetch full email contents (body, etc.) from Resend.
    let detail: ResendEmailDetail | null = null;
    try {
      // Inbound emails are retrieved via /emails/receiving/{id} (not the
      // outbound /emails/{id} endpoint). See:
      // https://resend.com/docs/api-reference/emails/retrieve-received-email
      const detailRes = await fetch(`${RESEND_API_URL}/receiving/${meta.email_id}`, {
        headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
      });
      if (detailRes.ok) {
        detail = (await detailRes.json()) as ResendEmailDetail;
      } else {
        console.error("Failed to fetch email detail:", detailRes.status, await detailRes.text());
      }
    } catch (err) {
      console.error("Error fetching email detail:", err);
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error: dbError } = await supabase
      .from("inbound_emails")
      .upsert(
        {
          resend_email_id: meta.email_id,
          message_id: meta.message_id ?? null,
          from_address: detail?.from ?? meta.from,
          to_addresses: detail?.to ?? meta.to ?? [],
          cc_addresses: detail?.cc ?? meta.cc ?? [],
          bcc_addresses: detail?.bcc ?? meta.bcc ?? [],
          subject: detail?.subject ?? meta.subject ?? null,
          text_body: detail?.text ?? null,
          html_body: detail?.html ?? null,
          attachments: meta.attachments ?? [],
          raw_event: event,
          received_at: meta.created_at ?? event.created_at,
        },
        { onConflict: "resend_email_id" },
      );
    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Failed to save inbound email");
    }

    // Optional copy to Gmail (or NOTIFY_TO_EMAIL) so you get a phone/desktop alert.
    try {
      const siteUrl = Deno.env.get("PUBLIC_SITE_URL") ?? "https://mired.io";
      await forwardInboundNotification({
        apiKey: RESEND_API_KEY,
        from: detail?.from ?? meta.from,
        to: detail?.to ?? meta.to ?? [],
        subject: detail?.subject ?? meta.subject ?? null,
        textBody: detail?.text ?? null,
        siteUrl,
      });
    } catch (err) {
      console.error("Inbound forward notify error:", err);
    }

    return new Response(JSON.stringify({ ok: true, email_id: meta.email_id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("receive-email error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
