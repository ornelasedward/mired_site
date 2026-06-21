const METRICS = [
  { value: "10x", label: "Traffic & revenue growth since partnership" },
  { value: "$2.5M", label: "Annual company revenue across the BB ecosystem" },
  { value: "3", label: "Production platforms shipped and maintained" },
  { value: "7", label: "Analysts on the desk using our tools daily" },
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
