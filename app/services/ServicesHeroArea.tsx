import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";

const ServicesHeroArea = () => {
  return (
    <div className="bg-skin-lavender w-full border-b-[3px] border-black">
      <div className="container py-16 sm:py-20 text-center max-w-3xl mx-auto">
        <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-4">
          How we help
        </p>
        <h1 className="heading-1 normal-case text-4xl sm:text-5xl mb-6">
          Integrate · Build · Grow
        </h1>
        <p className="text-lg sm:text-xl font-manrope text-black/80 leading-relaxed">
          The same three pillars on our homepage — AI wired into your stack,
          custom software that ships, and go-to-market systems that scale.
          We&apos;ve reached millions of end users through enterprise and
          growth-stage client work. Pick where you are; we handle the rest.
        </p>
        <div className="mt-8">
          <Link href="/contact#book">
            <CustomButton>Book a consultation</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroArea;
