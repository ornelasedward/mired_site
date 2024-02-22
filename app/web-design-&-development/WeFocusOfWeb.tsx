import Image from "next/image";
import EcommerceSolutions from "./EcommerceSolutions";
import NewsLetters from "./NewsLetters";
import SocialMedia from "./SocialMedia";
import Website from "./Website";

const WeFocusOfWeb = () => {
  return (
    <div className="pt-20 relative overflow-hidden border-t-2 border-black pb-20">
      <div className=" relative z-40 container pt-6">
        <div className="max-w-[650px]">
          <h3>We focus on making money so you don’t have to</h3>
          <p className="mt-3">
            We make the monetization strategy and stand by your side to manage
            it.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col gap-12">
          <SocialMedia />
          <NewsLetters />
          <Website />
          <EcommerceSolutions />
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

export default WeFocusOfWeb;
