import { cn } from "@/lib/utils";
import Image from "next/image";
import CustomButton from "../ui/custom-button";
import Link from "next/link";
import { LEADS } from "@/lib/site";

const ConsultationBookung = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "py-12 sm:py-20 bg-skin-pink-200 relative overflow-hidden",
        className
      )}
    >
      <div className="flex container flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="w-full flex justify-center lg:justify-start lg:max-w-[320px] shrink-0">
          <div className="rounded-full border-2 border-black overflow-hidden w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            <Image
              src="/images/miranda.png"
              alt="Miranda, co-founder of Mired"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              quality={80}
            />
          </div>
        </div>

        <div className="w-full space-y-5 xl:space-y-7  flex-1">
          <div>
            <h2 className="heading-1 normal-case text-5xl sm:text-4xl lg:text-6xl text-center sm:text-left">
              One team for integration, software, and launch
            </h2>
          </div>
          <div>
            <p className="text-xl text-center sm:text-left">
              Think of us as your AI integration partner and software studio in
              one — we wire AI into your systems, build the internal tools
              around it, and help you go to market. No juggling multiple vendors.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link href={LEADS.contactBookPath}>
              <CustomButton className="group relative flex items-center justify-center">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Book an AI Readiness Call
                </span>
                <span className="absolute right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBookung;
