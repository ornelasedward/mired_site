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
        {/* Title */}
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
          <div className="mt-32">
            <h1 className="text-6xl font-bold text-center">Web Development</h1>
            <div className="max-w-[600px] mt-20 border-2 p-8 border-[#171616] rounded-[1.875rem]">
              <h2 className="text-4xl font-medium mb-5">01 Market Analysis</h2>
              <p>
                We understand that a comprehensive market analysis is essential
                for the success of any website design project. That's why we
                always take the time to research and analyze the target market
                before starting the design process. <br />
                <br /> Completing a market analysis before designing a website
                allows us to create a targeted and effective design that is
                tailored to the needs of the target market.
              </p>
            </div>
            <div className="max-w-[600px] mt-20 border-2 p-8 border-[#171616] rounded-[1.875rem]">
              <h2 className="text-4xl font-medium mb-5">
                02 Proper Copywriting
              </h2>
              <p>
                Search engine optimization (SEO) is important to drive traffic
                and success to your website. That's why we always prioritize
                front page SEO and proper copy before starting the design
                process for any website.
                <br /> <br />
                <b className="text-lg">
                  This allows the website to be:
                </b> <br /> <br />
                1. Optimized for keywords and phrases relevant to the target
                audience and industry. <br /> 2. Ranked higher in search engine
                results pages, allowing for more visibility.
                <br /> 3. Improve the user experience by making it easier for
                users to find the information they are looking for.
                <br />
                <br /> This can lead to increased engagement and conversions for
                the website, ultimately helping it to achieve its goals.
              </p>
            </div>
            <div className="max-w-[600px] mt-20 border-2 p-8 border-[#171616] rounded-[1.875rem]">
              <h2 className="text-4xl font-medium mb-5">03 Web Design</h2>
              <p>
                We then use the market analysis and copywriting to create web
                designs that deliver a great user experience and drive
                conversions.
                <br />
                <br /> First, we conduct a market analysis to understand the
                needs and preferences of the target audience and identify
                industry trends.
                <br />
                <br /> Next, we use copywriting to craft compelling and relevant
                content for the website.
                <br />
                <br /> Finally, we use the insights gained from the market
                analysis and copywriting to inform the design of the website,
                ensuring that it is user-centered, easy to navigate, and
                optimized for conversions.
              </p>
            </div>
            <div className="max-w-[600px] mt-20 border-2 p-8 border-[#171616] rounded-[1.875rem]">
              <h2 className="text-4xl font-medium mb-5">04 Web Development</h2>
              <p>
                Once the web design is finalized, our developers will use their
                expertise to bring the design to life by coding the website
                using a range of programming languages and frameworks. We are
                committed to using the latest and most effective technologies to
                ensure that the website is fast, reliable, and secure.
                <br />
                <br /> We also provide our clients with a program that allows
                them to make minor alterations to the webpage in the future.
                This gives our clients the flexibility to make updates and
                changes to the website as needed, without the need for expensive
                and time-consuming redevelopment.
                <br />
                <br /> Overall, our in-house coding capabilities allow us to
                create a unique and tailored website solution that is customized
                to the needs of the business and the target audience, and that
                can be easily maintained and updated in the future.
              </p>
            </div>
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
