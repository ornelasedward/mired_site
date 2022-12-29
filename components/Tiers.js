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

      <div className="lg:p-8 p-4">
        <div className="border-4 border-[#171616] rounded-[1.875rem] bg-[#171616] text-[#161716] max-w-[1920px] m-auto">
          <div className="lg:flex lg:justify-evenly max-w-[1920px] m-auto">
            <div className="w-full lg:p-16 p-2">
              <div className="">
                <h1 className="text-6xl font-bold text-center text-[#F1EFE4]">
                  Digital Marketing
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
          </div>
        </div>
      </div>

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
