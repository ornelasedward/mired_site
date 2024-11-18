import Courses from "./Courses";
import DigitalMarketing from "./DigitalMarketing";
import Ecommerce from "./Ecommerce";
import WebDesign from "./WebDesign";

const DigitalSoluations = () => {
  return (
    <div className=" pt-5 sm:pt-10  ">
      <div className=" container  mx-auto text-center pb-10">
        <div className="  space-y-5">
          <h2 className="heading-1 normal-case text-5xl md:text-4xl lg:text-5xl">
            Build better. Scale faster. <br className="lg:block hidden" /> All
            under one roof.
          </h2>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
            Like having a tech team, AI lab, and content studio... minus the
            office drama.
          </p>
        </div>
      </div>

      <WebDesign />
      <DigitalMarketing />
      <Courses />
      {/* <Ecommerce /> */}
    </div>
  );
};

export default DigitalSoluations;
