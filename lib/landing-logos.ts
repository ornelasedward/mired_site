export interface StackLogo {
  src: string;
  alt: string;
  color?: string;
}

/** Spinning marquee — companies Mired has worked with */
export const CLIENT_LOGOS: StackLogo[] = [
  { src: "/images/clients/linkedin.svg", alt: "LinkedIn" },
  { src: "/images/clients/intel.svg", alt: "Intel" },
  { src: "/images/clients/lenovo.svg", alt: "Lenovo" },
  { src: "/images/integrations/salesforce.svg", alt: "Salesforce" },
  { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
  { src: "/images/ai-logos/openai.svg", alt: "OpenAI" },
  { src: "/images/clients/openmachine.png", alt: "OpenMachine" },
];

export const CRM_STACK_LOGOS: StackLogo[] = [
  { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
  { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
  { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
  { src: "/images/integrations/pipedrive.svg", alt: "Pipedrive" },
  { src: "/images/integrations/microsoftteams.svg", alt: "Microsoft Teams", color: "#6264A7" },
  { src: "/images/ai-logos/openai.svg", alt: "OpenAI" },
  { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
  { src: "/images/integrations/zapier.svg", alt: "Zapier", color: "#FF4A00" },
];

export const INTERNAL_TOOLS_STACK_LOGOS: StackLogo[] = [
  { src: "/images/integrations/notion.svg", alt: "Notion", color: "#000000" },
  { src: "/images/integrations/airtable.svg", alt: "Airtable", color: "#18BFFF" },
  { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
  { src: "/images/integrations/postgresql.svg", alt: "PostgreSQL", color: "#4169E1" },
  { src: "/images/integrations/mongodb.svg", alt: "MongoDB", color: "#47A248" },
  { src: "/images/integrations/stripe.svg", alt: "Stripe", color: "#635BFF" },
  { src: "/images/ai-logos/openai.svg", alt: "OpenAI" },
  { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
  { src: "/images/integrations/zapier.svg", alt: "Zapier", color: "#FF4A00" },
];

export const LANDING_STACK_LOGOS: Record<string, StackLogo[]> = {
  "ai-crm-integration": CRM_STACK_LOGOS,
  "custom-internal-tools": INTERNAL_TOOLS_STACK_LOGOS,
};
