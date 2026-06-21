import Link from "next/link";
import { ReactNode } from "react";
import CustomButton from "@/components/ui/custom-button";
import ConsultationBookung from "@/components/common/ConsultationBookung";

export type OfferingStep = {
  phase: string;
  title: string;
  description: string;
};

export type OfferingDeliverable = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type ServiceOfferingLayoutProps = {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  visual: ReactNode;
  steps: OfferingStep[];
  deliverables: OfferingDeliverable[];
  principles: string[];
  heroClassName?: string;
  handholdText?: string;
  /** Wide visual shown between process and deliverables */
  midVisual?: ReactNode;
  /** Sticky visual beside the process steps on large screens */
  processVisual?: ReactNode;
  /** Secondary visual below deliverables */
  bottomVisual?: ReactNode;
};

const ServiceOfferingLayout = ({
  label,
  title,
  subtitle,
  intro,
  visual,
  steps,
  deliverables,
  principles,
  heroClassName = "bg-skin-lavender",
  handholdText,
  midVisual,
  processVisual,
  bottomVisual,
}: ServiceOfferingLayoutProps) => {
  return (
    <main>
      <section className={`border-b-[3px] border-black ${heroClassName}`}>
        <div className="container py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <Link
                href="/services"
                className="inline-block text-sm font-manrope font-semibold text-skin-blue-800 hover:underline"
              >
                ← Integrate · Build · Grow
              </Link>
              <div>
                <span className="inline-block border-2 border-black rounded-md px-4 py-1.5 text-lg sm:text-xl font-manrope font-bold">
                  {label}
                </span>
              </div>
              <h1 className="heading-1 normal-case text-4xl sm:text-5xl leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl font-manrope font-semibold text-black/80">
                {subtitle}
              </p>
              <p className="text-base sm:text-lg font-manrope text-black/70">
                {intro}
              </p>
              <Link href="/contact#book">
                <CustomButton>Book a consultation</CustomButton>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              {visual}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 border-b-2 border-black">
        <div className="container">
          <div className="max-w-[650px] mb-12 lg:mb-16">
            <h2 className="heading-1 normal-case text-4xl md:text-5xl">
              How it works
            </h2>
            <p className="text-xl mt-4">
              You don&apos;t need a technical roadmap on day one. We guide you
              through every step — and move fast when we find what works.
            </p>
          </div>

          <div className="grid xl:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            <div className="space-y-0">
              {steps.map((step) => (
                <div
                  key={step.phase}
                  className="grid md:grid-cols-[72px_1fr] gap-4 md:gap-8 py-8 border-t-2 border-black first:border-t-0"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-skin-blue-800 text-white font-clash_display font-semibold text-base shrink-0">
                    {step.phase}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-clash_display font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg font-manrope text-black/80 max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {processVisual && (
              <div className="xl:sticky xl:top-28 space-y-6">{processVisual}</div>
            )}
          </div>
        </div>
      </section>

      {midVisual && (
        <section className="bg-skin-lavender py-12 sm:py-16 border-b-2 border-black">
          <div className="container">{midVisual}</div>
        </section>
      )}

      <section className="bg-skin-yellow-200 py-16 sm:py-20 border-b-2 border-black">
        <div className="container">
          <div className="max-w-[650px] mb-10">
            <h2 className="heading-1 normal-case text-4xl md:text-5xl">
              What we deliver
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="border-2 border-black rounded-10 bg-white p-6 sm:p-8 flex flex-col gap-3"
              >
                {item.icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-skin-pink-50 shrink-0">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-lg font-clash_display font-semibold">
                  {item.title}
                </h3>
                <p className="text-base font-manrope text-black/75 flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {bottomVisual && <div className="mt-10 lg:mt-14">{bottomVisual}</div>}
        </div>
      </section>

      <section className="bg-skin-pink-200 py-16 sm:py-20 border-b-2 border-black">
        <div className="container max-w-3xl text-center">
          <h2 className="heading-1 normal-case text-3xl sm:text-4xl mb-6">
            Handheld every step of the way
          </h2>
          <p className="text-lg sm:text-xl font-manrope text-black/80 leading-relaxed">
            {handholdText ??
              "You don't need to know how Slack, Salesforce, or LLM pipelines fit together — that's our job. We walk you through consultation, ecosystem mapping, and production deployment. If you have your own ideas, we bring them to the table and workshop them together. If something isn't working, we go back to the drawing board and iterate until it does."}
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="text-sm font-manrope font-semibold border-2 border-black bg-white px-4 py-2 rounded-md"
              >
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationBookung />
    </main>
  );
};

export default ServiceOfferingLayout;
