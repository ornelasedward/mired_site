"use client";

import Image from "next/image";
import Link from "next/link";
import { LEADS } from "@/lib/site";
import CustomButton from "@/components/ui/custom-button";
import CalendlyEmbed from "./CalendlyEmbed";
import ContactFormFallback from "./ContactFormFallback";
import CompaniesMarquee from "./CompaniesMarquee";
import StackLogoStrip from "./StackLogoStrip";
import IntegrationLogo from "@/components/home/IntegrationLogo";
import type { StackLogo } from "@/lib/landing-logos";

import type {
  LandingPageCaseStudy,
  LandingPageSection,
} from "@/lib/landing-pages";

interface LandingPageHeroProps {
  headline: string;
  subheadline: string;
  proofPoints: LandingPageSection[];
  testimonial?: { quote: string; author: string; role: string };
  ctaLabel: string;
  ctaHref?: string;
  showCalendly?: boolean;
  calendlyUrl: string;
  problem?: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: string[];
  };
  useCases?: {
    eyebrow: string;
    heading: string;
    items: LandingPageSection[];
  };
  process?: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: LandingPageSection[];
  };
  whoItsFor?: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  caseStudy?: LandingPageCaseStudy;
  stackLogos?: StackLogo[];
  showCompaniesMarquee?: boolean;
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-3">
      {children}
    </p>
  );
}

