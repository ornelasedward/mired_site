"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductLink = { label: string; href: string };

type Testimonial = {
  id: number;
  comment: string;
  userName: string;
  userTitle: string;
  userProfile: string;
  caseStudyUrl?: string;
  productLinks?: ProductLink[];
};

const TestimonialCard = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      comment:
        "Excellent job with the website we built — and with my software. Since we have brought on Mired, BecauseBitcoin has 10x'd in traffic and revenue. I will continue to use them for all my software and website needs.",
      userName: "Max Schwartzman",
      userTitle: "CEO of BecauseBitcoin",
      userProfile: "https://i.postimg.cc/Ghy8tyfs/max.png",
      caseStudyUrl: "/case-studies/because-bitcoin",
      productLinks: [
        { label: "BecauseBitcoin", href: "https://becausebitcoin.com/" },
        { label: "BB Terminal", href: "https://bbterminal.com/" },
        { label: "BB Trader X", href: "https://www.bbtraderx.com/dashboard" },
      ],
    },
    {
      id: 2,
      comment:
        "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my \"idea\" into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can't recommend them enough.",
      userName: "Jessica kaur",
      userTitle: "Naina and Noor",
      userProfile:
        "https://images.unsplash.com/photo-1573497490790-9053816a01d4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      comment:
        "I had the store and the inventory — what I didn't have was a way to sell it all online without losing my mind in Shopify. Mired built the whole thing: catalog, checkout, vendor workflows, the works. When I hit something Shopify couldn't do on its own — lead times, variant images — Edward figured it out. Best decision I made for the business.",
      userName: "Alex",
      userTitle: "Owner, Comanche Comms",
      userProfile:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      caseStudyUrl: "/case-studies/comanche-comms",
      productLinks: [
        { label: "Comanche Comms", href: "https://comanchecomms.com/" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/comanchecommsllc/",
        },
      ],
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
    <div className="relative flex flex-col xl:grid grid-cols-12 items-start gap-10">
      <motion.div
        key={`photo-${currentSlide}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full col-span-12 xl:col-span-4 xl:max-w-[520px] shrink-0"
      >
        <div className="border-2 border-black overflow-hidden">
          <Image
            src={testimonials[currentSlide].userProfile}
            alt={testimonials[currentSlide].userName}
            width={520}
            height={680}
            style={{ aspectRatio: "2/3" }}
            className="w-full h-[340px] sm:h-[520px] object-cover"
            quality={80}
          />
        </div>
      </motion.div>

      <div className="relative w-full col-span-12 xl:col-span-8 flex flex-col min-h-[520px] sm:min-h-[560px] xl:min-h-[520px]">
        <Image
          src="/images/quete.svg"
          alt=""
          quality={80}
          width={60}
          height={60}
          className="object-cover shrink-0"
        />

        <div className="pt-6 flex-1">
          <motion.p
            key={`quote-${currentSlide}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-lg sm:text-xl xl:text-2xl font-manrope min-h-[200px] sm:min-h-[260px] xl:min-h-[300px]"
          >
            {testimonials[currentSlide].comment}
          </motion.p>
        </div>

        <div className="pt-6 sm:pt-8 flex w-full items-end justify-between gap-6 shrink-0">
          <motion.div
            key={`author-${currentSlide}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-1 min-w-0 pr-4"
          >
            <h4 className="text-2xl sm:text-3xl xl:text-3xl font-manrope font-medium">
              - {testimonials[currentSlide].userName}
            </h4>
            <p className="inline-block text-blue-500 bg-blue-100 border border-blue-500 px-4 py-1.5 rounded-md text-sm font-medium mt-1">
              {testimonials[currentSlide].userTitle}
            </p>
            <div className="mt-4 min-h-[100px]">
              {testimonials[currentSlide].caseStudyUrl && (
                <div className="space-y-3">
                  <Link
                    href={testimonials[currentSlide].caseStudyUrl}
                    className="inline-flex items-center text-sm font-manrope font-semibold text-skin-blue-800 hover:underline"
                  >
                    Read the full case study →
                  </Link>
                  {testimonials[currentSlide].productLinks && (
                    <div className="flex flex-wrap gap-2">
                      {testimonials[currentSlide].productLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-manrope font-medium border border-black bg-white px-3 py-1 rounded-md hover:bg-skin-yellow-200 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          <div className="inline-flex items-center shrink-0">
            <button
              onClick={prevSlide}
              className={cn(
                "outline-none inline-flex items-center h-[60px] w-[60px] border-skin-blue-800 border justify-center focus:outline-none prev_button",
                isPrevDisabled ? "bg-transparent" : "bg-skin-blue-800"
              )}
              disabled={isPrevDisabled}
              aria-label="Previous testimonial"
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
            <span className="w-[1px] h-[60px] bg-white block" />
            <button
              onClick={nextSlide}
              className={cn(
                "outline-none inline-flex items-center h-[60px] w-[60px] border-skin-blue-800 border justify-center focus:outline-none prev_button",
                isNextDisabled ? "bg-transparent" : "bg-skin-blue-800"
              )}
              disabled={isNextDisabled}
              aria-label="Next testimonial"
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
