export interface LandingPageLogo {
  src: string;
  alt: string;
  color?: string;
}

export interface LandingPageSection {
  title: string;
  description: string;
  logos?: LandingPageLogo[];
}

export interface LandingPageCaseStudy {
  client: string;
  headline: string;
  description: string;
  href: string;
}

export interface LandingPageConfig {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  proofPoints: LandingPageSection[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  ctaLabel: string;
  metaDescription: string;
  /** Extended sections for ad landing pages */
  problem?: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: string[];
  };
  useCases?: {
    eyebrow: string;
    heading: string;
    items: LandingPageSection[];
  };
  process?: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: LandingPageSection[];
  };
  whoItsFor?: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  caseStudy?: LandingPageCaseStudy;
}

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  "ai-crm-integration": {
    slug: "ai-crm-integration",
    title: "AI CRM Integration",
    headline: "Put AI Inside the CRM Your Team Already Uses",
    subheadline:
      "We wire LLMs, agents, and automation into Salesforce, HubSpot, and custom CRMs — production-grade, not another demo that never ships.",
    problem: {
      eyebrow: "The problem",
      heading: "Your CRM has the data. Your team still does the busywork.",
      body:
        "Most sales teams live in Salesforce or HubSpot all day — but AI lives somewhere else. Reps copy-paste into ChatGPT, enrichment happens in spreadsheets, and follow-ups slip because nothing is wired into the workflow they already use.",
      bullets: [
        "Reps manually research leads instead of seeing enriched context in-record",
        "Follow-up drafts live outside the CRM, so they never get sent on time",
        "Pipeline reviews are gut feel — not AI-surfaced risk and next-best actions",
        "Leadership bought AI tools that nobody uses because they don't fit the daily workflow",
      ],
    },
    useCases: {
      eyebrow: "What we build",
      heading: "AI that lives where your team sells",
      items: [
        {
          title: "In-record lead enrichment",
          description:
            "Company intel, intent signals, and talking points surfaced on the contact or deal — before the rep opens a second tab.",
          logos: [
            { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
            { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
          ],
        },
        {
          title: "Follow-up & sequence drafts",
          description:
            "AI-generated emails and call notes written in your voice, saved directly to the CRM activity timeline for one-click send.",
          logos: [
            { src: "/images/ai-logos/openai.svg", alt: "OpenAI" },
            { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
          ],
        },
        {
          title: "Pipeline intelligence",
          description:
            "Deal risk scoring, stale-opportunity alerts, and recommended next steps based on your historical win patterns.",
          logos: [
            { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
            { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
          ],
        },
        {
          title: "Workflow automation",
          description:
            "Trigger agents when deals stage-change, leads score high, or support tickets escalate — Slack, email, and CRM updates included.",
          logos: [
            { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
            { src: "/images/integrations/zapier.svg", alt: "Zapier", color: "#FF4A00" },
          ],
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "From stack review to production in weeks",
      intro:
        "We don't sell a transformation roadmap and disappear. We integrate one high-ROI workflow first, prove it in production, then expand.",
      steps: [
        {
          title: "Assess",
          description:
            "15-minute call + stack review. We map your CRM, integrations, and the one workflow where AI saves the most rep hours.",
        },
        {
          title: "Pilot",
          description:
            "Fixed-scope build on a single use case — e.g. enrichment on inbound leads or draft follow-ups for stale deals.",
        },
        {
          title: "Deploy",
          description:
            "Production integration with guardrails, logging, and human-in-the-loop. Your team keeps using the same CRM screens.",
        },
        {
          title: "Expand",
          description:
            "Add use cases, tune models, and connect adjacent tools (Slack, email, data warehouse) as ROI proves out.",
        },
      ],
    },
    whoItsFor: {
      eyebrow: "Who this is for",
      heading: "Built for teams selling on HubSpot, Salesforce, or custom CRMs",
      items: [
        "B2B sales teams with 5–50 reps drowning in manual research and follow-up",
        "RevOps leaders who need AI that respects existing fields, permissions, and workflows",
        "Founders who tried ChatGPT wrappers and want something their team will actually use daily",
        "Companies with CRM data but no intelligence layer on top of it yet",
      ],
    },
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
    caseStudy: {
      client: "Comanche Comms",
      headline: "From showroom sales to AI-assisted operations",
      description:
        "See how we integrated AI into a real sales workflow without forcing the team to learn new tools.",
      href: "/case-studies/comanche-comms",
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
    problem: {
      eyebrow: "The problem",
      heading: "You're outgrowing spreadsheets — but off-the-shelf software doesn't fit",
      body:
        "Growth-stage teams hit a wall: Airtable and Notion stop scaling, SaaS products don't match how you actually operate, and engineering is too stretched to build the internal systems the business keeps asking for.",
      bullets: [
        "Critical workflows still live in spreadsheets emailed between departments",
        "Teams request dashboards that never get built because product is focused on customer-facing work",
        "AI experiments happen in isolation — not inside the tools people use every hour",
        "Every new hire learns a different workaround instead of one reliable internal system",
      ],
    },
    useCases: {
      eyebrow: "What we build",
      heading: "Internal software your team runs the business on",
      items: [
        {
          title: "Ops & admin dashboards",
          description:
            "Role-based views for fulfillment, finance, support, and leadership — real data, real permissions, one source of truth.",
          logos: [
            { src: "/images/integrations/postgresql.svg", alt: "PostgreSQL", color: "#4169E1" },
            { src: "/images/integrations/mongodb.svg", alt: "MongoDB", color: "#47A248" },
          ],
        },
        {
          title: "Workflow & approval tools",
          description:
            "Replace email chains with structured requests, approvals, audit trails, and notifications in Slack or email.",
          logos: [
            { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
            { src: "/images/integrations/notion.svg", alt: "Notion", color: "#000000" },
          ],
        },
        {
          title: "AI knowledge search (RAG)",
          description:
            "Internal copilots over your docs, tickets, and SOPs — answers with citations, not hallucinated policy.",
          logos: [
            { src: "/images/ai-logos/openai.svg", alt: "OpenAI" },
            { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
          ],
        },
        {
          title: "Customer & partner portals",
          description:
            "Self-serve status, document upload, and account management tied to your backend systems and billing.",
          logos: [
            { src: "/images/integrations/stripe.svg", alt: "Stripe", color: "#635BFF" },
            { src: "/images/integrations/airtable.svg", alt: "Airtable", color: "#18BFFF" },
          ],
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "We build it, deploy it, and stay on it",
      intro:
        "You get engineers who own the full stack — discovery through production — not a deck of recommendations or a prototype that never ships.",
      steps: [
        {
          title: "Scope",
          description:
            "We map the workflow, users, and integrations. Fixed deliverables, timeline, and success criteria before we write code.",
        },
        {
          title: "Build",
          description:
            "Full-stack development with your branding, auth, and data model. Weekly demos so you see progress, not surprises at launch.",
        },
        {
          title: "Ship",
          description:
            "Deploy to production with monitoring, backups, and documentation. We train your team and hand off runbooks.",
        },
        {
          title: "Support",
          description:
            "Ongoing fixes, features, and AI upgrades as your operations evolve. Same team that built it maintains it.",
        },
      ],
    },
    whoItsFor: {
      eyebrow: "Who this is for",
      heading: "For teams that need software built around how they operate",
      items: [
        "Companies with 15–200 employees outgrowing Notion, Airtable, and one-off SaaS subscriptions",
        "Ops and finance leaders who need reliable internal systems, not another spreadsheet",
        "Founders who want AI inside internal tools — not a separate chatbot nobody opens",
        "Teams that have tried agencies and got mockups instead of production software",
      ],
    },
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
    caseStudy: {
      client: "Because Bitcoin",
      headline: "Three platforms. One desk. Built to scale.",
      description:
        "Custom trading tools, media systems, and AI-powered workflows — shipped and iterated over a multi-year partnership.",
      href: "/case-studies/because-bitcoin",
    },
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
