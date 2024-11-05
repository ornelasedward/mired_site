"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      comment:
        "Excellent job in helping me with my website. Since we have brought on Mired, BecauseBitcoin has 10x'd in traffic and revenue. I will continue to use them for all my website needs.",
      userName: "Max Schwartzman",
      userTitle: "CEO of BecauseBitcoin",
      userProfile: "https://i.postimg.cc/Ghy8tyfs/max.png",
    },
    {
      id: 2,
      comment:
        "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
      userName: "Jessica kaur",
      userTitle: "Naina and Noor",
      userProfile:
        "https://images.unsplash.com/photo-1573497490790-9053816a01d4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === testimonials.length - 1;

  return (
    <div className=" relative flex flex-col xl:grid grid-cols-12 items-center gap-10">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" w-full col-span-12 xl:col-span-4 xl:max-w-[520px]"
      >
        <div>
          <Image
            src={testimonials[currentSlide].userProfile}
            alt="men"
            width={520}
            height={680}
            style={{
              aspectRatio: "2/3",
            }}
            className=" w-full h-[340px]  sm:h-[520px]  object-cover"
            quality={80}
          />
        </div>
      </motion.div>
      <div className="relative  w-full  h-full col-span-12 xl:col-span-8">
        <div>
          <Image
            src={"/images/quete.svg"}
            alt="quete"
            quality={80}
            width={60}
            className="   object-cover"
            height={60}
          />
        </div>
        <div className=" pt-6">
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" text-base sm:text-lg xl:text-2xl font-manrope"
          >
            {testimonials[currentSlide].comment}
            {/* <span className=" font-extrabold">
              Can’t recommend them enough.
            </span> */}
          </motion.p>
        </div>
        <div className="flex pt-6 xl:pt-0 sm:pt-8 xl:absolute bottom-10   w-full  items-start justify-between">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h4 className=" text-2xl xl:text-3xl font-manrope font-medium">
              - {testimonials[currentSlide].userName}
            </h4>
            <p className=" text-xs sm:text-base text-[#A9A1AF]">
              {testimonials[currentSlide].userTitle}
            </p>
          </motion.div>
          <div className=" inline-flex items-center">
            <button
              onClick={prevSlide}
              className={cn(
                "outline-none inline-flex items-center h-[60px] w-[60px] border-skin-blue-800 border justify-center  focus:outline-none prev_button ",
                {
                  "cursor-not-allowed": isPrevDisabled,
                },
                isPrevDisabled ? "bg-transparent" : "bg-skin-blue-800"
              )}
              disabled={isPrevDisabled}
            >
              <svg
                width="16"
                className={cn(isPrevDisabled ? "fill-black" : "fill-white")}
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.6668 5.37502C15.012 5.37502 15.2918 5.65484 15.2918 6.00002C15.2918 6.3452 15.012 6.62502 14.6668 6.62502H6.9585V11C6.9585 11.2528 6.80622 11.4807 6.57267 11.5774C6.33913 11.6742 6.0703 11.6207 5.89156 11.442L0.891554 6.44196C0.774344 6.32475 0.708496 6.16578 0.708496 6.00002C0.708496 5.83426 0.774344 5.67529 0.891554 5.55808L5.89155 0.558077C6.0703 0.379328 6.33913 0.325855 6.57267 0.422594C6.80622 0.519331 6.9585 0.747229 6.9585 1.00002L6.9585 5.37502H14.6668Z" />
              </svg>
            </button>
            <span className="  w-[1px] h-[60px] bg-white block"></span>
            <button
              onClick={nextSlide}
              className={cn(
                "outline-none inline-flex text-white items-center h-[60px] w-[60px] border-skin-blue-800 border justify-center bg-skin-blue-800 focus:outline-none prev_button",
                { "cursor-not-allowed": isNextDisabled },
                isNextDisabled ? "bg-transparent" : "bg-skin-blue-800"
              )}
              disabled={isNextDisabled}
            >
              <svg
                width="16"
                height="12"
                className={cn(isNextDisabled ? "fill-black" : "fill-white")}
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.3335 5.37502C0.988318 5.37502 0.708496 5.65484 0.708496 6.00002C0.708496 6.3452 0.988318 6.62502 1.3335 6.62502H9.04183V11C9.04183 11.2528 9.19411 11.4807 9.42765 11.5774C9.6612 11.6742 9.93002 11.6207 10.1088 11.442L15.1088 6.44196C15.226 6.32475 15.2918 6.16578 15.2918 6.00002C15.2918 5.83426 15.226 5.67529 15.1088 5.55808L10.1088 0.558077C9.93002 0.379328 9.6612 0.325855 9.42765 0.422594C9.19411 0.519331 9.04183 0.747229 9.04183 1.00002V5.37502H1.3335Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
