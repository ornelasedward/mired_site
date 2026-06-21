import Faqs from "@/components/common/Faqs";
import ServicesHero from "@/components/common/ServicesHero";

const FaqPage = () => {
  return (
    <div className="relative z-50">
      <Faqs />
      <div className="border-t-2 border-black">
        <ServicesHero />
      </div>
    </div>
  );
};

export default FaqPage;
