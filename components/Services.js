import Image from "next/image";
import Link from "next/link";

import { SlArrowRight } from "react-icons/sl";
import { GiRoundStar } from "react-icons/gi";

const Services = ({ servicesData }) => {
  const {} = servicesData;
  return (
    <div id="services" className="bg-[#FFE1C5] px-4 pb-32">
      <div className="py-20">
        <h1 className="text-center sm:text-5xl text-4xl font-bold mb-16">
          Services
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-10 gap-y-10 max-w-[1280px] m-auto">
          {/* //*First Box */}
          <div className="h-auto border-4 border-[#161616] bg-[#FAFAFA] text-[#161616] rounded-[1.875rem] py-10 xl:px-0 mx-6 xl:mx-0 grid gap-y-5 justify-center xl:max-w-[370px]">
            <div className="block md:flex xl:block">
              <div className="text-[#F2790C] text-5xl xl:mb-6 mt-2 xl:mt-0 pr-2 xl:pr-0 md:mb-0 mb-6">
                <GiRoundStar />
              </div>
              <h1 className="xl:text-3xl sm:text-6xl text-4xl text-center font-semibold mb-12">
                Web Development
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <Link href="servicesform">
                <button className="btn font-medium text-center w-60 hover:bg-[#F2790C] hover:text-[#FAFAFA]">
                  <h3>Learn More</h3>
                </button>
              </Link>
            </div>
            <div className="xl:max-w-[400px] xl:m-auto">
              <h3 className="font-semibold text-3xl  sm:text-4xl xl:text-2xl xl:pb-2 pb-8">
                What's Included:
              </h3>
              <ul className="xl:min-w-[300px] font-semibold xl:text-lg text-2xl grid xl:gap-y-2 gap-y-4">
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Market Analysis</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Search Engine Optimization</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Copywriting</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">UX Design</p>
                </li>
              </ul>
            </div>
          </div>
          {/*  //*end of box */}

          {/* //*Second Box */}
          <div className="h-auto border-4 border-[#161616] bg-[#161616] text-[#FAFAFA] rounded-[1.875rem] py-10 xl:px-0 mx-6 xl:mx-0 grid gap-y-5 justify-center xl:max-w-[370px]">
            <div className="block md:flex xl:block">
              <div className="text-[#F2790C] text-5xl xl:mb-6 mt-2 xl:mt-0 pr-2 xl:pr-0 md:mb-0 mb-6">
                <GiRoundStar />
              </div>
              <h1 className="xl:text-3xl sm:text-6xl text-4xl text-center font-semibold mb-12">
                Digital Marketing
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <Link href="servicesform#digital_marketing">
                <button className="h-[50px] px-[30px] hover:bg-[#FAFAFA] text-[#FAFAFA] border-[#161716] border-2 hover:text-[#161716] rounded-[1.875rem] transition ease-in-out font-bold text-center w-60 bg-[#F2790C]">
                  <h3>Learn More</h3>
                </button>
              </Link>
            </div>
            <div className="xl:max-w-[400px] xl:m-auto">
              <h3 className="font-semibold text-3xl  sm:text-4xl xl:text-2xl xl:pb-2 pb-8">
                What's Included:
              </h3>
              <ul className="xl:min-w-[300px] font-semibold xl:text-lg text-2xl grid xl:gap-y-2 gap-y-4">
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Social Media Advertisement</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Email Marketing</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Re-targeting</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Lead Generation</p>
                </li>
              </ul>
            </div>
          </div>
          {/*  //*end of box */}

          {/* //*First Box */}
          <div className="h-auto border-4 border-[#161616] bg-[#FAFAFA] text-[#161616] rounded-[1.875rem] py-10 xl:px-0 mx-6 xl:mx-0 grid gap-y-5 justify-center xl:max-w-[370px]">
            <div className="block md:flex xl:block">
              <div className="text-[#F2790C] text-5xl xl:mb-6 mt-2 xl:mt-0 pr-2 xl:pr-0 md:mb-0 mb-6">
                <GiRoundStar />
              </div>
              <h1 className="xl:text-3xl sm:text-6xl text-4xl text-center font-semibold mb-12">
                Social Media
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <Link href="servicesform#smma">
                <button className="btn font-medium text-center hover:bg-[#F2790C] hover:text-[#FAFAFA] w-60">
                  <h3>Learn More</h3>
                </button>
              </Link>
            </div>
            <div className="xl:max-w-[400px] xl:m-auto">
              <h3 className="font-semibold text-3xl  sm:text-4xl xl:text-2xl xl:pb-2 pb-8">
                What's Included:
              </h3>
              <ul className="xl:min-w-[300px] font-semibold xl:text-lg text-2xl grid xl:gap-y-2 gap-y-4">
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Content Creation</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Scheduled Posting</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Trend & Market Research</p>
                </li>
                <li className="flex">
                  <div className="text-[#F2780D] font-semibold pt-1">
                    <SlArrowRight />
                  </div>
                  <p className="pl-2">Logo Design & Branding</p>
                </li>
              </ul>
            </div>
          </div>
          {/*  //*end of box */}
        </div>
      </div>
    </div>
  );
};

export default Services;
