import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { Manrope, Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

import Footer from "@/components/common/Footer";
import ClashDisplay from "@/lib/fonts/ClashDisplay";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"], variable: "--monrope" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const poppins = Montserrat({ subsets: ["latin"], variable: "--poppins" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron" });
export const metadata: Metadata = {
  title: "Mired",
  description: "The #1 growth studio for digital innovators",
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
