import Header from "./Header";
import Link from "next/link";

// import components
import Accordion from "./Accordion2";

// import react icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// import motion
import { motion } from "framer-motion";

// import variants
import {
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../variants";

const Tiers = ({ headerData, tiersData, navData }) => {
  // destructure footer data

  const { title, subtitle, accordions } = tiersData;

  return (
    <div id="tiersform" className="gradient_bg1">
      <Header headerData={headerData} navData={navData} />

      <div id="tiersform" className="sm:px-8 px-2">
        {/* Title */}
        <div className="lg:p-20 p-4">
          <h1 className="text-7xl lg:text-8xl font-bold text-left mt-32 mb-10 max-w-[400px]">
            {title}
          </h1>
          <div className="flex gap-x-8 font-semibold">
            <Link href="/">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Web Development</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
            <Link href="/">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Digital Marketing</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
            <Link href="/">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Social Media Management</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
          </div>

          {/* Web development */}
          <div className="mt-32">
            <h1 className="text-6xl font-bold text-center">Web Development</h1>
            <motion.div
              variants={staggerTextContainer}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[1920px] m-auto mt-10"
            >
              {/* image */}
            </motion.div>
            {/* accordions list */}
            <motion.div
              variants={staggerAccordionContainer}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-x-[20px] gap-y-[10px] max-w-[1920px] m-auto drop-shadow-lg"
            >
              {accordions.map((accordion, idx) => {
                return <Accordion accordion={accordion} key={idx} />;
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="lg:p-8 p-4">
        <div className="border-4 border-[#171616] rounded-[1.875rem] bg-[#171616] max-w-[1920px] m-auto">
          <div className="lg:p-16 p-4 text-[#FCF7E8]">
            <h1 className=" text-6xl font-bold text-center mb-16">
              Digital Marketing
            </h1>

            <div className="grid lg:grid-cols-2 grid-cols-1 border-2 m-4 gap-5">
              <div className="max-w-[500px] border-2 p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E] m-auto">
                <h2 className="text-4xl font-semibold text-center mb-4">
                  01 Social Media Ads
                </h2>
                <p>
                  Designed to reach and engage the target audience on platforms
                  such as Facebook, Instagram, TikTok, and LinkedIn. We use data
                  and insights from market analysis to create targeted campaigns
                  that are tailored to the needs of the business and its target
                  audience.
                </p>
              </div>
              <div className="max-w-[500px] border-2 p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E]">
                <h2 className="text-4xl font-semibold text-center mb-4">
                  01 Social Media Ads
                </h2>
                <p>
                  Designed to reach and engage the target audience on platforms
                  such as Facebook, Instagram, TikTok, and LinkedIn. We use data
                  and insights from market analysis to create targeted campaigns
                  that are tailored to the needs of the business and its target
                  audience.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 border-2 m-4 gap-5">
              <div className="max-w-[500px] border-2 p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E] m-auto">
                <h2 className="text-4xl font-semibold text-center mb-4">
                  01 Social Media Ads
                </h2>
                <p>
                  Designed to reach and engage the target audience on platforms
                  such as Facebook, Instagram, TikTok, and LinkedIn. We use data
                  and insights from market analysis to create targeted campaigns
                  that are tailored to the needs of the business and its target
                  audience.
                </p>
              </div>
              <div className="max-w-[500px] border-2 p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E]">
                <h2 className="text-4xl font-semibold text-center mb-4">
                  01 Social Media Ads
                </h2>
                <p>
                  Designed to reach and engage the target audience on platforms
                  such as Facebook, Instagram, TikTok, and LinkedIn. We use data
                  and insights from market analysis to create targeted campaigns
                  that are tailored to the needs of the business and its target
                  audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Management */}
      <div className="lg:px-[5.7rem] px-2 mt-20">
        <h1 className="text-6xl font-bold text-center">
          Social Media Management
        </h1>
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-[1920px] m-auto mt-10"
        >
          {/* image */}
        </motion.div>
        {/* accordions list */}
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-x-[20px] gap-y-[10px] max-w-[1920px] m-auto drop-shadow-lg"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Tiers;
