import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServicesHeroArea = () => {
  return (
    <div
      className=" bg-s-bg bg-pink-50    bg-no-repeat bg-center w-full flex  flex-col justify-center items-center relative overflow-hidden min-h-[460px] xl:min-h-[520px]"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className=" container h-full z-20 relative ">
        <div className="max-w-[1030px] relative z-40 space-y-6 xl:space-y-5 mx-auto text-center">
          <h2 className="heading-1">services</h2>
          <p className="">
            We optimize your online presence, turning it into a revenue
            powerhouse that effectively markets and sells your digital{" "}
            <br className=" xl:block hidden" /> offerings. With our all-in-one
            solutions your website does more than exist—it excels.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <Button
              variant={"secondary"}
              className="font-poppins font-semibold rounded-none  hover:bg-transparent hover:text-black px-6 hover:border-skin-blue-800  border h-10 uppercase"
            >
              Home
            </Button>
            <Button
              variant={"outline"}
              className=" font-poppins px-6 font-semibold rounded-none h-10 uppercase "
            >
              SERVICES
            </Button>
          </div>
        </div>
        <div className="  xl:flex hidden  absolute left-0 right-0 top-[30%] items-center justify-between">
          <Image src={"/images/design.svg"} width={80} height={80} alt="" />
          <Image src={"/images/design2.svg"} width={80} height={80} alt="" />
        </div>
      </div>
      <div className="  z-20 mx-auto max-w-[1000px] xl:flex hidden  absolute left-0 right-0  bottom-10 items-center justify-between">
        <Image src={"/images/marketing.svg"} width={80} height={80} alt="" />
        <Image src={"/images/code.svg"} width={80} height={80} alt="" />
      </div>
      <Image
        className=" absolute w-[80%] lg:w-auto left-0 bottom-0"
        src={"/images/3.svg"}
        quality={80}
        width={674}
        height={674}
        alt="bubp"
      />
      <Image
        className=" absolute w-[80%] lg:w-auto right-0 top-0"
        src={"/images/4.svg"}
        quality={80}
        width={674}
        height={674}
        alt="bubp"
      />
    </div>
  );
};

export default ServicesHeroArea;
