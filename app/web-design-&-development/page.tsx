import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import DesignDevelopment from "./DesignDevelopment";
import OurProcess from "./OurProcess";
import WeFocusOfWeb from "./WeFocusOfWeb";
import WebDesignHeroArea from "./WebDesignHeroArea";

const page = () => {
  return (
    <div className="relative">
      <WebDesignHeroArea />
      <DesignDevelopment />
      <OurProcess />
      <WeFocusOfWeb />

      <Faqs />
      <div className=" pt-5">
        <Sponsars />
      </div>
      <LetsTalk />
    </div>
  );
};

export default page;
