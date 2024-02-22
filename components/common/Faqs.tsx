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
    question: "Can you help with content creation for my website?",
    answer:
      "Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.",
  },
  {
    id: "item-2",
    question: "Can you integrate e-commerce functionality into my website?",
    answer:
      "Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.",
  },
  {
    id: "item-3",
    question: "How long does it take to build a website?",
    answer:
      "Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.",
  },
  {
    id: "item-4",
    question: "Can you update and maintain my website after it is launched?",
    answer:
      "Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.",
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
        <h2 className="heading-2">Frequently Asked Questions</h2>

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
                <AccordionTrigger className=" text-left hover:no-underline text-xs sm:text-xl font-medium font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-[8px] sm:text-sm lg:text-base ">
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
