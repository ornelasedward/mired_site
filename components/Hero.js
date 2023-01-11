import Image from "next/image";
import Link from "next/link";

// import components
import Header from "./Header";

// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, boyAnim, fadeInDown } from "../variants";

// import icons
import { CgArrowLongRight } from "react-icons/cg";

const Hero = ({ headerData, heroData, navData }) => {
  // destructure heroData
  const { title, leftWords, rightWords, boyImg, girlImg, truckImg, btnText } =
    heroData;
  return (
    <section id="/" className="">
      {/* container */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px]"
      >
        {/* header */}
        <Header headerData={headerData} navData={navData} />

        <div className="xl:pt-72 pt-52">
          {/* title */}
          <div className="grid gap-y-12">
            <motion.h1
              variants={fadeInDown}
              className="text-center text-4xl sm:text-5xl xl:text-6xl"
            >
              A blend of <b>creative marketing</b> and <b>website</b>
              <span /> <b>development</b> to bring your company’s message to
              life
            </motion.h1>
            <h2 className="text-center font-medium xs:text-lg text-sm">
              Our Three Tiers of Digital Marketing will help you construct a
              <br />
              successful strategy that your business needs!
            </h2>
            <div className="flex justify-center gap-5 xs:gap-10 xs:pt-8 pt-4">
              <Link href="contactform">
                <button type="button" className="btn xs:px-14">
                  Contact Us
                </button>
              </Link>
              <Link href="servicesform">
                <button
                  type="button"
                  className="h-[50px] px-[30px] font-bold border-[#161716] border-2 rounded-[1.875rem] transition ease-in-out bg-transparent text-[#171616] hover:bg-[#161716] hover:text-[#FAFAFA] xs:px-14"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
