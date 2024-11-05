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
    question: "What services does Mired offer to help my brand grow?",
    answer:
      "At Mired, we offer a comprehensive range of services to help your brand scale in revenue and traffic. Our services include web development, software solutions, content creation, and e-commerce support. We work closely with you to develop a customized brand scheme and provide a blueprint for success, ensuring that all aspects of your online presence are optimized for growth.",
  },
  {
    id: "item-2",
    question: "What creative monetization strategies does Mired offer?",
    answer:
      "We understand that staying competitive in today's digital landscape requires continuous innovation and modernization. Our team develops innovative monetization strategies tailored for all unique business models and target audiences. This includes using the latest technologies, design trends, and industry best practices to modernize your website, software, or application. Some of the creative strategies we specialize in include developing subscription-based premium content or features, implementing targeted advertising solutions, affiliate marketing partnerships, sponsored content opportunities, and leveraging emerging technologies like virtual reality (VR), artificial intelligence, or augmented reality (AR) to create unique and memorable experiences.",
  },
  {
    id: "item-3",
    question:
      "How can Mired help me improve my website's user experience (UX)?",
    answer:
      "User experience is crucial for the success of any digital solution. Our UX experts at Mired can conduct a thorough analysis of your existing website or application to identify areas for improvement. We'll provide recommendations and implement strategies to enhance navigation, reduce friction points, and create a more intuitive and engaging user experience. By optimizing your UX, we can help increase user satisfaction, reduce bounce rates, and ultimately drive more conversions – creating more money in your pocket.",
  },
  {
    id: "item-4",
    question: "Can you assist with implementing AI solutions for my business?",
    answer:
      "You betcha! We stay at the forefront of technological advancements, including artificial intelligence (AI). Our team can help you identify opportunities to leverage AI within your digital solutions to automate processes, personalize user experiences, and gain valuable insights from data. Whether you're interested in chatbots, recommendation engines, or predictive analytics, we can help you harness the power of AI to drive innovation and growth for your business.",
  },
  {
    id: "item-5",
    question: "How does you ensure the security of digital solutions?",
    answer:
      "We understand the importance of protecting digital assets and sensitive customer information. We follow industry best practices and implements robust security measures throughout the development process. From secure coding practices and regular vulnerability assessments to SSL encryption and data backup solutions, we take a comprehensive approach to ensure the integrity and confidentiality of your digital solutions.",
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
