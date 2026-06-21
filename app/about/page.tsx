import CompanyReachStats from "@/components/common/CompanyReachStats";
import LetsTalk from "@/components/common/LetsTalk";
import AboutContent from "./AboutContent";
import AboutHero from "./AboutHero";

export const metadata = {
  title: "About Us — Builders Who Ship",
  description:
    "Mired builds products end to end — from AI integrations and custom software to enterprise marketing. Agile, tested, and proven at scale with millions of users.",
};

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <CompanyReachStats
        className="bg-white border-b-2 border-black"
        footnote="The same team behind enterprise platforms and growth-stage launches — one partner from stack assessment to ship."
      />
      <LetsTalk />
    </main>
  );
};

export default AboutPage;
