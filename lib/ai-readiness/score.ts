import { DIMENSION_LABELS, READINESS_QUESTIONS } from "./questions";
import type {
  DimensionScore,
  ReadinessAnswers,
  ReadinessDimension,
  ReadinessResult,
  ReadinessTier,
} from "./types";

const OPPORTUNITY_TIPS: Record<ReadinessDimension, string[]> = {
  stack: [
    "Audit your current CRM, ERP, and communication tools for API access and integration gaps.",
    "Centralize customer and ops data before layering AI — clean inputs drive reliable outputs.",
    "Map manual handoffs between tools; these are your highest-ROI automation targets.",
  ],
  useCase: [
    "Pick one workflow where your team loses the most time — start there, not everywhere.",
    "Run a 2-week pilot on a single use case (support triage, CRM enrichment, internal Q&A).",
    "Document expected ROI before building so stakeholders stay aligned on priorities.",
  ],
  team: [
    "Assign a single internal owner for AI initiatives — even part-time beats no owner.",
    "Start with tools your team already uses daily; adoption follows familiarity.",
    "Pair a technical champion with an executive sponsor to unblock decisions fast.",
  ],
  timeline: [
    "Book a 15-minute stack review to identify what you can ship in 90 days.",
    "Define a fixed-scope pilot with a clear success metric before full rollout.",
    "Get budget and decision-maker alignment early — it prevents projects from stalling.",
  ],
};

function getTier(score: number): { tier: ReadinessTier; label: string } {
  if (score >= 85) return { tier: "advanced", label: "Advanced" };
  if (score >= 65) return { tier: "ready", label: "Ready to Integrate" };
  if (score >= 40) return { tier: "building", label: "Building Foundation" };
  return { tier: "exploring", label: "Early Stage" };
}

function getSummary(tier: ReadinessTier, overallScore: number): string {
  switch (tier) {
    case "advanced":
      return `Your organization scores ${overallScore}/100 — you're well-positioned to deploy production AI into your existing stack. The focus now is prioritizing high-ROI integrations and shipping fast.`;
    case "ready":
      return `At ${overallScore}/100, you have solid foundations. A focused pilot wired into your CRM or internal tools could produce measurable results within 90 days.`;
    case "building":
      return `Your score of ${overallScore}/100 shows momentum with gaps to close. Strengthening your weakest dimension first will prevent an AI project from stalling mid-rollout.`;
    default:
      return `At ${overallScore}/100, you're in exploration mode — which is the right time to map your stack and identify one clear first win before investing in full deployment.`;
  }
}

export function scoreReadiness(answers: ReadinessAnswers): ReadinessResult {
  const dimensionTotals: Record<ReadinessDimension, { score: number; max: number }> = {
    stack: { score: 0, max: 0 },
    useCase: { score: 0, max: 0 },
    team: { score: 0, max: 0 },
    timeline: { score: 0, max: 0 },
  };

  for (const q of READINESS_QUESTIONS) {
    const selected = answers[q.id] ?? 0;
    dimensionTotals[q.dimension].score += selected;
    dimensionTotals[q.dimension].max += 3;
  }

  const rawTotal = Object.values(dimensionTotals).reduce((sum, d) => sum + d.score, 0);
  const rawMax = Object.values(dimensionTotals).reduce((sum, d) => sum + d.max, 0);
  const overallScore = Math.round((rawTotal / rawMax) * 100);

  const dimensionScores: DimensionScore[] = (
    Object.keys(dimensionTotals) as ReadinessDimension[]
  ).map((dimension) => {
    const { score, max } = dimensionTotals[dimension];
    return {
      dimension,
      label: DIMENSION_LABELS[dimension],
      score,
      maxScore: max,
      percentage: Math.round((score / max) * 100),
    };
  });

  const sorted = [...dimensionScores].sort((a, b) => a.percentage - b.percentage);
  const topOpportunities = sorted.slice(0, 3).map((d) => {
    const tips = OPPORTUNITY_TIPS[d.dimension];
    const tipIndex = d.percentage < 34 ? 0 : d.percentage < 67 ? 1 : 2;
    return tips[tipIndex];
  });

  const { tier, label: tierLabel } = getTier(overallScore);

  return {
    overallScore,
    tier,
    tierLabel,
    dimensionScores,
    topOpportunities,
    summary: getSummary(tier, overallScore),
  };
}
