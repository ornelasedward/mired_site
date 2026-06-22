"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CLIENT_LOGOS } from "@/lib/landing-logos";

export default function CompaniesMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-8 sm:py-10 border-b-2 border-black bg-white">
      <p className="text-center text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-6 px-4">
        Companies we&apos;ve worked with
      </p>
      <Marquee gradient={false} speed={35} pauseOnHover>
        {logos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="mx-6 sm:mx-8 flex h-12 sm:h-14 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={130}
              height={44}
              className="h-8 sm:h-10 w-auto max-w-[120px] object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
