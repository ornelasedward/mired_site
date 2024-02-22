import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const EnsureYourBrand = () => {
  return (
    <div className={` py-16 container`}>
      <div className="py-10  px-4 rounded-2xl  md:px-7 border-2 border-black">
        <h4 className="mb-12 font-clash_display font-semibold uppercase text-[22px] md:text-[27px] lg:text-[38px]  text-center leading-tight">
          how we ensure your brand stands out
        </h4>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 lg:gap-20">
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#F7BE08]">
              DISCOVER
            </h5>
            <div>
              <h3 className=" leading-[1]">
                BRAND <br className=" hidden lg:block" /> ANALYSIS
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              We start by getting to the heart of your brand. What is your
              story? Who needs to hear it? Through analytics and market
              insights, we explore the landscape to locate where your brand can
              stand out.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#92C2EB]">
              DEFINE
            </h5>
            <div>
              <h3 className=" leading-[1]">
                Brand Identity <br className=" hidden lg:block" /> Creation
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Your brand&apos;s identity is its signature. We work with you to
              create a distinct brand identity that resonates with your values
              and appeals to your audience, ensuring consistency across all
              platforms.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#FF92B2]">
              DEVELOP
            </h5>
            <div>
              <h3 className=" leading-[1]">
                Digital Marketing <br className=" hidden lg:block" /> Strategy
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Effective marketing doesn&apos;t shout; it engages. We develop a
              strategy that speaks to your audience where they are, using SEO,
              targeted social media campaigns, and content that tells your
              brand&apos;s story.
            </p>
          </div>
          <div className=" space-y-3">
            <h5 className="text-[15px] font-montserrat font-bold text-[#FF92B2]">
              DEPLOY
            </h5>
            <div>
              <h3 className=" leading-[1]">
                engagement & <br className=" hidden lg:block" /> conversion
              </h3>
            </div>
            <p className=" text-xs font-normal font-montserrat lg:text-xl">
              Turning strategy into action, we roll out marketing campaigns
              designed to engage and convert. We monitor, analyze, and adjust to
              make sure your brand doesn&apos;t just speak, it&apos;s heard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureYourBrand;
