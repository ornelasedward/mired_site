import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { SlArrowRight } from "react-icons/sl";

const Qoute1 = ({ aboutData }) => {
  const { video1, video2 } = aboutData;
  return (
    <div id="about" className="">
      <div className="max-w-[1920px] m-auto">
        <div className="bg-[#171616] border-2 m-4 h-fit rounded-[1.875rem]">
          <div className="sm:max-w-[1280px] max-w-[450px] m-auto lg:p-12 p-8">
            {/* //*Title */}
            <h1 className="text-[#FCF7E8] font-semibold text-5xl pt-10">
              We are a small (and young) company
            </h1>
            <h1 className="text-[#FCF7E8] font-semibold text-5xl lg:pt-10">
              with big ambitions.
            </h1>
            {/* //*Title End */}

            {/* //*Left Component */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 pt-32">
              <div className="min-w-[290px] min-h-[440px] text-[#E9E9E9]">
                {/* //*Video 1 */}
                <div className="">
                  <video
                    src={video1}
                    autoPlay
                    loop
                    muted
                    className="border-2 rounded-[1.875rem]"
                  />
                </div>
                {/* //*Image end */}

                {/* //*sub title 1*/}
                <div className="lg:min-h-[268px]">
                  <h1 className="text-2xl font-bold my-5">
                    Vamp up your Site!
                  </h1>
                  <p>
                    in the new age of technology, your website is the first
                    impression you make with your users. That's why we offer
                    top-notch UX/UI design services that will make your site pop
                    and attract customers like a magnet. With our expert team of
                    designers, we'll help you create a sleek and user-friendly
                    site that will make your business stand out from the
                    competition and keep customers coming back for more.
                  </p>
                </div>
                {/* //*Get Started */}
                <div className="border-t-2 flex justify-end mt-10 lg:mt-4 xl:mt-0">
                  <h1 className="px-2 pt-2 lg:pt-8">Get Started</h1>
                  <div className="pt-3 lg:pt-9 text-[#F2690C]">
                    <SlArrowRight />
                  </div>
                </div>
              </div>
              {/* //*Left Component end */}

              {/* //*Right Component */}

              <div className="min-w-[290px] min-h-[440px] text-[#E9E9E9] gap-x-10">
                {/* //*Video 2 */}
                <div className="">
                  <video
                    src={video2}
                    autoPlay
                    loop
                    muted
                    className="border-2 rounded-[1.875rem]"
                  />
                </div>
                {/* //*Image end */}

                {/* //*sub title 2*/}
                <div className="lg:min-h-[268px]">
                  <h1 className="text-2xl font-bold my-5">
                    Market your business
                  </h1>
                  <p>
                    Whether you're looking to increase brand awareness, drive
                    sales, or build customer loyalty, we've got you covered.
                    With our paid social media advertising, email/sms marketing,
                    retargeting, and content creation strategies, we'll help you
                    reach the right audience and get them interested in your
                    business. We'll create engaging and compelling content that
                    will grab your customers' attention and keep them coming
                    back for more.
                  </p>
                </div>
                {/* //*Get Started 2*/}
                <div className="border-t-2 flex justify-end mt-10 lg:mt-4 xl:mt-0">
                  <h1 className="px-2 pt-2 lg:pt-8">Get Started</h1>
                  <div className="pt-3 lg:pt-9 text-[#F2690C]">
                    <SlArrowRight />
                  </div>
                </div>
              </div>
              {/* //*Right Component end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoute1;
