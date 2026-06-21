import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";
import Link from "next/link";
import AiOfferings from "./AiOfferings";

const AiSolutionsHeroArea = () => {
  return (
    <div className="border-b-[3px] overflow-hidden relative z-40 border-black bg-skin-lavender">
      <div className="max-w-[1000px] relative z-40 space-y-6 container mx-auto text-center pt-8 pb-4">
        <div className="flex justify-center">
          <Link href="/services">
            <Button
              className="uppercase text-base font-poppins"
              variant={"outline"}
            >
              services
            </Button>
          </Link>
        </div>
        <h2 className="heading-1 xl:leading-[60px] normal-case">
          AI Integration & Solutions
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Connect AI to your existing systems — production-grade integrations,
          custom agents, and workflow automation built to ship.
        </p>
        <div className="pt-5">
          <Link href="/contact#book">
            <CustomButton>Book an AI Readiness Call</CustomButton>
          </Link>
        </div>
      </div>

      <AiOfferings embedded />
    </div>
  );
};

export default AiSolutionsHeroArea;
