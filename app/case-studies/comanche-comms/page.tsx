import type { Metadata } from "next";
import LetsTalk from "@/components/common/LetsTalk";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyMetrics from "./CaseStudyMetrics";
import CaseStudyDeliverables from "./CaseStudyDeliverables";
import CaseStudyProcess from "./CaseStudyProcess";
import CaseStudyQuote from "./CaseStudyQuote";
import CaseStudyTimeline from "./CaseStudyTimeline";

export const metadata: Metadata = {
  title: "Comanche Comms — Brick & Mortar to Shopify Commerce",
  description:
    "How Mired helped Comanche Comms launch a full Shopify store with inventory management, vendor integrations, and custom commerce workflows — taking duty-grade comms retail online.",
  openGraph: {
    title: "Comanche Comms Case Study | Mired",
    description:
      "From Dallas brick-and-mortar to a global Shopify storefront — e-commerce, inventory, and ongoing platform support for professional comms gear.",
    images: ["/images/case-studies/comanche-comms/comanche-home.png"],
  },
};

export default function ComancheCommsCaseStudy() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyMetrics />
      <CaseStudyTimeline />
      <CaseStudyDeliverables />
      <CaseStudyProcess />
      <CaseStudyQuote />
      <LetsTalk />
    </main>
  );
}
