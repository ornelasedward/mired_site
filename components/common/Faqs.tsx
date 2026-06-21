"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

const faqData = [
  {
    id: "item-1",
    question: "What does AI integration actually mean?",
    answer:
      "It means connecting AI capabilities — LLMs, agents, automation — directly into the software and workflows your team already uses. Instead of a separate AI tool, intelligence becomes a native part of your CRM, internal dashboards, Slack, or custom platforms.",
  },
  {
    id: "item-2",
    question: "Do we need to replace our existing tech stack?",
    answer:
      "No. Most of our work sits on top of what you already have. We integrate AI into Salesforce, HubSpot, custom ERPs, internal tools, and legacy systems — you keep your stack, we make it smarter.",
  },
  {
    id: "item-3",
    question: "What types of businesses do you work with?",
    answer:
      "We work with growth-stage companies, digital innovators, and ambitious teams that need production AI — not another proof of concept. From startups scaling operations to established businesses modernizing workflows, we meet you where you are.",
  },
  {
    id: "item-4",
    question: "What does working with your team look like?",
    answer:
      "We start with an AI readiness assessment, then move to a fixed-scope pilot before full deployment. You get direct access to the engineers building your solution — not a chain of account managers. We're based in Frisco, TX and work with clients worldwide.",
  },
  {
    id: "item-5",
    question: "How are you different from a regular AI agency?",
    answer:
      "We combine AI integration, custom software development, and go-to-market support under one roof. Most AI firms only build agents. We wire AI into your operations, build the internal tools around it, and help you launch — so nothing sits on a shelf after the demo.",
  },
];

interface Props {
  className?: string;
}
const Faqs: FC<Props> = ({ className }) => {
  const [openIndex, setOpenIndex] = React.useState("item-1");

  const handleAccordionChange = (v: string) => {
    setOpenIndex(v);
  };

  return (
    <div className={cn("py-20 bg-skin-blue-800 text-white", className)}>
      <div className="container">
        <h2 className="heading-2 text-4xl md:text-5xl lg:text-6xl text-center text-white">
          Frequently Asked Questions
        </h2>

        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-6 mt-12 lg:mt-20"
            // onChange={(index) => handleAccordionChange(index)}
            onValueChange={(value) => handleAccordionChange(value)}
            value={openIndex}
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/30 px-2 text-left sm:px-10 bg-white/10 text-white rounded-[5px]"
              >
                <AccordionTrigger className="text-left hover:no-underline text-md sm:text-xl font-medium font-poppins text-white [&>svg]:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base lg:text-lg text-white/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
