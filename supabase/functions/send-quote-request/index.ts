import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { z } from "https://esm.sh/zod@3.23.8";
import { emailFooterHtml } from "../_shared/brand.ts";
import { pushToCrm } from "../_shared/leads.ts";
import { queueNurtureSequence } from "../_shared/nurture.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO_EMAIL") ?? "contact@mired.io";
const FROM_ADDRESS = "Mired <contact@mired.io>";
const REPLY_TO_ADDRESS = "contact@mired.io";
const CALENDLY_URL =
  Deno.env.get("CALENDLY_URL") ?? "https://calendly.com/mired/ai-readiness-call";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company_size: z.string().trim().min(1).max(50),
  challenge: z.string().trim().max(500).optional().nullable(),
  source: z.string().trim().max(100).optional().nullable(),
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
    const source = data.source?.trim() || "contact_form";
    const challenge = data.challenge?.trim() || null;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: inserted, error: dbError } = await supabase
      .from("quote_requests")
      .insert({
        name: data.name,
        phone: "—",
        email: data.email,
        location: null,
        message: challenge ?? "Contact form submission",
        source,
        company_size: data.company_size,
        challenge,
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Failed to save contact request");
    }

    const notifyHtml = `
      <h2>New contact form submission</h2>
      <p><strong>Source:</strong> ${escape(source)}</p>
      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>Email:</strong> ${escape(data.email)}</p>
      <p><strong>Company size:</strong> ${escape(data.company_size)}</p>
      <p><strong>Challenge:</strong> ${escape(challenge ?? "—")}</p>
    `;

    await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFY_TO],
        reply_to: data.email,
        subject: `New lead — ${data.name} (${source})`,
        html: notifyHtml,
      }),
    });

    const firstName = escape(data.name.split(" ")[0]);
    const confirmHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 560px; margin: 0 auto;">
        <h2 style="color:#111;">Thanks, ${firstName}!</h2>
        <p>We got your message and will reply within a few hours.</p>
        <p>For the fastest path, <strong>pick a time on our calendar</strong> — most calls get booked same-day:</p>
        <p style="margin:24px 0;"><a href="${CALENDLY_URL}" style="display:inline-block;background:#420FB0;color:#fff;padding:12px 24px;text-decoration:none;font-weight:bold;border-radius:6px;">Book your free AI readiness call</a></p>
        <p>Or call us at <strong>(575) 513-6238</strong>.</p>
        ${emailFooterHtml}
      </div>
    `;

    await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [data.email],
        reply_to: REPLY_TO_ADDRESS,
        subject: "You're booked in — next step inside",
        html: confirmHtml,
      }),
    });

    await queueNurtureSequence(supabase, {
      email: data.email,
      name: data.name,
      leadType: "contact_form",
      leadId: inserted?.id,
      metadata: { source, company_size: data.company_size },
    });

    await pushToCrm({
      source,
      name: data.name,
      email: data.email,
      company_size: data.company_size,
      challenge,
      message: challenge,
      calendly_url: CALENDLY_URL,
    });

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
