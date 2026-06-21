import Image from "next/image";
import Link from "next/link";

const DELIVERABLES = [
  {
    name: "Shopify storefront",
    tag: "Commerce platform",
    description:
      "The full public face of Comanche Comms online — hero banners, featured products, category tiles, and a catalog spanning devices, Faraday deployment kits, hardware, services, software upgrades, and field essentials.",
    image: "/images/case-studies/comanche-comms/comanche-home.png",
    features: [
      "Custom theme aligned to the Comanche brand",
      "Featured products & promotional banners",
      "Secure checkout with order notes & coupons",
      "Newsletter signup & social integration",
    ],
    url: "https://comanchecomms.com/",
  },
  {
    name: "Catalog & navigation",
    tag: "50+ brands · 30+ categories",
    description:
      "Two ways to shop — by category (Antennas, Night Vision, SERE, Water Treatment, and more) or by brand (Hytera, Ops-core, Garmin, DJI, Surefire, and 50+ others). Built so professional end users find exactly what they need without hunting.",
    image: "/images/case-studies/comanche-comms/comanche-catalog.png",
    features: [
      "Shop by Category — 30+ verticals",
      "Shop by Brand — 50+ manufacturer partners",
      "Product variants with pricing & availability",
      "Related products & cross-sell blocks",
    ],
    url: "https://comanchecomms.com/",
  },
  {
    name: "Operations & integrations",
    tag: "Inventory · vendors · international",
    description:
      "The backend work that makes a specialty store actually run — multi-currency checkout across 25+ countries, vendor partner SKU management, OOS lead time configuration, variant-to-image mapping, and shipping estimate tooling at cart.",
    image: "/images/case-studies/comanche-comms/comanche-operations.png",
    features: [
      "Multi-currency support (USD, EUR, GBP, CAD & more)",
      "Vendor partner listings with custom lead times",
      "Variant-aware product image stacking",
      "Shipping calculator & fulfillment messaging",
    ],
    url: "https://comanchecomms.com/",
  },
];

const CaseStudyDeliverables = () => {
  return (
    <section className="bg-skin-yellow-200 py-16 sm:py-20 border-b-2 border-black">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            What we built
          </h2>
          <p className="text-xl mt-4">
            A production Shopify store — not a demo. Live, taking orders, and
            growing with the business.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {DELIVERABLES.map((item, index) => (
            <article
              key={item.name}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <span className="inline-block text-xs font-manrope font-bold uppercase tracking-wider bg-white border border-black px-3 py-1 rounded-md mb-4">
                  {item.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-clash_display font-semibold mb-4">
                  {item.name}
                </h3>
                <p className="text-base sm:text-lg font-manrope text-black/80 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm sm:text-base font-manrope"
                    >
                      <span className="text-skin-blue-800 mt-1">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-manrope font-semibold text-skin-blue-800 hover:underline"
                >
                  View on live store →
                </Link>
              </div>

              <div
                className={`border-2 border-black rounded-[20px] overflow-hidden shadow-[8px_8px_0_0_#000] aspect-[16/10] relative ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDeliverables;
