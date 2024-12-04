import { Metadata, ResolvingMetadata } from 'next'
import BookingConsultation from "@/components/common/BookingConsultation";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import HeroArea from "@/components/home/HeroArea";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";
import mired_banner  from "../public/images/mired_banner.png"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const seoContent = {
  title: "Build Digital Solutions That Scale",
  description: "Custom Software & AI Solutions - The #1 growth studio for digital innovators",
  keywords: "Custom Software, AI Solutions, Digital Solutions, Software Development, Digital Innovation",
}

// JSON-LD for structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mired - The #1 growth studio for digital innovators',
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
      site: '@mired_io',
      creator: '@mired_io',
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
      <div className="py-5">
        <Sponsars />
      </div>
      <ConsultationBookung />
      <DigitalSoluations />
      <Testimonials />
      <Trust />
      <Faqs />
      <BookingConsultation />
    </main>
  );
}
