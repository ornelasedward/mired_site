import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import CustomButton from "@/components/ui/custom-button";
import {
  AiAgentsVisual,
  LlmPipelineVisual,
  RagKnowledgeVisual,
  WorkflowAutomationVisual,
} from "./AiSolutionVisuals";

const offerings: {
  title: string;
  description: string;
  visual: ReactNode;
  reverse: boolean;
  showCta?: boolean;
}[] = [
  {
    title: "LLM Integration & Pipelines",
    description:
      "Connect GPT, Claude, Gemini, or open-source models to your business data via secure APIs. Model-agnostic architecture with guardrails, monitoring, and cost controls.",
    visual: <LlmPipelineVisual />,
    reverse: false,
  },
  {
    title: "Custom AI Agents & Voice",
    description:
      "Production agents that handle customer support, internal Q&A, and operational tasks — deployed in Slack, Teams, your website, or custom interfaces.",
    visual: <AiAgentsVisual />,
    reverse: true,
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Surface intelligence from your documents, databases, and internal knowledge — so your team gets accurate answers grounded in your actual data.",
    visual: <RagKnowledgeVisual />,
    reverse: false,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repeatable processes across your stack — from data entry and report generation to approval flows and cross-system orchestration.",
    visual: <WorkflowAutomationVisual />,
    reverse: true,
    showCta: true,
  },
];

const AiWeFocus = () => {
  return (
    <div className="relative overflow-hidden border-t-2 border-black bg-skin-pink-50">
      <Image
        src={"/images/g10.svg"}
        width={674}
        height={3642}
        alt=""
        className="absolute z-0 right-0 top-0 pointer-events-none"
      />
      <Image
        src={"/images/g11.svg"}
        width={674}
        height={3642}
        alt=""
        className="absolute z-0 bottom-0 left-0 pointer-events-none"
      />

      <div className="relative z-10">
        <div className="container py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3>What we build</h3>
            <p className="mt-3 text-base md:text-lg">
              Every engagement is scoped to your stack, your data, and your
              workflows — not a generic AI product.
            </p>
          </div>
        </div>

        {offerings.map((item) => (
          <div
            key={item.title}
            className="border-b-2 border-black last:border-b-0"
          >
            <div className="container py-16 md:py-20">
              <div
                className={`flex flex-col-reverse ${
                  item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } justify-between gap-12 items-center`}
              >
                <div className="w-full space-y-3 lg:max-w-[850px]">
                  <h3 className="heading-2 normal-case">{item.title}</h3>
                  <p className="text-xl md:text-2xl">{item.description}</p>
                </div>

                <div className="w-full max-w-[340px] lg:w-1/3 flex justify-center lg:justify-end shrink-0 relative z-10">
                  {item.visual}
                </div>
              </div>

              {item.showCta && (
                <div className="mt-16 md:mt-20 flex justify-center">
                  <Link href="/contact">
                    <CustomButton>Book an AI Readiness Call</CustomButton>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiWeFocus;
