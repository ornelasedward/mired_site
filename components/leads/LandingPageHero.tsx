"use client";

import Link from "next/link";
import { LEADS } from "@/lib/site";
import CustomButton from "@/components/ui/custom-button";
import CalendlyEmbed from "./CalendlyEmbed";

interface LandingPageHeroProps {
  headline: string;
  subheadline: string;
  proofPoints: { title: string; description: string }[];
  testimonial?: { quote: string; author: string; role: string };
  ctaLabel: string;
  ctaHref?: string;
  showCalendly?: boolean;
  calendlyUrl: string;
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
}: LandingPageHeroProps) {
  const href = ctaHref ?? LEADS.contactBookPath;

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b-2 border-black py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="font-hero text-xl font-bold">
            mired
          </Link>
          <Link href={href}>
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
        </div>
      </section>

      <section className="py-12 sm:py-16 border-b-2 border-black">
        <div className="container max-w-5xl mx-auto">
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
        </div>
      </section>

      {showCalendly && (
        <section id="book" className="py-12 sm:py-16 scroll-mt-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-8 space-y-3">
              <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl">
                {ctaLabel}
              </h2>
              <p className="font-manrope text-black/70">
                Pick a time — we&apos;ll confirm instantly.
              </p>
            </div>
            <div className="border-2 border-black rounded-lg overflow-visible">
              <CalendlyEmbed url={calendlyUrl} height={700} />
            </div>
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
