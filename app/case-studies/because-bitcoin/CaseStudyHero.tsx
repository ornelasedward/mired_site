import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";
import Image from "next/image";

const CaseStudyHero = () => {
  return (
    <section className="border-b-[3px] border-black bg-skin-lavender overflow-hidden">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link href="/">
            <Button variant="outline" className="uppercase text-sm font-poppins">
              Case Study
            </Button>
          </Link>
          <span className="text-sm font-manrope text-black/60">Long-term partner</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800">
              Because Bitcoin, Inc.
            </p>
            <h1 className="heading-1 normal-case text-4xl sm:text-5xl xl:text-6xl leading-tight">
              Three platforms. One desk. 10x growth.
            </h1>
            <p className="text-lg sm:text-xl font-manrope max-w-xl">
              Mired has been the software partner behind Because Bitcoin since the
              beginning — from the first website conversation to BB Terminal and BB
              Trader X, the AI-powered trading platform used by their seven-analyst
              desk every day.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact#book">
                <CustomButton>Start a project</CustomButton>
              </Link>
              <a
                href="https://becausebitcoin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base font-manrope font-semibold text-skin-blue-800 hover:underline"
              >
                Visit becausebitcoin.com →
              </a>
            </div>
          </div>

          <div className="border-2 border-black rounded-[20px] overflow-hidden shadow-[8px_8px_0_0_#000]">
            <Image
              src="/images/case-studies/because-bitcoin/becausebitcoin-home.png"
              alt="Because Bitcoin homepage built by Mired"
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
