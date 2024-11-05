import Courses from "./Courses";
import DigitalMarketing from "./DigitalMarketing";
import Ecommerce from "./Ecommerce";
import WebDesign from "./WebDesign";

const DigitalSoluations = () => {
  return (
    <div className=" pt-5 sm:pt-10  ">
      <div className=" container  mx-auto text-center pb-10">
        <div className="  space-y-5">
          <h2 className="heading-1 normal-case">
            Build better. Scale faster. <br className="lg:block hidden" /> All
            under one roof.
          </h2>
          <p>
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
