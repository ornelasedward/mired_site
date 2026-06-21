import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";
import Link from "next/link";

const WebDesignHeroArea = () => {
  return (
    <div className="border-b-[3px] overflow-hidden relative z-40 border-black py-8 bg-skin-lavender">
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
          DESIGN & Development
        </h2>
        <div className=" pt-5">
          <Link href="/contact#book">
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
    </div>
  );
};

export default WebDesignHeroArea;
