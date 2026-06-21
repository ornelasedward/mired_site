import type { Metadata } from "next";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import AiProcess from "@/components/home/AiProcess";
import WhatWeIntegrate from "@/components/home/WhatWeIntegrate";
import AiSolutionsHeroArea from "./AiSolutionsHeroArea";
import AiWeFocus from "./AiWeFocus";

export const metadata: Metadata = {
  title: "AI Integration & Solutions",
  description:
    "Production-grade AI integration services — LLM pipelines, custom agents, RAG systems, and workflow automation wired into your existing business systems.",
};

const page = () => {
  return (
    <div className="relative">
      <AiSolutionsHeroArea />
      <WhatWeIntegrate className="bg-skin-pink-200" />
      <AiWeFocus />
      <AiProcess />
      <Faqs />
      <div className="pt-5">
        <Sponsars />
      </div>
      <LetsTalk />
    </div>
  );
};

export default page;
