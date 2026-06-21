import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AboutSectionRowProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  variant?: "photo" | "illustration";
  imageBg?: string;
};

const AboutSectionRow = ({
  children,
  image,
  variant = "photo",
  imageBg = "bg-white",
}: AboutSectionRowProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="max-w-[650px] order-2 lg:order-1">{children}</div>
      <div className="flex justify-center lg:justify-end order-1 lg:order-2">
        <div
          className={cn(
            "border-2 border-black rounded-[20px] overflow-hidden shadow-[4px_4px_0_0_#000] w-full max-w-[420px]",
            variant === "illustration" && "p-8 sm:p-10",
            imageBg
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={cn(
              "w-full h-auto",
              variant === "photo" ? "object-cover" : "object-contain"
            )}
            quality={80}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSectionRow;
