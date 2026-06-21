import Image from "next/image";
import Link from "next/link";
import CustomButton from "../ui/custom-button";
import { LEADS } from "@/lib/site";

const LiveDemo = () => {
  return (
    <div
      className="py-12 sm:py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,247,246,1) 55%)",
      }}
    >
      <div className="flex container flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
        <div className="w-full lg:max-w-[520px]">
          <Image
            src="/images/hansome-guy.png"
            alt="AI voice agent demo"
            width={520}
            height={680}
            className="w-full object-cover"
            quality={80}
          />
        </div>

        <div className="w-full space-y-5 xl:space-y-7 flex-1">
          <div>
            <h2 className="heading-1 normal-case text-5xl sm:text-4xl lg:text-6xl text-center sm:text-left">
              Try it yourself — talk to our AI
            </h2>
          </div>
          <div>
            <p className="text-xl text-center sm:text-left">
              The voice agent on this site is the same kind of production AI we
              build for clients. Click the widget in the corner and see how AI
              can handle real conversations inside your business.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link href={LEADS.contactBookPath}>
              <CustomButton className="group relative flex items-center justify-center">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Build something like this
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

export default LiveDemo;
