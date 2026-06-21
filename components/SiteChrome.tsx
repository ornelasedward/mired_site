"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/i/") ||
    pathname?.startsWith("/lp/");

  if (bare) {
    return <>{children}</>;
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen mt-20">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
