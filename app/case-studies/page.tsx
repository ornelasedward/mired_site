import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real client work from Mired — custom software, Shopify commerce, and AI integrations that ship and scale.",
};

const CASE_STUDIES = [
  {
    slug: "because-bitcoin",
    client: "Because Bitcoin",
    tag: "Custom software · AI · Trading platforms",
    headline: "Three platforms. One desk. 10x growth.",
    excerpt:
      "From ground-up media company to BB Terminal and BB Trader X — a long-term partnership that scaled traffic, revenue, and a $2.5M trading media operation.",
    image: "/images/case-studies/because-bitcoin/becausebitcoin-home.png",
    href: "https://becausebitcoin.com/",
  },
  {
    slug: "comanche-comms",
    client: "Comanche Comms",
    tag: "Shopify · E-commerce · Inventory",
    headline: "Brick & mortar. Now shipping worldwide.",
    excerpt:
      "A Dallas comms retailer went from showroom-only to a full Shopify storefront — catalog, vendor workflows, multi-currency checkout, and ongoing platform support.",
    image: "/images/case-studies/comanche-comms/comanche-home.png",
    href: "https://comanchecomms.com/",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="border-b-[3px] border-black bg-skin-lavender">
        <div className="container py-16 sm:py-20">
          <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-4">
            Client work
          </p>
          <h1 className="heading-1 normal-case text-4xl sm:text-5xl max-w-3xl">
            Case studies
          </h1>
          <p className="text-lg sm:text-xl font-manrope mt-4 max-w-2xl text-black/80">
            Real stories from real clients — the platforms we built, the problems
            we solved, and the results that followed.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.slug}
                className="border-2 border-black rounded-[20px] overflow-hidden bg-white shadow-[8px_8px_0_0_#000] flex flex-col"
              >
                <Link href={`/case-studies/${study.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black">
                    <Image
                      src={study.image}
                      alt={`${study.client} case study`}
                      fill
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="text-xs font-manrope font-bold uppercase tracking-wider text-skin-blue-800">
                    {study.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-clash_display font-semibold mt-2 mb-3">
                    {study.client}
                  </h2>
                  <p className="text-base font-manrope font-semibold mb-2">
                    {study.headline}
                  </p>
                  <p className="text-base font-manrope text-black/75 flex-1">
                    {study.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-black/10">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="text-sm font-manrope font-semibold text-skin-blue-800 hover:underline"
                    >
                      Read case study →
                    </Link>
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-manrope text-black/60 hover:text-black hover:underline"
                    >
                      Visit live site ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
