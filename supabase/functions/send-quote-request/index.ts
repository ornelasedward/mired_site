import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { z } from "https://esm.sh/zod@3.23.8";
import { emailFooterHtml } from "../_shared/brand.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO_EMAIL") ?? "contact@mired.io";
const FROM_ADDRESS = "Mired <contact@mired.io>";
const REPLY_TO_ADDRESS = "contact@mired.io";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().max(30).optional().nullable(),
  email: z.string().trim().email().max(255),
  website: z.string().trim().max(200).optional().nullable(),
  message: z.string().trim().min(1).max(5000),
});

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!RESEND_API_KEY) {
      throw new Error("Email service not configured");
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid form data", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const data = parsed.data;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error: dbError } = await supabase.from("quote_requests").insert({
      name: data.name,
      phone: data.phone?.trim() || "—",
      email: data.email,
      location: data.website?.trim() || null,
      message: data.message,
    });
    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Failed to save contact request");
    }

    const notifyHtml = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>Email:</strong> ${escape(data.email)}</p>
      <p><strong>Phone:</strong> ${escape(data.phone?.trim() || "—")}</p>
      <p><strong>Website:</strong> ${escape(data.website?.trim() || "—")}</p>
      <p><strong>Message:</strong><br/>${escape(data.message).replace(/\n/g, "<br/>")}</p>
    `;

    const notifyRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFY_TO],
        reply_to: data.email,
        subject: `New contact — ${data.name}`,
        html: notifyHtml,
      }),
    });
    if (!notifyRes.ok) {
      const t = await notifyRes.text();
      console.error("Notify email failed:", notifyRes.status, t);
    }

    const firstName = escape(data.name.split(" ")[0]);
    const confirmHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 560px; margin: 0 auto;">
        <h2 style="color:#111;">Thanks, ${firstName}</h2>
        <p>We received your message and will reach out within <strong>24–48 business hours</strong>.</p>
        <p>If you'd like to talk sooner, call us at <strong>(575) 513-6238</strong>.</p>
        ${emailFooterHtml}
      </div>
    `;

    const confirmRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [data.email],
        reply_to: REPLY_TO_ADDRESS,
        subject: "We got your message — Mired",
        html: confirmHtml,
      }),
    });
    if (!confirmRes.ok) {
      const t = await confirmRes.text();
      console.error("Confirmation email failed:", confirmRes.status, t);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-quote-request error:", message);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
