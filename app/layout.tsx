import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { Manrope, Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

import Footer from "@/components/common/Footer";
import ClashDisplay from "@/lib/fonts/ClashDisplay";
import { cn } from "@/lib/utils";
import mired_banner  from "../public/images/mired_banner.png"

const manrope = Manrope({ subsets: ["latin"], variable: "--monrope" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const poppins = Montserrat({ subsets: ["latin"], variable: "--poppins" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron" });

const seoContent = {
  title: "Build Digital Solutions That Scale",
  description: "The #1 growth studio for digital innovators - Custom Software & AI Solutions",
  keywords: "Custom Software, AI Solutions, Digital Solutions, Software Development, Digital Innovation",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mired.io'),
  title: {
    default: seoContent.title,
    template: `%s | Mired.io`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  
  openGraph: {
    type: 'website',
    siteName: 'Mired.io',
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
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

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
          orbitron.variable
        )}
      >
        <div className="text-black">
          <header>
            <Header />
          </header>
          <main className="min-h-screen ">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
