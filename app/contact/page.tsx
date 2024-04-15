import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import ServicesHero from "@/components/common/ServicesHero";
import Sponsars from "@/components/common/Sponsars";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" relative z-50">
      <ServicesHero />
      <div className=" py-5">
        <Sponsars />
      </div>
      <Faqs className=" !bg-white" />
      {/* <LetsTalk className="" /> */}
    </div>
  );
};

export default Contact;
