export interface LandingPageConfig {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  proofPoints: { title: string; description: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  ctaLabel: string;
  metaDescription: string;
}

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  "ai-crm-integration": {
    slug: "ai-crm-integration",
    title: "AI CRM Integration",
    headline: "Put AI Inside the CRM Your Team Already Uses",
    subheadline:
      "We wire LLMs, agents, and automation into Salesforce, HubSpot, and custom CRMs — production-grade, not another demo that never ships.",
    proofPoints: [
      {
        title: "Native CRM integration",
        description:
          "AI that lives inside your CRM — lead enrichment, follow-up drafts, pipeline insights, and workflow automation your reps actually use.",
      },
      {
        title: "Stack-fluent delivery",
        description:
          "We assess your existing tooling and integrate without ripping out what's working. Slack, HubSpot, Salesforce, internal dashboards.",
      },
      {
        title: "Ship in weeks, not quarters",
        description:
          "Fixed-scope pilots with clear success metrics. Most CRM AI integrations go live within 4–8 weeks.",
      },
    ],
    testimonial: {
      quote:
        "Mired wired AI into our workflow without us changing how the team operates day to day.",
      author: "Comanche Comms",
      role: "Operations team",
    },
    ctaLabel: "Book Free AI CRM Review",
    metaDescription:
      "Production AI integrations for Salesforce, HubSpot, and custom CRMs. Book a free 15-minute stack review with Mired.",
  },
  "custom-internal-tools": {
    slug: "custom-internal-tools",
    title: "Custom Internal Tools",
    headline: "Custom Internal Tools That Your Team Uses Every Day",
    subheadline:
      "CRMs, ops dashboards, commerce platforms, and AI-powered internal tools — built end to end and shipped to production.",
    proofPoints: [
      {
        title: "End-to-end builders",
        description:
          "We don't hand off wireframes. We build, test, deploy, and maintain the software your team depends on.",
      },
      {
        title: "AI-native from day one",
        description:
          "Internal tools with LLM pipelines, RAG search, and workflow automation baked in — not bolted on later.",
      },
      {
        title: "Enterprise-proven",
        description:
          "We've shipped platforms serving millions of users. Same rigor for growth-stage teams.",
      },
    ],
    ctaLabel: "Book a Scoping Call",
    metaDescription:
      "Custom internal tools and AI-powered dashboards built to ship. Book a free scoping call with Mired.",
  },
  "ai-readiness": {
    slug: "ai-readiness",
    title: "AI Readiness",
    headline: "Find Out If Your Organization Is AI Ready",
    subheadline:
      "Take our free 5-minute assessment and get a personalized score, gap analysis, and recommended next steps — then book a call to walk through your roadmap.",
    proofPoints: [
      {
        title: "Instant personalized score",
        description:
          "Score your stack, use cases, team readiness, and timeline across 12 targeted questions.",
      },
      {
        title: "Actionable gap analysis",
        description:
          "See exactly which dimensions are blocking AI success and what to fix first.",
      },
      {
        title: "Free expert review",
        description:
          "Book a 15-minute call to walk through your results with the engineers who build this for clients.",
      },
    ],
    ctaLabel: "Take the Free Assessment",
    metaDescription:
      "Free AI readiness assessment for growth-stage companies. Get your score and a personalized roadmap in 5 minutes.",
  },
};

export function getLandingPage(slug: string): LandingPageConfig | undefined {
  return LANDING_PAGES[slug];
}

export function getAllLandingSlugs(): string[] {
  return Object.keys(LANDING_PAGES);
}
