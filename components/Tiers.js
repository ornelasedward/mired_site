import Header from "./Header";
import Link from "next/link";
import Image from "next/image";

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

  const { title, accordions } = tiersData;

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
            <Link href="#web_development">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Web Development</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
            <Link href="#digital_marketing">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Digital Marketing</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
            <Link href="#smma">
              <div className="flex cursor-pointer">
                <h2 className="pr-1">Social Media Management</h2>
                <HiOutlineArrowNarrowRight className="text-2xl pt-[0.1rem] text-[#F2690C]" />
              </div>
            </Link>
          </div>

          {/* Web development */}
          <div id="web_development" className="web_development mt-32">
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
      <div id="digital_marketing" className="digital_marketing lg:p-8 p-4">
        <div className="border-4 border-[#171616] rounded-[1.875rem] bg-[#171616] max-w-[1920px] m-auto">
          <div className="lg:p-16 p-4 text-[#FCF7E8]">
            <div className="mb-16">
              <h1 className=" text-6xl font-bold text-center mb-10">
                Digital Marketing
              </h1>
              <h2 className="max-w-[800px] m-auto">
                We offer a range of services that are tailored to the specific
                needs of each individual business. These services include, but
                are not limited to, running social media ads, email marketing
                campaigns, re-targeting, and lead generation services.
              </h2>
            </div>
            <div className="grid justify-center">
              <div className="grid lg:grid-cols-2 grid-cols-1 m-4 lg:mb-16 gap-5">
                <div className="lg:max-w-[500px]  p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E] m-auto">
                  <h2 className="text-4xl font-semibold text-center mb-4">
                    01 Social Media Ads
                  </h2>
                  <p>
                    Designed to reach and engage the target audience on
                    platforms such as Facebook, Instagram, TikTok, and LinkedIn.
                    We use data and insights from market analysis to create
                    targeted campaigns that are tailored to the needs of the
                    business and its target audience.
                  </p>
                </div>
                <div className="lg:max-w-[500px]  p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#2D2D2D]">
                  <h2 className="text-4xl font-semibold text-center mb-4">
                    02 Email Marketing
                  </h2>
                  <p>
                    Our email marketing campaigns are carefully crafted to
                    deliver relevant and engaging content to the target
                    audience, helping to build relationships and drive
                    conversions. We use segmentation and personalization
                    techniques to ensure that the emails are relevant and
                    effective.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 m-4 gap-5">
                <div className="lg:max-w-[500px] p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#1F1E1E] m-auto">
                  <h2 className="text-4xl font-semibold text-center mb-4">
                    03 Re-Targeting
                  </h2>
                  <p>
                    Designed to reach users who have already visited the website
                    but have not yet converted. By showing them personalized ads
                    and offers, we can increase the chances of converting them
                    into customers.
                  </p>
                </div>
                <div className="max-w-[500px] p-4 lg:p-8 md:col-span-1 rounded-[1.875rem] bg-[#2D2D2D]">
                  <h2 className="text-4xl font-semibold text-center mb-4">
                    04 Lead Generation
                  </h2>
                  <p>
                    Our lead generation services are designed to help businesses
                    find and attract potential customers by generating leads
                    through various channels such as search engines, social
                    media, and content marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Management */}
      <section id="smma" className="smma text-gray-400">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="border-2 border-[#171616] rounded-[1.875rem]">
              <h1 className="font-bold text-6xl text-center p-8 text-[#171616]">
                Social Media Management
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center"></div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="text-lg mb-4 text-[#171616] font-bold">
                  Our social media management services consist of several key
                  elements designed to help businesses effectively manage and
                  grow their online presence. These include:
                </p>
                <p className="text-lg mb-4 text-[#171616] font-normal">
                  <b>Content creation,</b> including original posts, curation of
                  user-generated content, and short-form content like hashtags
                  and quotes.
                  <br />
                  <br />
                  <b>Scheduled posting,</b> to ensure a consistent stream of
                  content on the client's social media accounts. Trend and
                  market research, to stay up-to-date on the latest best
                  practices and create relevant and effective campaigns.
                  <br />
                  <br />
                  <b>Logo design and branding services,</b> to ensure
                  consistency across all of the client's social media accounts
                  and develop a cohesive brand identity.
                </p>
                <br />

                <p className="text-lg mb-4 text-[#171616] font-normal">
                  Overall, these services are intended to help businesses build
                  and maintain a strong online presence, attract and engage an
                  audience, and drive growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tiers;
