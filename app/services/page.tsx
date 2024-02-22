import ConsultationBookung from "@/components/common/ConsultationBookung";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import DisplayServices from "@/components/services/DisplayServices";
import ServicesHeroArea from "./ServicesHeroArea";

const Services = () => {
  return (
    <div>
      <ServicesHeroArea />
      <div className=" py-6">
        <Sponsars />
      </div>
      <ConsultationBookung />
      <DisplayServices />
      <LetsTalk />
    </div>
  );
};

export default Services;
