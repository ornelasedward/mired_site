import Header from "./Header";
import Link from "next/link";

// import react icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeInUp, staggerTextContainer } from "../variants";

const Tiers = ({ headerData, tiersData, navData }) => {
  // destructure footer data

  const { title, subtitle } = tiersData;

  return (
    <div id="tiersform" className="gradient_bg1">
      <Header headerData={headerData} navData={navData} />

      <div id="tiersform" className="py-[10rem] sm:px-8 px-2">
        <div className="xs:p-20 p-4">
          <h1 className="text-7xl lg:text-8xl font-bold text-left mt-10 lg:mt-0 mb-10 max-w-[400px]">
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
        </div>
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.1 }}
          className="border-4 border-[#171616] rounded-[1.875rem] bg-[#EEEDE3] text-[#161716] max-w-[1920px] m-auto"
        >
          <div className="lg:flex lg:justify-evenly max-w-[1920px] m-auto">
            {/* Form */}
            <div className="w-full lg:p-16 px-2">
              <h1 className="text-3xl font-normal text-center lg:mt-0 mb-20">
                {subtitle}
              </h1>
              <div className="max-w-[1280px] m-auto"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tiers;
