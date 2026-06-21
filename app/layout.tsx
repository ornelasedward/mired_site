import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat, Orbitron, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import ClashDisplay from "@/lib/fonts/ClashDisplay";
import { cn } from "@/lib/utils";
import mired_banner  from "../public/images/mired_banner.png"
import LoadingProgress from "@/components/common/LoadingProgress";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";
import SiteChrome from "@/components/SiteChrome";
import Providers from "@/components/Providers";
import { Suspense } from 'react';

// Set to true to show the ElevenLabs voice agent widget
const SHOW_ELEVENLABS_AGENT = false;

const manrope = Manrope({ subsets: ["latin"], variable: "--monrope" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const poppins = Montserrat({ subsets: ["latin"], variable: "--poppins" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--hero-font",
  weight: ["500", "600", "700", "800"],
});

const seoContent = {
  title: "AI Integration & Custom Software That Ships",
  description: "Mired integrates AI into your business systems — CRMs, ERPs, internal tools, and custom platforms. Production-grade AI, custom software, and go-to-market support.",
  keywords: "AI Integration, Custom Software, Internal Tools, AI Agents, Workflow Automation, LLM Integration, RAG Systems",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mired.io'),
  title: {
    default: seoContent.title,
    template: `%s | Mired`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  
  openGraph: {
    type: 'website',
    siteName: 'Mired - AI Integration & Custom Software',
    title: seoContent.title,
    description: seoContent.description,
    url: 'https://mired.io',
    images: [
      {
        url: mired_banner.src,  // Add .src here
        width: 1200,
        height: 630,
        alt: seoContent.title,
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
    site: '@MiredWeb',
    creator: '@MiredWeb',
    images: ['/images/mired_banner.svg'],
  },
  
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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          manrope.variable,
          montserrat.variable,
          poppins.variable,
          ClashDisplay.variable,
          orbitron.variable,
          plusJakartaSans.variable
        )}
      >
        <Suspense fallback={null}>
          <LoadingProgress />
        </Suspense>
        <Providers>
          <SiteChrome>
            {children}
            {SHOW_ELEVENLABS_AGENT && (
              <ElevenLabsWidget agentId="Ggs3QejwT0HjbzQxwmZ6" />
            )}
          </SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
