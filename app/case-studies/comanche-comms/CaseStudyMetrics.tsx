const METRICS = [
  { value: "171+", label: "Trusted reviews on the live storefront" },
  { value: "50+", label: "Premium brands across the catalog" },
  { value: "30+", label: "Shop categories — devices to SERE kits" },
  { value: "25+", label: "Countries with localized currency checkout" },
];

const CaseStudyMetrics = () => {
  return (
    <section className="bg-skin-yellow-200 border-b-2 border-black py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="border-2 border-black rounded-10 bg-white p-6 sm:p-8 text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-clash_display font-semibold text-skin-blue-800">
                {metric.value}
              </p>
              <p className="mt-2 text-sm sm:text-base font-manrope text-black/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMetrics;
