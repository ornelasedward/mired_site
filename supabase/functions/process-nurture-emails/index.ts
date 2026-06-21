// Daily cron: send scheduled nurture emails (days 2, 5, 10 after lead capture).
//
// Trigger: schedule a Supabase Cron job that POSTs here:
//   curl -X POST https://<project>.supabase.co/functions/v1/process-nurture-emails \
//        -H 'Authorization: Bearer <CRON_SECRET>'

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { emailFooterHtml } from "../_shared/brand.ts";
import { nurtureEmailContent } from "../_shared/nurture.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_ADDRESS = "Mired <contact@mired.io>";
const REPLY_TO_ADDRESS = "contact@mired.io";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const expected = Deno.env.get("CRON_SECRET");
  if (expected) {
    const auth = req.headers.get("Authorization") ?? "";
    const headerSecret = req.headers.get("x-cron-secret") ?? "";
    const bearer = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (bearer !== expected && headerSecret !== expected) {
      return json({ error: "Unauthorized" }, 401);
    }
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) return json({ error: "Email service not configured" }, 500);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const now = new Date().toISOString();
  const { data: pending, error } = await supabase
    .from("lead_nurture_queue")
    .select("*")
    .eq("status", "pending")
    .lte("scheduled_at", now)
    .order("scheduled_at", { ascending: true })
    .limit(50);

  if (error) return json({ error: error.message }, 500);
  if (!pending?.length) return json({ processed: 0, sent: 0 });

  let sent = 0;
  let failed = 0;

  for (const row of pending) {
    const metadata = (row.metadata as Record<string, unknown>) ?? {};
    const content = nurtureEmailContent(
      row.sequence_step,
      row.name ?? "there",
      row.lead_type,
      metadata,
    );

    if (!content) {
      await supabase
        .from("lead_nurture_queue")
        .update({ status: "cancelled" })
        .eq("id", row.id);
      continue;
    }

    const html = content.html.replace(
      "</div>",
      `${emailFooterHtml}</div>`,
    );

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [row.email],
        reply_to: REPLY_TO_ADDRESS,
        subject: content.subject,
        html,
      }),
    });

    if (res.ok) {
      await supabase
        .from("lead_nurture_queue")
        .update({ status: "sent", sent_at: new Date().toISOString() })
        .eq("id", row.id);
      sent++;
    } else {
      const text = await res.text();
      console.error("Nurture email failed:", row.id, res.status, text);
      await supabase
        .from("lead_nurture_queue")
        .update({ status: "failed" })
        .eq("id", row.id);
      failed++;
    }
  }

  return json({ processed: pending.length, sent, failed });
});
