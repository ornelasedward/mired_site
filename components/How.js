import Image from "next/image";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants";

const How = ({ howData }) => {
  // destructure how data
  const { title, girlImg } = howData;
  return (
    <section id="how" className="">
      <motion.div
        variants={staggerTextContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 px-2"
      >
        {/* text */}
        <motion.div variants={fadeInLeft} className="">
          <h1 className="font-semibold text-3xl sm:text-5xl text-center text-[#171616] mb-10">
            {title}
          </h1>
        </motion.div>

        {/* image */}
        <motion.div variants={fadeInRight} className="">
          <div className="flex items-center justify-center">
            <div className="flex-1 p-3 rounded-[1.875rem] shadow-xl bg-[#171616] max-w-5xl">
              <div id="aboutus" className="aspect-video">
                <iframe
                  className="aspect-video w-full rounded-[1.875rem] p-1"
                  src="https://player.vimeo.com/video/744432157?h=056c136e3f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default How;
