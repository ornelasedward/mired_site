import Image from "next/image";

// import components
import Accordion from "./Accordion";

// import motion
import { motion } from "framer-motion";

// import variants
import {
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../variants";

const Faq = ({ faqData }) => {
  // destructure faq data
  const { title, subtitle, accordions } = faqData;
  return (
    <section id="faq" className="bg-[#FCFBEC]">
      <div className="px-4 pb-20">
        <div className="max-w-[1920px] grid xl:grid-cols-2 m-auto p-4 ">
          {/* top */}
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-[1920px] m-auto"
          >
            {/* text */}
            <motion.div
              variants={fadeInRight}
              className="xl:text-left text-center gap-y-9 grid max-w-[1280px] p-4 xl:mt-[-31rem]"
            >
              <h1 className="font-bold text-5xl">{title}</h1>
              <h2 className=" font-medium text-2xl">{subtitle}</h2>
            </motion.div>
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
    </section>
  );
};

export default Faq;
