"use client";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

interface Logos {
  name: string;
}

interface SponsarsProps {
  embedded?: boolean;
  hideBorder?: boolean;
  useHeroFont?: boolean;
}

const Sponsars = ({
  embedded = false,
  hideBorder = false,
  useHeroFont = false,
}: SponsarsProps) => {
  const logos: Logos[] = [
    {
      name: "AI Integration",
    },
    {
      name: "Custom Software",
    },
    {
      name: "Internal Tools",
    },
    {
      name: "Workflow Automation",
    },
  ];

  return (
    <div
      className={cn(
        embedded
          ? "bg-transparent relative z-50 -mt-6 sm:-mt-10 py-2 sm:py-3"
          : hideBorder
            ? "bg-white py-4 sm:py-5"
            : "border-b-2 border-black bg-white py-4 sm:py-5"
      )}
    >
      <div>
        <Marquee className=" flex items-center gap-x-5">
          {logos.map((logo, index) => (
            <div key={index} className=" mx-5 inline-flex items-center gap-2">
              <svg
                className=" w-7 h-7 sm:w-14 sm:h-14  lg:w-20 lg:h-20"
                viewBox="0 0 78 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 0L46.4164 17.1746L62.5114 7.63932L58.4164 25.8932L77.0423 27.6393L63 40L77.0423 52.3607L58.4164 54.1068L62.5114 72.3607L46.4164 62.8254L39 80L31.5836 62.8254L15.4886 72.3607L19.5836 54.1068L0.957741 52.3607L15 40L0.957741 27.6393L19.5836 25.8932L15.4886 7.63932L31.5836 17.1746L39 0Z"
                  fill={index % 2 === 0 ? "#F7BE08" : "#92C2EB"}
                />
              </svg>
              <h2
                className={cn(
                  "text-4xl sm:text-5xl",
                  embedded && "text-3xl sm:text-4xl",
                  useHeroFont && "font-hero font-extrabold tracking-tight"
                )}
              >
                {logo.name}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsars;
