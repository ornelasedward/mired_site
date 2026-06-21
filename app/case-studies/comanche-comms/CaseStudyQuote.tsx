import Image from "next/image";
import Link from "next/link";

const CaseStudyQuote = () => {
  return (
    <section className="bg-skin-lavender border-b-2 border-black py-16 sm:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <div className="border-2 border-black overflow-hidden rounded-[20px] mx-auto lg:mx-0 w-full max-w-[280px] bg-skin-yellow-200">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Alex, owner of Comanche Comms"
              width={280}
              height={420}
              className="w-full h-[320px] sm:h-[420px] object-cover object-top"
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
              I had the store and the inventory — what I didn&apos;t have was a
              way to sell it all online without losing my mind in Shopify. Mired
              built the whole thing: catalog, checkout, vendor workflows, the
              works. When I hit something Shopify couldn&apos;t do on its own —
              lead times, variant images — Edward figured it out. Best decision
              I made for the business.
            </blockquote>
            <div>
              <p className="text-2xl font-clash_display font-semibold">Alex</p>
              <p className="text-base font-manrope text-black/70 mt-1">
                Owner, Comanche Comms, LLC · Dallas, TX
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                {
                  label: "comanchecomms.com",
                  href: "https://comanchecomms.com/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/comanchecommsllc/",
                },
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
