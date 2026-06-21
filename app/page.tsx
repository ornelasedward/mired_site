import { Metadata, ResolvingMetadata } from 'next'
import BookingConsultation from "@/components/common/BookingConsultation";
import CompanyReachStats from "@/components/common/CompanyReachStats";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import Faqs from "@/components/common/Faqs";
import AiProcess from "@/components/home/AiProcess";
import HeroArea from "@/components/home/HeroArea";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import WhatWeIntegrate from "@/components/home/WhatWeIntegrate";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";
import mired_banner  from "../public/images/mired_banner.png"

// Set to true to restore the "AI integration that ships" banner section
const SHOW_TRUST_SECTION = false;

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const seoContent = {
  title: "AI Integration & Custom Software That Ships",
  description: "Mired integrates AI into your business systems — CRMs, ERPs, internal tools, and custom platforms. Production-grade AI, custom software, and go-to-market support.",
  keywords: "AI Integration, Custom Software, Internal Tools, AI Agents, Workflow Automation, LLM Integration, RAG Systems",
}

// JSON-LD for structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mired - AI Integration & Custom Software',
  description: seoContent.description,
  url: 'https://mired.io',
  logo: 'https://mired.io/logo.png', // Add your logo URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '', // Add your contact number if available
    contactType: 'customer service',
  },
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    metadataBase: new URL('https://mired.io'),
    title: {
      default: seoContent.title,
      template: `%s | Mired.io`,
    },
    description: seoContent.description,
    keywords: seoContent.keywords,
    
    // Open Graph
    openGraph: {
      title: seoContent.title,
      description: seoContent.description,
      url: 'https://mired.io',
      siteName: 'Mired.io',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: mired_banner.src,
          width: 1200,
          height: 630,
          alt: seoContent.title,
        },
        ...previousImages,
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: seoContent.title,
      description: seoContent.description,
      site: '@MiredWeb',
      creator: '@MiredWeb',
      images: [
        {
          url: mired_banner.src,
          width: 1200,
          height: 630,
          alt: seoContent.title,
        },
      ],
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification
    verification: {
      google: 'your-google-verification-code', // Add your Google verification code
    },
  }
}

export default function Home() {
  return (
    <main>
      {/* Add JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroArea />
      <DigitalSoluations />
      <CompanyReachStats className="bg-white border-b-2 border-black" />
      <WhatWeIntegrate className="mired-surface-vivid" />
      <ConsultationBookung />
      <AiProcess />
      <Testimonials />
      {SHOW_TRUST_SECTION && <Trust />}
      <Faqs />
      <BookingConsultation />
    </main>
  );
}
