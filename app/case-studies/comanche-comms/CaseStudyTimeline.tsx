const PHASES = [
  {
    phase: "01",
    title: "The challenge",
    description:
      "Alex had built Comanche Comms as a brick-and-mortar destination for professional communications gear in Dallas — Hytera radios, Ops-core headsets, Faraday deployment kits, and field network services. The inventory was there. The expertise was there. The online store wasn't.",
  },
  {
    phase: "02",
    title: "Discovery & catalog planning",
    description:
      "We mapped the full product surface — devices, hardware, software licenses, services, and swag — plus the brand partners (Hytera, Silynx, Mojave Repeater, and dozens more). The goal: a Shopify store that mirrors how pros actually shop for comms gear, not a generic template.",
  },
  {
    phase: "03",
    title: "Shopify build & launch",
    description:
      "Mired stood up the full commerce stack — storefront theme, category and brand navigation, product listings, secure checkout, shipping estimates, and multi-currency support across 25+ markets. Fast shipping messaging, 30-day returns, and trust signals built in from day one.",
  },
  {
    phase: "04",
    title: "Inventory & vendor workflows",
    description:
      "With a catalog this deep, inventory management had to be airtight. We configured product variants, vendor partner listings (including MAAK), out-of-stock lead time rules, and the backend workflows Alex needs to keep stock accurate across in-store and online channels.",
  },
  {
    phase: "05",
    title: "Custom commerce behavior",
    description:
      "Shopify doesn't always do what a specialty retailer needs out of the box. We shipped customizations — variant-aware image stacking so the right product color surfaces when selected, lead time display for partner SKUs, and ongoing theme tweaks as the catalog grows.",
  },
  {
    phase: "06",
    title: "Ongoing partnership",
    description:
      "Alex handles day-to-day Shopify operations himself now, but Mired stays on call for integrations, new vendor onboarding, and the edge cases that come with selling mission-critical gear online. The store keeps shipping — literally and figuratively.",
  },
];

const CaseStudyTimeline = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-b-2 border-black">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            From showroom to storefront
          </h2>
          <p className="text-xl mt-4">
            A specialty retailer with real inventory and real customers — now
            with the e-commerce infrastructure to match.
          </p>
        </div>

        <div className="space-y-0">
          {PHASES.map((item, index) => (
            <div
              key={item.phase}
              className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 border-t-2 border-black first:border-t-0"
            >
              <div className="flex md:flex-col items-start gap-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-skin-blue-800 text-white font-clash_display font-semibold text-lg">
                  {item.phase}
                </span>
                {index < PHASES.length - 1 && (
                  <div className="hidden md:block w-[2px] flex-1 min-h-[40px] bg-black/20 ml-[22px]" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-clash_display font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg font-manrope text-black/80 max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTimeline;
