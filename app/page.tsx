import { Metadata } from "next";
import BookingConsultation from "@/components/common/BookingConsultation";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import HeroArea from "@/components/home/HeroArea";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";

const seoContent = {
  title: "Build Digital Solutions That Scale",
  description: "Custom Software & AI Solutions - The #1 growth studio for digital innovators",
  keywords: "Custom Software, AI Solutions, Digital Solutions, Software Development, Digital Innovation",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mired.io'),
  title: {
    default: seoContent.title,
    template: `%s | Mired.io`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    type: 'website',
    url: 'https://mired.io',
    siteName: 'Mired.io',
    images: [
      {
        url: 'https://mired.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: seoContent.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
    site: '@mired_io',
    images: ['https://mired.io/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
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
