import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";
import AboutSectionRow from "./AboutSectionRow";

const AboutHero = () => {
  return (
    <section className="bg-skin-lavender w-full border-b-[3px] border-black">
      <div className="container py-16 sm:py-20 lg:py-24">
        <AboutSectionRow
          image={{
            src: "/images/code.svg",
            alt: "Custom software and product development",
            width: 400,
            height: 400,
          }}
          variant="illustration"
          imageBg="bg-skin-yellow-200"
        >
          <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-4">
            About us
          </p>
          <h1 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl mb-6">
            Builders who ship — not agencies that pitch
          </h1>
          <p className="text-lg sm:text-xl font-manrope text-black/80 leading-relaxed">
            We have deep technical experience building products end to end. Long
            before AI was everywhere, we were already shipping to production —
            and we bring that same rigor to every engagement today.
          </p>
          <div className="mt-8">
            <Link href="/contact#book">
              <CustomButton>Book a consultation</CustomButton>
            </Link>
          </div>
        </AboutSectionRow>
      </div>
    </section>
  );
};

export default AboutHero;
