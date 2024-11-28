import BookingConsultation from "@/components/common/BookingConsultation";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import EnsureYourBrand from "./EnsureYourBrand";
import MarketingHeroArea from "./MarketingHeroArea";
import WeFocus from "./WeFocus";

const page = () => {
  return (
    <div>
      <MarketingHeroArea />
      <EnsureYourBrand />
      <WeFocus />
      <BookingConsultation />
      <Sponsars />
      <Faqs />
      <div className=" pt-5">
      </div>
      {/* <LetsTalk /> */}
    </div>
  );
};

export default page;
