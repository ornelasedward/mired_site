export interface MeetingPrepContext {
  name: string;
  email: string;
  company_size: string;
  overall_score: number;
  tier_label: string;
  summary: string;
  top_opportunities: string[];
  dimension_scores: { label: string; percentage: number }[];
  share_url?: string;
  scheduled_at?: string | null;
}

/** Current Claude API models (see platform.claude.com/docs/en/about-claude/models/overview) */
export const CLAUDE_MODELS = {
  /** Fastest — best for sub-4s meeting prep */
  fast: "claude-haiku-4-5",
  /** Balanced speed + quality */
  balanced: "claude-sonnet-4-6",
  /** Most capable */
  reasoning: "claude-opus-4-8",
} as const;

const FALLBACK_NOTES = (ctx: MeetingPrepContext): string => {
  const weak = ctx.dimension_scores
    .filter((d) => d.percentage < 60)
    .map((d) => d.label)
    .slice(0, 2);
  const strong = ctx.dimension_scores
    .filter((d) => d.percentage >= 60)
    .map((d) => d.label)
    .slice(0, 2);

  const lines = [
    `• Open with their score (${ctx.overall_score}/100 — ${ctx.tier_label}) and confirm what prompted the assessment.`,
    ctx.top_opportunities[0]
      ? `• Dig into their #1 opportunity: ${ctx.top_opportunities[0]}`
      : "• Ask which AI use case feels most urgent this quarter.",
    weak.length
      ? `• Likely gaps to explore: ${weak.join(", ")}.`
      : "• They look fairly mature — focus on execution speed and ROI.",
    strong.length ? `• Strengths to acknowledge: ${strong.join(", ")}.` : null,
    "• Close with a clear next step (pilot scope, follow-up, or honest pass if not a fit).",
  ].filter(Boolean);

  return lines.join("\n");
};

async function callClaude(ctx: MeetingPrepContext): Promise<string | null> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) return null;

  const model = Deno.env.get("ANTHROPIC_MODEL") ?? CLAUDE_MODELS.fast;

  const prompt = `You are prepping Catelyn Lee (Mired sales) for a 15-min AI readiness call.

Lead:
- Name: ${ctx.name}
- Company size: ${ctx.company_size}
- Score: ${ctx.overall_score}/100 (${ctx.tier_label})
- Summary: ${ctx.summary}
- Top opportunities: ${ctx.top_opportunities.join("; ")}
- Dimensions: ${ctx.dimension_scores.map((d) => `${d.label} ${d.percentage}%`).join(", ")}
${ctx.scheduled_at ? `- Meeting: ${ctx.scheduled_at}` : ""}

Write 4-5 short bullet points Catelyn can use on the call. Be specific to this lead, conversational, and actionable. No fluff. Under 120 words total.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 320,
      system:
        "You write concise sales call prep notes for a boutique AI consultancy. Bullet points only.",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    console.error("Claude meeting prep failed:", res.status, await res.text());
    return null;
  }

  const data = await res.json();
  const block = data?.content?.find(
    (b: { type: string; text?: string }) => b.type === "text",
  );
  const text = block?.text?.trim();
  return text || null;
}

/** Generate meeting prep; returns within ~4s using fallback if Claude is slow. */
export async function generateMeetingPrep(
  ctx: MeetingPrepContext,
  timeoutMs = 4000,
): Promise<string> {
  try {
    const notes = await Promise.race([
      callClaude(ctx),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs)),
    ]);
    return notes ?? FALLBACK_NOTES(ctx);
  } catch (err) {
    console.error("generateMeetingPrep error:", err);
    return FALLBACK_NOTES(ctx);
  }
}
