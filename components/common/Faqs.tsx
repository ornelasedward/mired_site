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
    question: "What exactly is a digital growth studio?",
    answer:
      "We're a modern tech partner that combines custom software development, AI solutions, and content systems to build revenue-generating digital platforms.",
  },
  {
    id: "item-2",
    question: "What types of businesses do you work with?",
    answer:
      "We specialize in working with digital innovators, Web3 companies, and ambitious startups looking to scale. Our solutions have helped companies go from zero to $1M+ in revenue.",
  },
  {
    id: "item-3",
    question: "What does working with your team look like?",
    answer:
      "We become an extension of your team, handling everything from development to implementation. You get a dedicated team without the overhead of hiring in-house. We're a remote-first team, so we can work with you from anywhere in the world, but we're based in Frisco, TX and will be happy to travel to you.",
  },
  {
    id: "item-4",
    question: "How are you different from a regular digital agency?",
    answer:
      "Unlike traditional agencies, we focus on building complete digital systems that drive revenue. From custom software to content monetization, we're your all-in-one growth partner.",
  },
  {
    id: "item-5",
    question: "Can you build custom software that integrates with AI?",
    answer:
      "Yes, we can build custom software that integrates with AI. We have experience in building custom software that integrates with AI, including chatbots, recommendation engines, and predictive analytics. We also offer AI consulting services to help you integrate AI into your existing systems.",
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
    <div className={cn(className, "py-20   bg-skin-pink-50")}>
      <div className="container">
        <h2 className="heading-2 text-4xl md:text-5xl lg:text-6xl text-center">
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
                className="border-[1px] px-2 text-left sm:px-10 bg-white rounded-[5px] border-[#CFC9D4]"
              >
                <AccordionTrigger className=" text-left hover:no-underline text-md sm:text-xl font-medium font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-[8px] text-lg lg:text-base ">
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
