import Heading from "@/components/common/heading/Heading";
import Image from "next/image";
import ContentMarketing from "./ContentMarketing";
import SocialMedia from "./SocialMedia";

const WeFocus = () => {
  return (
    <div className="lg:pt-20 relative overflow-hidden  pb-10">
      <div className="container relative z-50">
        <div className="max-w-[650px]">
          <Heading
            title="WE FOCUS ON SCALING YOUR BRAND'S PRESENCE SO YOU CAN FOCUS ON YOUR BUSINESS"
            custom="uppercase text-[22px] md:text-[35px] lg:text-[40px] font-semibold leading-tight"
          />
        </div>
        <div className="mt-12 lg:mt-16 flex flex-col gap-12">
          <SocialMedia />
          <ContentMarketing />
        </div>
      </div>
      <Image
        src={"/images/g10.svg"}
        width={674}
        height={3642}
        alt=""
        className=" absolute z-10 right-0 top-0"
      />
      <Image
        src={"/images/g11.svg"}
        width={674}
        height={3642}
        alt=""
        className=" absolute z-10 bottom-0 left-0"
      />
    </div>
  );
};

export default WeFocus;
