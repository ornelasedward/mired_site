import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const EnsureYourBrand = () => {
  return (
    <div className={` py-16 container`}>
      <div className="py-10  px-4 rounded-2xl  md:px-7 border-2 border-black">
        <h2 className="heading-1 normal-case text-5xl md:text-4xl lg:text-5xl text-center">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#F7BE08]">
              STEP 1
            </h5>
            <div>
              <h3 className=" leading-[1]">
                DISCOVER <br className=" hidden lg:block" />
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Your brand is unique. We start by understanding your voice, your
              audience, and your goals. Because generic solutions won&apos;t cut
              it in today&apos;s digital landscape.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#92C2EB]">
              STEP 2
            </h5>
            <div>
              <h3 className=" leading-[1]">
                DEFINE <br className=" hidden lg:block" /> 
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              We map out the digital infrastructure you need to monetize your
              influence and protect your brand&apos;s future. From custom
              platforms to AI tools that scale your impact.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#FF92B2]">
              STEP 3
            </h5>
            <div>
              <h3 className=" leading-[1]">
                DEVELOP <br className=" hidden lg:block" /> 
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Working as an extension of your team, we build solutions that
              feel authentic to your brand while creating multiple revenue
              streams. Think custom software, automated systems, and content
              engines.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#FF92B2]">
              STEP 4
            </h5>
            <div>
              <h3 className=" leading-[1]">
                DEPLOY <br className=" hidden lg:block" /> 
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Launch, analyze, optimize. We ensure your digital ecosystem not
              only reaches more people but converts them into loyal, paying
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureYourBrand;
