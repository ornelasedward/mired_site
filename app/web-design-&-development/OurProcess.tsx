"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";

const OurProcess = () => {
  const STEPSDATA = [
    {
      title: "Understand",
      des: "Before delving into any project, we prioritize understanding your unique needs, objectives, and audience. This foundational step ensures that every decision we make aligns with your monetization goals and vision.",
    },
    {
      title: "Research",
      des: "Drawing from a wealth of industry knowledge, we embark on comprehensive research. This phase allows us to tailor our strategies effectively, ensuring they resonate with your target audience and platform-specific requirements.",
    },
    {
      title: "design",
      des: "With a clear roadmap in place, our design process begins. Here, we marry aesthetics with functionality, creating compelling visuals that convert. It’s important to not only engage users but also, interact and drive them towards the desired action.",
    },
    {
      title: "test & Launch",
      des: "Before launching, we rigorously test each feature, ensuring flawless functionality across all devices and platforms. Once perfected, your web platform is launched, ready to captivate and convert its audience.",
    },
  ];
  type Swiper = /*unresolved*/ any;
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };
  return (
    <div className=" bg-skin-pink-50 border-t border-black overflow-hidden relative  py-10 xl:py-20">
      <div className=" container">
        <div>
          <div className="max-w-[650px]">
            <h3>Our Process</h3>
            <p className="mt-3">
              Through these 5 steps, we ensure every voice is heard, empowering
              companies to resonate with their audience and fuel sustainable
              growth.
            </p>
          </div>
        </div>
      </div>
      <div className=" container sm:max-w-full pt-20">
        <div className=" item w-full h-[1px] flex justify-center items-center relative  bg-black">
          <div className=" z-20 absolute mx-auto container flex items-center justify-between">
            <button onClick={handlePrev} id="previous">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="19.5"
                  cy="19.5"
                  r="19"
                  fill="black"
                  stroke="black"
                />
                <path
                  d="M9.93934 17.9393C9.35355 18.5251 9.35355 19.4749 9.93934 20.0607L19.4853 29.6066C20.0711 30.1924 21.0208 30.1924 21.6066 29.6066C22.1924 29.0208 22.1924 28.0711 21.6066 27.4853L13.1213 19L21.6066 10.5147C22.1924 9.92893 22.1924 8.97918 21.6066 8.3934C21.0208 7.80761 20.0711 7.80761 19.4853 8.3934L9.93934 17.9393ZM28 17.5L11 17.5L11 20.5L28 20.5L28 17.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <button onClick={handleNext} id="next">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="19.5"
                  cy="19.5"
                  r="19"
                  transform="rotate(-180 19.5 19.5)"
                  fill="black"
                  stroke="black"
                />
                <path
                  d="M29.0607 21.0607C29.6464 20.4749 29.6464 19.5251 29.0607 18.9393L19.5147 9.3934C18.9289 8.80761 17.9792 8.80761 17.3934 9.3934C16.8076 9.97919 16.8076 10.9289 17.3934 11.5147L25.8787 20L17.3934 28.4853C16.8076 29.0711 16.8076 30.0208 17.3934 30.6066C17.9792 31.1924 18.9289 31.1924 19.5147 30.6066L29.0607 21.0607ZM11 21.5L28 21.5L28 18.5L11 18.5L11 21.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className=" relative z-50 -mt-2"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {STEPSDATA.map((step, i) => (
            <SwiperSlide className=" relative z-50" key={i}>
              <div
                onClick={() => slideTo(i + 1)}
                className=" mx-auto cursor-pointer z-50  w-[15px] h-[15px] rounded-full bg-[#420FB0]"
              ></div>
              <div className=" h-[300px] mt-5 border-2 rounded-10 border-black p-4 ">
                <h5 className="  text-base  font-manrope font-extrabold">
                  Step {i + 1}
                </h5>
                <h4 className=" text-xl lg:text-2xl font-clash_display font-semibold">
                  {step.title}
                </h4>
                <p className=" text-base font-normal font-monroppe">
                  {step.des}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProcess;
