import { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageHero from "@/components/leads/LandingPageHero";
import { getLandingPage, getAllLandingSlugs } from "@/lib/landing-pages";
import { getCalendlyUrl, LEADS } from "@/lib/site";
import { LANDING_STACK_LOGOS } from "@/lib/landing-logos";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    robots: { index: true, follow: true },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const isAssessment = slug === "ai-readiness";
  const stackLogos = LANDING_STACK_LOGOS[slug];

  return (
    <LandingPageHero
      headline={page.headline}
      subheadline={page.subheadline}
      proofPoints={page.proofPoints}
      testimonial={page.testimonial}
      ctaLabel={page.ctaLabel}
      ctaHref={isAssessment ? LEADS.aiReadinessPath : LEADS.contactBookPath}
      showCalendly={!isAssessment}
      calendlyUrl={getCalendlyUrl()}
      problem={page.problem}
      useCases={page.useCases}
      process={page.process}
      whoItsFor={page.whoItsFor}
      caseStudy={page.caseStudy}
      stackLogos={stackLogos}
      showCompaniesMarquee={Boolean(stackLogos)}
    />
  );
}
