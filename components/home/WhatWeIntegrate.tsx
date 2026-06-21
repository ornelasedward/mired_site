import { cn } from "@/lib/utils";
import IntegrationLogo from "./IntegrationLogo";

const integrations = [
  {
    title: "CRM & Sales",
    description:
      "AI that surfaces insights and automates follow-ups inside the tools your sales team already uses.",
    logos: [
      { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
      { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
      { src: "/images/integrations/pipedrive.svg", alt: "Pipedrive" },
    ],
  },
  {
    title: "Operations & ERP",
    description:
      "Connect AI to procurement, inventory, and ops workflows without replacing your stack.",
    logos: [
      { src: "/images/integrations/sap.svg", alt: "SAP", color: "#0FAAFF" },
      { src: "/images/integrations/oracle.svg", alt: "Oracle", color: "#F80000" },
    ],
  },
  {
    title: "Communication",
    description:
      "Deploy voice agents and chat assistants where your team already collaborates.",
    logos: [
      { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
      { src: "/images/integrations/microsoftteams.svg", alt: "Microsoft Teams", color: "#6264A7" },
      { src: "/images/integrations/microsoftoutlook.svg", alt: "Microsoft Outlook", color: "#0078D4" },
    ],
  },
  {
    title: "Internal Tools",
    description:
      "Build the internal software layer that makes AI outputs actionable for your team.",
    logos: [
      { src: "/images/integrations/notion.svg", alt: "Notion", color: "#000000" },
      { src: "/images/integrations/airtable.svg", alt: "Airtable", color: "#18BFFF" },
      { src: "/images/integrations/zapier.svg", alt: "Zapier", color: "#FF4A00" },
    ],
  },
  {
    title: "Data & APIs",
    description:
      "LLM pipelines and RAG systems wired to your real data sources and production APIs.",
    logos: [
      { src: "/images/integrations/snowflake.svg", alt: "Snowflake", color: "#29B5E8" },
      { src: "/images/integrations/postgresql.svg", alt: "PostgreSQL", color: "#4169E1" },
      { src: "/images/integrations/mongodb.svg", alt: "MongoDB", color: "#47A248" },
      { src: "/images/integrations/stripe.svg", alt: "Stripe", color: "#635BFF" },
    ],
  },
  {
    title: "Legacy Systems",
    description:
      "We build the bridges so AI works with older on-prem systems and custom-built platforms.",
    logos: [
      { src: "/images/integrations/ibm.svg", alt: "IBM", color: "#052FAD" },
      { src: "/images/integrations/mysql.svg", alt: "MySQL", color: "#4479A1" },
      { src: "/images/integrations/amazonaws.svg", alt: "AWS", color: "#232F3E" },
    ],
  },
];

const WhatWeIntegrate = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-y-[2px] border-black py-16 sm:py-20 bg-white",
        className
      )}
    >
      <div className="container">
        <div className="max-w-[650px] mx-auto text-center mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            What we integrate with
          </h2>
          <p className="text-xl mt-4">
            You don&apos;t need to rebuild your tech stack. We connect AI
            capabilities directly into the software and workflows your business
            already runs on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className="flex flex-wrap items-center justify-center gap-2.5 px-2 pb-3">
                {item.logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-white p-2"
                    title={logo.alt}
                  >
                    <IntegrationLogo
                      src={logo.src}
                      alt={logo.alt}
                      color={logo.color}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col border-2 border-black rounded-10 p-6 bg-white">
                <h4 className="heading-4 mb-3">{item.title}</h4>
                <p className="text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeIntegrate;
