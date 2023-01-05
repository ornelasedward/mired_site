// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Email from "../components/Email";
import Footer from "../components/Footer";

// import data
import {
  headerData,
  heroData,
  navData,
  aboutData,
  howData,
  servicesData,
  galleryData,
  faqData,
  contactData,
  emailData,
  footerData,
} from "../data.json";

const Home = ({
  headerData,
  heroData,
  navData,
  aboutData,
  howData,
  servicesData,
  galleryData,
  faqData,
  contactData,
  emailData,
  footerData,
}) => {
  return (
    <div className="overflow-hidden mx-auto bg-[#FDFAEC]">
      <div className="gradient_bg1">
        <Hero heroData={heroData} headerData={headerData} navData={navData} />
        <About aboutData={aboutData} />
      </div>
      <How howData={howData} />
      <Services servicesData={servicesData} />
      <Gallery galleryData={galleryData} />
      <Faq faqData={faqData} />
      <Contact contactData={contactData} />
      <Email emailData={emailData} />
      <Footer footerData={footerData} />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      aboutData,
      howData,
      servicesData,
      galleryData,
      faqData,
      contactData,
      emailData,
      footerData,
    },
  };
};

export default Home;
