import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import CustomButton from "../ui/custom-button";
import Link from "next/link";
import { LEADS } from "@/lib/site";

interface Props {
  className?: string;
}

const edwardPhoto = (
  <div className="rounded-full border-2 border-black overflow-hidden w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 shrink-0">
    <Image
      src="/images/edward.png"
      alt="Edward, co-founder of Mired"
      width={288}
      height={288}
      className="w-full h-full object-cover"
      quality={80}
    />
  </div>
);

const LetsTalk: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden z-50 pt-12 lg:pt-0",
        className ?? "bg-white"
      )}
    >
      <div className="flex container py-12 lg:py-20 flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-center">
        <div className="w-full lg:w-3/5 relative z-10">
          <h2 className=" heading-1 normal-case">
            Talk directly with the people who build it
          </h2>
          <p className="text-black mt-3 text-lg sm:text-xl">
            Mired is Edward and Miranda — a husband-and-wife team that
            integrates AI into your systems and ships the software around it. No
            project managers, no handoffs. When you reach out, you&apos;re
            talking to us.
          </p>

          <div className="mt-10 lg:mt-16">
            <Link href={LEADS.contactBookPath}>
              <CustomButton>Book Free AI Call</CustomButton>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
          {edwardPhoto}
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
