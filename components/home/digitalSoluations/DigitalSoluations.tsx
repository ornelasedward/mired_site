import Courses from "./Courses";
import DigitalMarketing from "./DigitalMarketing";
import Ecommerce from "./Ecommerce";
import WebDesign from "./WebDesign";

const DigitalSoluations = () => {
  return (
    <div className=" pt-5 sm:pt-10  ">
      <div className=" container  mx-auto text-center pb-10">
        <div className="  space-y-5">
          <h2 className=" heading-1">
            Comprehensive Digital <br className="  lg:block hidden" /> Solutions
            Tailored to <br className="  lg:block hidden" /> Your Success
          </h2>
          <p>Choose from our services to meet your business requirements:</p>
        </div>
      </div>

      <WebDesign />
      <DigitalMarketing />
      <Courses />
      <Ecommerce />
    </div>
  );
};

export default DigitalSoluations;
