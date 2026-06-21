import CompanyReachStats from "@/components/common/CompanyReachStats";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import DisplayServices from "@/components/services/DisplayServices";
import ServicesHeroArea from "./ServicesHeroArea";

export const metadata = {
  title: "Services — Integrate, Build & Grow",
  description:
    "Mired helps you integrate AI into your stack, build custom software and internal tools, and grow with content, ads, and email — the same three pillars as our homepage.",
};

const Services = () => {
  return (
    <div>
      <ServicesHeroArea />
      <CompanyReachStats className="bg-skin-yellow-200 border-b-2 border-black" />
      <div className="bg-skin-pink-50 py-16 sm:py-20">
        <DisplayServices />
      </div>
      <ConsultationBookung />
    </div>
  );
};

export default Services;