export default function LandingPageHero({
  headline,
  subheadline,
  proofPoints,
  testimonial,
  ctaLabel,
  ctaHref,
  showCalendly = true,
  calendlyUrl,
  problem,
  useCases,
  process,
  whoItsFor,
  caseStudy,
  stackLogos,
  showCompaniesMarquee = false,
}: LandingPageHeroProps) {
  const href = ctaHref ?? LEADS.contactBookPath;
  const bookHref = showCalendly ? "#book" : href;

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b-2 border-black py-4">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Mired" width={114} height={25} priority />
          </Link>
          <Link href={bookHref}>
            <CustomButton className="!h-11 !px-6 text-sm">
              {ctaLabel}
            </CustomButton>
          </Link>
        </div>
      </header>

      <section className="py-12 sm:py-16 border-b-2 border-black bg-skin-lavender">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl font-manrope text-black/80 max-w-3xl mx-auto">
            {subheadline}
          </p>
          {!showCalendly && (
            <div className="pt-4">
              <Link href={href}>
                <CustomButton>{ctaLabel}</CustomButton>
              </Link>
            </div>
          )}
          {showCalendly && (
            <div className="pt-2">
              <a
                href="#book"
                className="font-manrope font-semibold text-skin-blue-800 underline underline-offset-4 hover:text-black"
              >
                Skip to booking →
              </a>
            </div>
          )}
          {stackLogos && stackLogos.length > 0 && (
            <StackLogoStrip
              heading="Platforms we integrate with"
              logos={stackLogos}
              className="pt-8"
            />
          )}
        </div>
      </section>

      {showCompaniesMarquee && <CompaniesMarquee />}

      {problem && (
        <section className="py-12 sm:py-16 border-b-2 border-black bg-white">
          <div className="container max-w-4xl mx-auto">
            <SectionEyebrow>{problem.eyebrow}</SectionEyebrow>
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl mb-6">
              {problem.heading}
            </h2>
            <p className="font-manrope text-lg text-black/80 mb-8">{problem.body}</p>
            <ul className="space-y-4">
              {problem.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 font-manrope text-black/80 border-l-4 border-skin-blue-800 pl-4"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {useCases && (
        <section className="py-12 sm:py-16 border-b-2 border-black bg-skin-yellow-200">
          <div className="container max-w-5xl mx-auto">
            <SectionEyebrow>{useCases.eyebrow}</SectionEyebrow>
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl mb-10">
              {useCases.heading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.items.map((item) => (
                <div
                  key={item.title}
                  className="border-2 border-black bg-white p-6 space-y-3"
                >
                  {item.logos && item.logos.length > 0 && (
                    <div className="flex flex-wrap gap-2 pb-1">
                      {item.logos.map((logo) => (
                        <div
                          key={logo.alt}
                          className="flex h-10 w-10 items-center justify-center rounded-md border border-black/20 bg-white p-1.5"
                          title={logo.alt}
                        >
                          <IntegrationLogo
                            src={logo.src}
                            alt={logo.alt}
                            color={logo.color}
                            size="sm"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="font-hero text-xl font-bold">{item.title}</h3>
                  <p className="font-manrope text-black/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {process && (
        <section className="py-12 sm:py-16 border-b-2 border-black bg-white">
          <div className="container max-w-5xl mx-auto">
            <SectionEyebrow>{process.eyebrow}</SectionEyebrow>
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl mb-4">
              {process.heading}
            </h2>
            <p className="font-manrope text-lg text-black/80 mb-10 max-w-3xl">
              {process.intro}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="border-2 border-black rounded-lg p-6 min-h-[200px]"
                >
                  <p className="text-sm font-manrope font-extrabold uppercase tracking-wide">
                    Step {i + 1}
                  </p>
                  <h3 className="font-hero text-xl font-bold mt-1 mb-3">{step.title}</h3>
                  <p className="font-manrope text-black/80 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {whoItsFor && (
        <section className="py-12 sm:py-16 border-b-2 border-black bg-skin-pink-200">
          <div className="container max-w-4xl mx-auto">
            <SectionEyebrow>{whoItsFor.eyebrow}</SectionEyebrow>
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl mb-8">
              {whoItsFor.heading}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {whoItsFor.items.map((item) => (
                <li
                  key={item}
                  className="border-2 border-black bg-white px-5 py-4 font-manrope text-black/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 border-b-2 border-black">
        <div className="container max-w-5xl mx-auto">
          <SectionEyebrow>Why Mired</SectionEyebrow>
          <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl mb-10">
            Integration and software — one team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {proofPoints.map((point) => (
              <div
                key={point.title}
                className="border-2 border-black p-6 bg-white space-y-3"
              >
                <h3 className="font-hero text-xl font-bold">{point.title}</h3>
                <p className="font-manrope text-black/80">{point.description}</p>
              </div>
            ))}
          </div>
          {testimonial && (
            <blockquote className="mt-12 border-l-4 border-skin-blue-800 pl-6 max-w-2xl mx-auto text-center md:text-left">
              <p className="text-lg italic font-manrope">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-3 font-manrope font-semibold">
                {testimonial.author}
                <span className="font-normal text-black/60"> — {testimonial.role}</span>
              </footer>
            </blockquote>
          )}
          {caseStudy && (
            <div className="mt-10 max-w-2xl mx-auto border-2 border-black bg-skin-lavender p-6 sm:p-8">
              <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-2">
                Case study · {caseStudy.client}
              </p>
              <h3 className="font-hero text-xl sm:text-2xl font-bold mb-3">
                {caseStudy.headline}
              </h3>
              <p className="font-manrope text-black/80 mb-4">{caseStudy.description}</p>
              <Link
                href={caseStudy.href}
                className="font-manrope font-semibold text-skin-blue-800 underline underline-offset-2 hover:text-black"
              >
                Read the case study →
              </Link>
            </div>
          )}
        </div>
      </section>

      {showCalendly && (
        <section id="book" className="py-12 sm:py-16 scroll-mt-8 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-8 space-y-3">
              <SectionEyebrow>Free 15-minute call</SectionEyebrow>
              <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl">
                {ctaLabel}
              </h2>
              <p className="font-manrope text-black/70 max-w-2xl mx-auto">
                Pick a time — we&apos;ll map your stack, identify high-ROI use cases,
                and tell you honestly if we&apos;re the right fit. No pitch deck, just a
                straight conversation.
              </p>
            </div>
            <div className="border-2 border-black rounded-lg overflow-visible bg-white">
              <CalendlyEmbed url={calendlyUrl} height={700} />
            </div>
            <ContactFormFallback />
          </div>
        </section>
      )}

      <footer className="py-8 border-t-2 border-black text-center font-manrope text-sm text-black/60">
        <Link href="/" className="hover:text-skin-blue-800">
          ← Back to mired.io
        </Link>
      </footer>
    </div>
  );
}
