import Image from "next/image";
import Link from "next/link";

const CaseStudyQuote = () => {
  return (
    <section className="bg-skin-lavender border-b-2 border-black py-16 sm:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">
          <div className="border-2 border-black overflow-hidden rounded-[20px] mx-auto lg:mx-0 w-full max-w-[380px]">
            <Image
              src="https://i.postimg.cc/Ghy8tyfs/max.png"
              alt="Max Schwartzman, CEO of Because Bitcoin"
              width={520}
              height={780}
              className="w-full h-auto"
              sizes="380px"
            />
          </div>

          <div>
            <Image
              src="/images/quete.svg"
              alt=""
              width={60}
              height={60}
              className="mb-6"
            />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-manrope leading-relaxed mb-8">
              Excellent job with the website we built — and with my software.
              Since we have brought on Mired, BecauseBitcoin has 10x&apos;d in
              traffic and revenue. I will continue to use them for all my
              software and website needs.
            </blockquote>
            <div>
              <p className="text-2xl font-clash_display font-semibold">
                Max Schwartzman
              </p>
              <p className="text-base font-manrope text-black/70 mt-1">
                CEO, Because Bitcoin, Inc.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "becausebitcoin.com", href: "https://becausebitcoin.com/" },
                { label: "bbterminal.com", href: "https://bbterminal.com/" },
                { label: "bbtraderx.com", href: "https://www.bbtraderx.com/dashboard" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-manrope font-medium border-2 border-black bg-white px-4 py-2 rounded-md hover:bg-skin-yellow-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyQuote;
