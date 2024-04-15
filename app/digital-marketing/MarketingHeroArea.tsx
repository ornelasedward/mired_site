import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";
import Image from "next/image";
import Link from "next/link";

const MarketingHeroArea = () => {
  return (
    <div className="border-b-[3px] overflow-hidden  relative  z-40 border-black  py-8">
      <div className="max-w-[1000px] relative z-40 space-y-6 container mx-auto text-center">
        <div className="flex  justify-center">
          <Link href="/services">
            <Button
              className=" uppercase text-base font-poppins"
              variant={"outline"}
            >
              services
            </Button>
          </Link>
        </div>
        <h2 className=" heading-1 xl:leading-[60px]">
          Brand Development <br className=" hidden lg:block" /> & Digital
          Marketing
        </h2>
        <div className=" pt-5">
        <Link href="/contact">
          <CustomButton>CONTACT US</CustomButton>
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
