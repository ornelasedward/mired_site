const STEPS = [
  {
    title: "Understand the catalog",
    description:
      "Comms gear isn't sneakers — SKUs have variants, licenses, encryption add-ons, and vendor-specific lead times. We learned the catalog before touching the theme.",
  },
  {
    title: "Build for operators",
    description:
      "Navigation, search, and product pages designed for professional end users who know what Hytera programming or a Faraday deployment kit means — and need to find it fast.",
  },
  {
    title: "Integrate & configure",
    description:
      "Shopify apps, payment flows, multi-currency, shipping rules, and vendor partner workflows — wired up so Alex can manage inventory without calling us for every SKU.",
  },
  {
    title: "Support what Shopify can't",
    description:
      "Custom theme work for variant image ordering, OOS lead time display, and the one-off requests that come with running a specialty store — handled by Mired, not a ticket queue.",
  },
];

const CaseStudyProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-b-2 border-black">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            How we work together
          </h2>
          <p className="text-xl mt-4">
            Alex runs the business. Mired built the platform and stays available
            when Shopify needs a push past its defaults.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="border-2 rounded-10 border-black p-6 sm:p-8 bg-skin-yellow-200/50"
            >
              <h3 className="text-xl lg:text-2xl font-clash_display font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-base font-manrope text-black/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyProcess;
