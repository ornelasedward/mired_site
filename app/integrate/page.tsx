import ServiceOfferingLayout from "@/components/offerings/ServiceOfferingLayout";
import {
  IntegrateAiStack,
  IntegrateEcosystemGrid,
} from "@/components/offerings/OfferingVisuals";
import IntegrationLogo from "@/components/home/IntegrationLogo";
import { IntegrateVisual } from "@/components/home/digitalSoluations/ServiceVisuals";

export const metadata = {
  title: "Integrate — AI Wired Into Your Stack",
  description:
    "How Mired integrates AI into Slack, CRM, ERP, and internal tools — consultation to production, with a guided process every step of the way.",
};

const steps = [
  {
    phase: "01",
    title: "Consultation",
    description:
      "We start with a conversation — no technical homework required. You tell us what's slowing your team down, what's manual, and what you wish worked better across Slack, your CRM, and the rest of your stack.",
  },
  {
    phase: "02",
    title: "Identify needs & pain points",
    description:
      "Together we map the friction: missed follow-ups in Salesforce, context lost between Slack and HubSpot, reports that take hours to pull. We turn vague problems into a clear list of what integration should actually fix.",
  },
  {
    phase: "03",
    title: "Map your ecosystem",
    description:
      "What does your current setup look like? CRM, ERP, communication tools, internal dashboards, legacy systems — we document what's connected, what's siloed, and where AI creates the most leverage without ripping anything out.",
  },
  {
    phase: "04",
    title: "Design the integration plan",
    description:
      "From your ecosystem, we recommend what to change, improve, or automate — and show you exactly what the integrations will look like in practice. Claude, OpenAI, Gemini wired into Slack, Salesforce, HubSpot, and the tools you already run.",
  },
  {
    phase: "05",
    title: "Your ideas, our expertise",
    description:
      "Have a vision of your own? We bring it to the board and stress-test it against your stack. Prefer us to lead? We do — you stay in the loop without needing to spec every API call or workflow trigger.",
  },
  {
    phase: "06",
    title: "Build, stage & test",
    description:
      "We develop in staging environments your team can click through before anything touches production. LLM pipelines, RAG systems, voice agents, and workflow automation — tested against real scenarios, not slide decks.",
  },
  {
    phase: "07",
    title: "Ship to production",
    description:
      "When it's ready, we push live — integrated into the systems your team uses every day. We move fast, but never at the cost of stability. Rollouts are planned so your ops don't skip a beat.",
  },
  {
    phase: "08",
    title: "Iterate & improve",
    description:
      "Integration isn't one-and-done. If something isn't landing, we go back to the drawing board. As your business evolves, we refine prompts, expand connectors, and add new workflows — agile, responsive, and always production-focused.",
  },
];

const deliverables = [
  {
    title: "Slack & comms",
    description:
      "AI assistants, alerts, and workflow bots inside Slack and Teams — where your team already lives.",
    icon: (
      <IntegrationLogo
        src="/images/integrations/slack.svg"
        alt=""
        color="#4A154B"
        size="sm"
      />
    ),
  },
  {
    title: "CRM & sales tools",
    description:
      "Salesforce, HubSpot, Pipedrive — automated follow-ups, lead scoring, and insight surfacing without switching tabs.",
    icon: (
      <IntegrationLogo
        src="/images/integrations/salesforce-icon.svg"
        alt=""
        color="#00A1E0"
        size="sm"
      />
    ),
  },
  {
    title: "LLM & RAG pipelines",
    description:
      "Production-grade connections to Claude, OpenAI, and Gemini with your data, your guardrails, your context.",
    icon: (
      <IntegrationLogo
        src="/images/ai-logos/openai.svg"
        alt=""
        color="#000000"
        size="sm"
      />
    ),
  },
  {
    title: "Internal dashboards",
    description:
      "Ops panels and admin views that make AI outputs actionable — not buried in a chat thread.",
    icon: (
      <IntegrationLogo
        src="/images/integrations/notion.svg"
        alt=""
        color="#000000"
        size="sm"
      />
    ),
  },
  {
    title: "Workflow automation",
    description:
      "Zapier-style logic at engineering depth — triggers, conditions, and actions across your full stack.",
    icon: (
      <IntegrationLogo
        src="/images/integrations/zapier.svg"
        alt=""
        color="#FF4A00"
        size="sm"
      />
    ),
  },
  {
    title: "Legacy bridges",
    description:
      "Connectors for on-prem, ERP, and custom systems so nothing in your ecosystem gets left behind.",
    icon: (
      <IntegrationLogo
        src="/images/integrations/ibm.svg"
        alt=""
        color="#052FAD"
        size="sm"
      />
    ),
  },
];

const principles = [
  "Agile delivery",
  "Fast iteration",
  "Production-first",
  "No jargon required",
  "Your stack, smarter",
];

export default function IntegratePage() {
  return (
    <ServiceOfferingLayout
      label="Integrate"
      title="AI wired into the systems you already run"
      subtitle="Slack, CRM, ERP, and internal tools — connected without rebuilding your stack."
      intro="Most teams don't need another dashboard. They need AI that works inside Salesforce, Slack, and the platforms they already trust. We handle the consultation, architecture, and deployment — you get integrations that ship and stay maintained."
      visual={<IntegrateVisual />}
      processVisual={
        <>
          <IntegrateVisual />
          <IntegrateAiStack />
        </>
      }
      midVisual={<IntegrateEcosystemGrid />}
      steps={steps}
      deliverables={deliverables}
      principles={principles}
      heroClassName="bg-skin-pink-200"
    />
  );
}
