import { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageHero from "@/components/leads/LandingPageHero";
import { getLandingPage, getAllLandingSlugs } from "@/lib/landing-pages";
import { LEADS } from "@/lib/site";
import Link from "next/link";

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

  return (
    <LandingPageHero
      headline={page.headline}
      subheadline={page.subheadline}
      proofPoints={page.proofPoints}
      testimonial={page.testimonial}
      ctaLabel={page.ctaLabel}
      ctaHref={isAssessment ? LEADS.aiReadinessPath : LEADS.contactBookPath}
      showCalendly={!isAssessment}
    />
  );
}
