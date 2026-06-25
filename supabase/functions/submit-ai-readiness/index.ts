import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { z } from "https://esm.sh/zod@3.23.8";
import { emailFooterHtml } from "../_shared/brand.ts";
import { leadEmbed, postToDiscord } from "../_shared/discord.ts";
import { pushToCrm } from "../_shared/leads.ts";
import { generateMeetingPrep } from "../_shared/meeting-prep.ts";
import { queueNurtureSequence } from "../_shared/nurture.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO_EMAIL") ?? "contact@mired.io";
const GMAIL_FORWARD =
  Deno.env.get("INBOUND_FORWARD_EMAIL") ?? "contactmired@gmail.com";

function notifyRecipients(leadEmail: string): string[] {
  const recipients = new Set([NOTIFY_TO, GMAIL_FORWARD].filter(Boolean));
  recipients.delete(leadEmail);
  return [...recipients];
}
const FROM_ADDRESS = "Mired <contact@mired.io>";
const REPLY_TO_ADDRESS = "contact@mired.io";
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://mired.io";
const CALENDLY_URL =
  Deno.env.get("CALENDLY_URL") ?? "https://calendly.com/mired";

const resultSchema = z.object({
  overallScore: z.number(),
  tier: z.string(),
  tierLabel: z.string(),
  dimensionScores: z.array(z.object({
    dimension: z.string(),
    label: z.string(),
    score: z.number(),
    maxScore: z.number(),
    percentage: z.number(),
  })),
  topOpportunities: z.array(z.string()),
  summary: z.string(),
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company_size: z.string().trim().min(1).max(50),
  answers: z.record(z.number()),
  result: resultSchema,
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

    if (!RESEND_API_KEY) throw new Error("Email service not configured");

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid data", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { name, email, company_size, answers, result } = parsed.data;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { data: inserted, error: dbError } = await supabase
      .from("ai_readiness_assessments")
      .insert({
        name,
        email,
        company_size,
        overall_score: result.overallScore,
        tier: result.tier,
        tier_label: result.tierLabel,
        dimension_scores: result.dimensionScores,
        top_opportunities: result.topOpportunities,
        summary: result.summary,
        answers,
      })
      .select("id, share_token")
      .single();

    if (dbError || !inserted) {
      console.error("DB insert error:", dbError);
      throw new Error("Failed to save assessment");
    }

    const shareUrl = `${SITE_URL}/ai-readiness/results/${inserted.share_token}`;

    const dimensionRows = result.dimensionScores
      .map(
        (d) =>
          `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;">${escape(d.label)}</td><td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;font-weight:bold;">${d.percentage}%</td></tr>`,
      )
      .join("");

    const opportunities = result.topOpportunities
      .map((o, i) => `<li style="margin-bottom:8px;">${escape(o)}</li>`)
      .join("");

    const firstName = escape(name.split(" ")[0]);

    const resultsHtml = `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:560px;margin:0 auto;">
        <h2 style="color:#111;">Your AI Readiness Score: ${result.overallScore}/100</h2>
        <p>Hi ${firstName},</p>
        <p><strong>${escape(result.tierLabel)}</strong> — ${escape(result.summary)}</p>
        <table style="width:100%;margin:20px 0;border-collapse:collapse;">${dimensionRows}</table>
        <h3 style="margin-top:24px;">Your top opportunities</h3>
        <ol style="padding-left:20px;">${opportunities}</ol>
        <p style="margin:24px 0;"><a href="${shareUrl}" style="color:#420FB0;">View &amp; share your full report →</a></p>
        <p style="margin:24px 0;"><a href="${CALENDLY_URL}" style="display:inline-block;background:#420FB0;color:#fff;padding:12px 24px;text-decoration:none;font-weight:bold;border-radius:6px;">Book a free roadmap review</a></p>
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
        to: [email],
        reply_to: REPLY_TO_ADDRESS,
        subject: `Your AI Readiness Score: ${result.overallScore}/100`,
        html: resultsHtml,
      }),
    });

    const meetingPrep = await generateMeetingPrep({
      name,
      email,
      company_size,
      overall_score: result.overallScore,
      tier_label: result.tierLabel,
      summary: result.summary,
      top_opportunities: result.topOpportunities,
      dimension_scores: result.dimensionScores.map((d) => ({
        label: d.label,
        percentage: d.percentage,
      })),
      share_url: shareUrl,
    });

    await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: notifyRecipients(email),
        reply_to: email,
        subject: `AI Readiness lead — ${name} (${result.overallScore}/100)`,
        html: `
          <h2>New AI readiness assessment</h2>
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Company size:</strong> ${escape(company_size)}</p>
          <p><strong>Score:</strong> ${result.overallScore}/100 (${escape(result.tierLabel)})</p>
          <p><a href="${shareUrl}">View results</a></p>
          <h3>Meeting prep for Catelyn</h3>
          <pre style="white-space:pre-wrap;font-family:Arial,sans-serif;">${escape(meetingPrep)}</pre>
        `,
      }),
    });

    await postToDiscord(
      `📋 **New AI readiness lead** — ${name} (${result.overallScore}/100)`,
      leadEmbed(
        "AI Readiness Assessment",
        [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Company size", value: company_size, inline: true },
          { name: "Score", value: `${result.overallScore}/100 — ${result.tierLabel}`, inline: false },
          { name: "Report", value: shareUrl, inline: false },
          { name: "Book with Catelyn", value: CALENDLY_URL, inline: false },
        ],
        meetingPrep,
      ),
    );

    await queueNurtureSequence(supabase, {
      email,
      name,
      leadType: "ai_readiness",
      leadId: inserted.id,
      metadata: {
        overall_score: result.overallScore,
        tier: result.tier,
        share_url: shareUrl,
      },
    });

    await pushToCrm({
      source: "ai_readiness",
      name,
      email,
      company_size,
      overall_score: result.overallScore,
      tier: result.tier,
      tier_label: result.tierLabel,
      share_url: shareUrl,
      calendly_url: CALENDLY_URL,
    });

    return new Response(
      JSON.stringify({ success: true, share_token: inserted.share_token }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("submit-ai-readiness error:", message);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
