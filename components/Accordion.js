import { useState } from "react";

// import icons
import { HiOutlineMinus } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight } from "../variants";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { question, answer, answer1 } = accordion;
  return (
    <motion.div variants={fadeInRight} className="">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="border-2 rounded-xl border-[#171616] cursor-pointer h-[100px] px-[35px] flex items-center bg-[#FCFBEC] hover:bg-[#161716] hover:text-[#FCFBEC] transition ease-in-out"
      >
        <div className="w-full flex gap-4 justify-start items-center">
          {/* //*icons */}
          <div className="transition-all duration-500">
            {isOpen ? (
              <motion.div initial="initial" animate={{ rotate: 180 }}>
                <HiOutlineMinus className="text-[28px] text-accent" />
              </motion.div>
            ) : (
              <motion.div initial="initial" animate={{ rotate: 0 }}>
                <SlArrowRight className="text-[28px] text-accent" />
              </motion.div>
            )}
          </div>
          {/* //*title */}
          <p className="lg:text-2xl sm:text-2xl text-lg hover:font-semibold font-normal transition ease-in-out">
            {question}
          </p>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-[750px] lg:h-[1000px] p-8 bg-[#FFF7F5]" : "max-h-0"
        } h-[160px] overflow-hidden transition-all`}
      >
        <p className="lg:text-2xl sm:text-lg text-md font-medium">
          {answer} <br />
          <br /> {answer1}
        </p>
      </div>
    </motion.div>
  );
};

export default Accordion;
