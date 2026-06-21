"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import AnimatedLink from "../AnimationLink";
import { Button } from "../ui/button";
import { LEADS } from "@/lib/site";

type NavLink = {
  label: string;
  href: string;
  matchPrefix?: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Services", href: "/services" },
  { label: "Readiness", href: "/ai-readiness", matchPrefix: "/ai-readiness" },
  { label: "Work", href: "/case-studies", matchPrefix: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

function isActive(pathName: string, href: string, matchPrefix?: string) {
  if (pathName === href) return true;
  if (matchPrefix && pathName?.startsWith(matchPrefix)) return true;
  return false;
}

const Header = () => {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathName]);

  const linkClass = (href: string, matchPrefix?: string) =>
    cn(
      "whitespace-nowrap rounded-sm px-2.5 py-1.5 text-xs font-manrope font-semibold uppercase tracking-wide transition-colors duration-200 xl:text-[13px] 2xl:px-3.5 2xl:text-sm",
      isActive(pathName ?? "", href, matchPrefix)
        ? "bg-[#D7E9F8] text-black"
        : "text-black hover:bg-[#D7E9F8]/70",
    );

  return (
    <header
      className={cn(
        "fixed top-0 z-[999] w-full border-b border-black/5 bg-background transition-all duration-300",
        scrolled ? "py-3 shadow-md" : "py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Mired" width={114} height={25} priority />
          </Link>

          {/* Desktop nav — centered */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
          >
            <ul className="flex items-center gap-0.5 2xl:gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <AnimatedLink
                    href={link.href}
                    className={linkClass(link.href, link.matchPrefix)}
                  >
                    {link.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
            <a
              href="tel:+15755136238"
              className="hidden font-manrope text-sm font-semibold text-black hover:text-skin-blue-800 transition-colors whitespace-nowrap 2xl:inline"
            >
              (575) 513-6238
            </a>
            <Link href={LEADS.contactBookPath}>
              <Button className="h-10 whitespace-nowrap bg-[#420FB0] px-4 text-xs font-bold 2xl:px-6 2xl:text-sm">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 xl:hidden"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? (
              <IoClose className="h-6 w-6 text-black" />
            ) : (
              <HiOutlineMenu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {navOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-black/10 pt-4 pb-2 xl:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-sm px-4 py-2.5 text-center font-manrope text-base font-medium",
                      isActive(pathName ?? "", link.href, link.matchPrefix)
                        ? "bg-[#D7E9F8]"
                        : "hover:bg-[#D7E9F8]/70",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-black/10 pt-4 text-center">
                <a
                  href="tel:+15755136238"
                  className="font-manrope text-base font-semibold text-black hover:text-skin-blue-800"
                >
                  (575) 513-6238
                </a>
              </li>
              <li className="mt-3 flex justify-center">
                <Link href={LEADS.contactBookPath}>
                  <Button className="h-11 bg-[#420FB0] px-8">Book a Call</Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
