import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MarketingHeroArea = () => {
  return (
    <div className="border-b-[3px] overflow-hidden  relative  z-40 border-black  py-8">
      <div className="max-w-[1000px] relative z-40 space-y-6 container mx-auto text-center mt-24">
        <div className="flex  justify-center">
        <span className="inline-block text-blue-500 bg-blue-100 border border-blue-500 px-4 py-1.5 rounded-md text-sm font-medium">
            About Us
          </span>
        </div>
        <h2 className=" heading-1 xl:leading-[60px]">
          We're A <br className=" hidden lg:block" /> Digital Growth Studio
        </h2>
        <p className="text-xl font-medium ">
          We build the infrastructure that turns digital presence into lasting
          value. Whether you're a business, creator, or personal brand, we help
          you transform your audience into sustainable revenue.{" "}
          <br className="hidden xl:block" />
        </p>
        <div className="pt-5">
          <Link
            href="/contact"
            className="rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center gap-4 bg-skin-blue-800 hover:bg-skin-blue-800/95 text-white transition-colors ease-in-out duration-300
            before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-0 before:-left-0 before:rounded-10 before:transition-all before:ease-out before:duration-300 hover:before:-top-1 hover:before:-left-1
            after:absolute after:w-full after:h-full after:bg-skin-yellow-600 after:-z-10 after:top-0 after:left-0 after:rounded-10 after:transition-all after:ease-out after:duration-300 hover:after:top-1.5 hover:after:left-1.5"
          >
            Contact Us
          </Link>
        </div>

        <div
          className=""
          style={{
            background: "url('/images/branding.svg')",
            backgroundSize: "100% 100%",
            paddingBottom: "40%",
          }}
        ></div>
      </div>
      <Image
        className=" absolute z-10 right-0 top-0"
        src={"/images/g5.svg"}
        alt="g5"
        width={647}
        height={1000}
      />
      <Image
        className=" absolute z-10 left-0 bottom-0"
        src={"/images/g6.svg"}
        alt="g5"
        width={647}
        height={1000}
      />
    </div>
  );
};

export default MarketingHeroArea;
