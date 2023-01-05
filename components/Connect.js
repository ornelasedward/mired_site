import Header from "./Header";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInUp, staggerTextContainer } from "../variants";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Connect = ({ headerData, connectData, navData }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g4hqwd2",
      "template_v0o8fnv",
      form.current,
      "oF4ZHxYDt8xOidpgG"
    );

    e.target.reset();
  };

  // destructure footer data

  const { title, subtitle } = connectData;

  return (
    <div id="contactform" className="gradient_bg1">
      <Header headerData={headerData} navData={navData} />

      <div id="contactform" className="py-[10rem] sm:px-8 px-2">
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
              <h1 className="text-6xl font-bold text-center mt-10 lg:mt-0 mb-2">
                {title}
              </h1>
              <h1 className="text-3xl font-normal text-center lg:mt-0 mb-20">
                {subtitle}
              </h1>
              <div className="max-w-[1280px] m-auto">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-2 gap-x-1 gap-y-5 xs:gap-x-5 xs:gap-y-5 items-center mb-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="What's your name?"
                      required
                      className="lg:col-span-1 col-span-2 min-h-[4.5rem] bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="What's your email address?"
                      className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                    />

                    <input
                      type="text"
                      name="website"
                      placeholder="What's your website address?"
                      className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                    />

                    <input
                      type="message"
                      name="paid ads"
                      placeholder="Have you done paid ads? If yes, how long?"
                      className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                    />

                    <legend className="col-span-2 font-semibold text-2xl mb-4 mt-8">
                      What marketing opportunities are your biggest priority?
                      (Select all that apply)
                    </legend>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Website Development"
                        value="Website Development"
                        name="Website Development"
                        className="cursor-pointer"
                      />
                      <label
                        for="Website Development"
                        className="lg:pr-40 py-4 cursor-pointer hover:font-semibold"
                      >
                        Website Development
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Paid Social Media Ads"
                        value="Paid Social Media Ads"
                        name="Paid Social Media Ads"
                        className="cursor-pointer"
                      />
                      <label
                        for="Paid Social Media Ads"
                        className="lg:pr-40 py-4 cursor-pointer hover:font-semibold"
                      >
                        Paid Social Media Ads
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Google Ads"
                        value="Google Ads"
                        name="Google Ads"
                        className="cursor-pointer"
                      />
                      <label
                        for="Google Ads"
                        className="lg:pr-60 xs:py-4 py-7 cursor-pointer hover:font-semibold"
                      >
                        Google Ads
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Influencer Marketing"
                        value="Influencer Marketing"
                        name="Influencer Marketing"
                        className="cursor-pointer"
                      />
                      <label
                        for="Influencer Marketing"
                        className="lg:pr-52 py-4 cursor-pointer hover:font-semibold"
                      >
                        Influencer Marketing
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Social Media Management"
                        value="Social Media Management"
                        name="Social Media Management"
                        className="cursor-pointer"
                      />
                      <label
                        for="Social Media Management"
                        className="lg:pr-32 py-4 cursor-pointer hover:font-semibold"
                      >
                        Social Media Management
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Content Creation"
                        value="Content Creation"
                        name="Content Creation"
                        className="cursor-pointer"
                      />
                      <label
                        for="Content Creation"
                        className="lg:pr-52 xs:py-4 py-7 cursor-pointer hover:font-semibold"
                      >
                        Content Creation
                      </label>
                    </div>
                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Email/SMS"
                        value="Email/SMS"
                        name="Email/SMS"
                        className="cursor-pointer"
                      />
                      <label
                        for="Email/SMS"
                        className="lg:pr-52 py-4 cursor-pointer hover:font-semibold"
                      >
                        Email/SMS Marketing
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] lg:text-2xl text-lg bg-[#fff]">
                      <input
                        type="checkbox"
                        id="Something Else"
                        value="Something Else"
                        name="Something Else"
                        className="cursor-pointer"
                      />
                      <label
                        for="Something Else"
                        className="lg:pr-60 xs:py-4 py-7 cursor-pointer hover:font-semibold"
                      >
                        Something Else
                      </label>
                    </div>

                    <h1 className="col-span-2 font-semibold text-2xl mb-4 mt-8">
                      How much do you invest in paid advertising per month right
                      now?
                    </h1>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$0 - $500"
                        value="$0 - $500"
                        name="$0 - $500"
                        className="cursor-pointer"
                      />
                      <label
                        for="$0 - $500"
                        className="lg:pr-40 py-3 xs:py-4 cursor-pointer hover:font-semibold"
                      >
                        $0 - $500
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$500 - $1,000"
                        value="$500 - $1,000"
                        name="$500 - $1,000"
                        className="cursor-pointer"
                      />
                      <label
                        for="$500 - $1,000"
                        className="lg:pr-40 py-3 xs:py-4 cursor-pointer hover:font-semibold"
                      >
                        $500 - $1,000
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$1,000 - $2,000"
                        value="$1,000 - $2,000"
                        name="$1,000 - $2,000"
                        className="cursor-pointer"
                      />
                      <label
                        for="$1,000 - $2,000"
                        className="lg:pr-60 xs:py-4 cursor-pointer hover:font-semibold"
                      >
                        $1,000 - $2,000
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$2,000 - $5,000"
                        value="$2,000 - $5,000"
                        name="$2,000 - $5,000"
                        className="cursor-pointer"
                      />
                      <label
                        for="$2,000 - $5,000"
                        className="lg:pr-52 xs:py-4 cursor-pointer hover:font-semibold"
                      >
                        $2,000 - $5,000
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$5,000 - $10,000"
                        value="$5,000 - $10,000"
                        name="$5,000 - $10,000"
                        className="cursor-pointer"
                      />
                      <label
                        for="$5,000 - $10,000"
                        className="lg:pr-32 xs:py-4 cursor-pointer hover:font-semibold"
                      >
                        $5,000 - $10,000
                      </label>
                    </div>

                    <div className="flex gap-x-4 border-2 px-4 border-[#171616] text-2xl bg-[#fff]">
                      <input
                        type="checkbox"
                        id="$10,000+"
                        value="$10,000+"
                        name="$10,000+"
                        className="cursor-pointer"
                      />
                      <label
                        for="$10,000+"
                        className="pr-52 py-4 cursor-pointer hover:font-semibold"
                      >
                        $10,000+
                      </label>
                    </div>

                    <h1 className="col-span-2 font-semibold text-2xl mb-4 mt-8S">
                      The biggest thing we can help with?
                    </h1>

                    <textarea
                      name="message1"
                      rows="2"
                      required
                      className="bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  resize-none text-[20px] md:text-[22px] p-[0.3rem] md:p-[1rem] font-normal col-span-2 rounded-[1.875rem]"
                    />

                    <h1 className="col-span-2 font-semibold text-2xl mb-4 mt-8">
                      Is there anything else we should know?
                    </h1>

                    <textarea
                      name="message2"
                      rows="2"
                      required
                      className="bg-[#EEEDE3] border-2 border-[#171616] text-[#171616]  resize-none text-[20px] md:text-[22px] p-[0.3rem] md:p-[1rem] font-normal col-span-2 rounded-[1.875rem]"
                    />
                  </div>
                  <div className="text-center xl:mb-0 mb-10">
                    <button
                      type="submit"
                      className="submit btn bg-[#F2790C] text-[#] mt-2 px-16 font-medium"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;
