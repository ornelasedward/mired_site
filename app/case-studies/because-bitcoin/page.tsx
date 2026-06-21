import type { Metadata } from "next";
import LetsTalk from "@/components/common/LetsTalk";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyMetrics from "./CaseStudyMetrics";
import CaseStudyProducts from "./CaseStudyProducts";
import CaseStudyProcess from "./CaseStudyProcess";
import CaseStudyQuote from "./CaseStudyQuote";
import CaseStudyTimeline from "./CaseStudyTimeline";

export const metadata: Metadata = {
  title: "Because Bitcoin — 10x Growth Through Custom Software",
  description:
    "How Mired partnered with Because Bitcoin to build BB Terminal, BB Trader X, and a media platform that scaled traffic, revenue, and a $2.5M trading media company.",
  openGraph: {
    title: "Because Bitcoin Case Study | Mired",
    description:
      "From ground-up idea to BB Terminal and BB Trader X — a long-term software partnership that 10x'd Because Bitcoin.",
    images: ["/images/case-studies/because-bitcoin/becausebitcoin-home.png"],
  },
};

export default function BecauseBitcoinCaseStudy() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyMetrics />
      <CaseStudyTimeline />
      <CaseStudyProducts />
      <CaseStudyProcess />
      <CaseStudyQuote />
      <LetsTalk />
    </main>
  );
}
