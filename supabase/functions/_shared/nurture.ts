import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const NURTURE_STEPS = [
  { step: 2, daysAfter: 2 },
  { step: 3, daysAfter: 5 },
  { step: 4, daysAfter: 10 },
];

export async function queueNurtureSequence(
  supabase: SupabaseClient,
  opts: {
    email: string;
    name: string;
    leadType: "contact_form" | "ai_readiness";
    leadId?: string;
    metadata?: Record<string, unknown>;
  },
): Promise<void> {
  const rows = NURTURE_STEPS.map(({ step, daysAfter }) => ({
    email: opts.email,
    name: opts.name,
    lead_type: opts.leadType,
    lead_id: opts.leadId ?? null,
    sequence_step: step,
    scheduled_at: new Date(Date.now() + daysAfter * 24 * 60 * 60 * 1000).toISOString(),
    status: "pending",
    metadata: opts.metadata ?? {},
  }));

  const { error } = await supabase.from("lead_nurture_queue").insert(rows);
  if (error) {
    console.error("Failed to queue nurture sequence:", error);
  }
}

export function nurtureEmailContent(
  step: number,
  name: string,
  leadType: string,
  metadata: Record<string, unknown>,
): { subject: string; html: string } | null {
  const firstName = name.split(" ")[0] || "there";
  const calendlyUrl =
    Deno.env.get("CALENDLY_URL") ?? "https://calendly.com/mired";
  const siteUrl = Deno.env.get("SITE_URL") ?? "https://mired.io";

  const bookCta = `<p style="margin:24px 0;"><a href="${calendlyUrl}" style="display:inline-block;background:#420FB0;color:#fff;padding:12px 24px;text-decoration:none;font-weight:bold;border-radius:6px;">Book a free 15-min call</a></p>`;

  if (step === 2) {
    return {
      subject: "How we helped Comanche Comms integrate AI",
      html: `
        <div style="font-family:Arial,sans-serif;color:#333;max-width:560px;margin:0 auto;">
          <p>Hi ${firstName},</p>
          <p>Still thinking about where AI fits in your stack? Here's a quick example of what production integration looks like.</p>
          <p>We helped <strong>Comanche Comms</strong> wire AI into their existing workflow — no rip-and-replace, no six-month POC. The system went live and their team kept working the way they already did.</p>
          <p><a href="${siteUrl}/case-studies/comanche-comms">Read the case study →</a></p>
          ${bookCta}
        </div>
      `,
    };
  }

  if (step === 3) {
    const scoreLine =
      leadType === "ai_readiness" && metadata.overall_score
        ? `<p>Your readiness score was <strong>${metadata.overall_score}/100</strong> — the highest-ROI move is usually fixing your weakest dimension first, not launching five pilots at once.</p>`
        : `<p>Most teams we talk to have 2–3 clear AI wins hiding in plain sight: CRM enrichment, support triage, internal knowledge search, or workflow automation between tools they already pay for.</p>`;

    return {
      subject: "3 AI use cases that actually ship",
      html: `
        <div style="font-family:Arial,sans-serif;color:#333;max-width:560px;margin:0 auto;">
          <p>Hi ${firstName},</p>
          ${scoreLine}
          <p>The pattern we see work:</p>
          <ol>
            <li><strong>One workflow</strong> where your team loses the most time</li>
            <li><strong>Fixed scope</strong> — 4–8 weeks to production, not a year-long transformation</li>
            <li><strong>Measured outcome</strong> — hours saved, response time, pipeline velocity</li>
          </ol>
          <p>Not sure where to start? <a href="${siteUrl}/ai-readiness">Take our free readiness assessment</a> — 5 minutes, instant score.</p>
          ${bookCta}
        </div>
      `,
    };
  }

  if (step === 4) {
    return {
      subject: "Still exploring AI for your stack?",
      html: `
        <div style="font-family:Arial,sans-serif;color:#333;max-width:560px;margin:0 auto;">
          <p>Hi ${firstName},</p>
          <p>Last note from us — if AI integration is still on your radar, we'd love to spend 15 minutes mapping your stack and telling you honestly whether we're the right fit.</p>
          <p>No pitch deck. No pressure. Just a straight conversation about what's worth building.</p>
          ${bookCta}
          <p style="color:#666;font-size:13px;">Or reply to this email anytime — it goes straight to our inbox.</p>
        </div>
      `,
    };
  }

  return null;
}
