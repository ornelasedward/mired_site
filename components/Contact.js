import Image from "next/image";
import Link from "next/link";

// import Icons
import { SlArrowDown } from "react-icons/sl";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInUp, staggerTextContainer } from "../variants";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = ({ contactData }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g4hqwd2",
      "template_y48y9zr",
      form.current,
      "oF4ZHxYDt8xOidpgG"
    );

    e.target.reset();
  };

  // destructure footer data
  const {
    text,
    text15,

    text10,

    bubble2,
    bubble3,
  } = contactData;

  return (
    <div id="contact" className="bg-[#FCFBEC] py-[5rem] sm:px-8 px-2">
      <motion.div
        variants={staggerTextContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.1 }}
        className="border-4 border-[#171616] rounded-[1.875rem] bg-[#171616] text-[#FCF7E8] max-w-[1920px] m-auto"
      >
        <div className="lg:flex lg:justify-evenly max-w-[1920px] m-auto">
          {/* Form */}
          <div className="w-full lg:p-16 px-2">
            <h1 className="xs:text-3xl text-2xl font-bold text-center mt-10 lg:mt-0">
              {text}
            </h1>
            <h1 className="xs:text-6xl text-4xl font-bold text-center lg:mt-0 mb-20">
              {text15}
            </h1>
            <div className="max-w-[1280px] m-auto">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-x-1 gap-y-5 xs:gap-x-5 xs:gap-y-2 items-center mb-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="lg:col-span-1 col-span-2 min-h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                  />

                  <input
                    type="number"
                    name="phone"
                    required
                    placeholder="Phone number"
                    className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                  />

                  <input
                    type="text"
                    name="website"
                    placeholder="Current Website"
                    className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem]"
                  />

                  <select
                    name="services"
                    placeholder="Service you're interested in"
                    required
                    className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem] arrow appearance-none"
                  >
                    <option value="">
                      -- Service you're interested in? --
                    </option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Marketing">Digital Marketing</option>
                    <option value="SMM">Social Media Managment</option>
                    <option value="SEO">Search Engine optimization</option>
                    <option value="other">Other (please specify)</option>
                  </select>

                  <select
                    name="contactform"
                    placeholder="Service you're interested in"
                    required
                    className="lg:col-span-1 col-span-2 h-[4.5rem] bg-[#2D2D2D] p-4 mb-4 text-[20px] md:text-[22px] font-normal rounded-[1.875rem] arrow appearance-none"
                  >
                    <option value="">-- Preferred method of contact? --</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="SMS">SMS/Text</option>
                  </select>

                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="bg-[#2D2D2D] resize-none text-[20px] md:text-[22px] p-[0.3rem] md:p-[1rem] font-normal col-span-2 rounded-[1.875rem]"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="submit btn bg-[#F2790C] text-[#] mt-2 px-16"
                  >
                    {text10}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeInUp}
          className="relative lg:bottom-20 bottom-[-4rem] z-20 overflow-hidden -mb-60"
        >
          <Image src={bubble2} width={200} height={200} />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="relative left-[-2%] bottom-[-2rem] lg:bottom-12 z-20 overflow-hidden -mb-14"
        >
          <Image src={bubble3} width={100} height={100} />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="relative left-[87%] bottom-[67rem] lg:bottom-[55rem] z-20 overflow-hidden lg:-mb-32"
        >
          <Image src={bubble3} width={100} height={100} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
