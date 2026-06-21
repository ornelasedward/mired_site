const STATS = [
  {
    value: "Millions+",
    label: "End users reached through platforms we’ve built and scaled",
  },
  {
    value: "Enterprise",
    label: "Clients — from large ops teams to high-growth brands",
  },
  {
    value: "10x",
    label: "Documented traffic & revenue growth on flagship engagements",
  },
  {
    value: "Production",
    label: "Systems shipped weekly — CRM, commerce, internal tools & AI",
  },
];

type CompanyReachStatsProps = {
  className?: string;
  /** Optional supporting line under the grid */
  footnote?: string;
};

const CompanyReachStats = ({
  className = "bg-white border-b-2 border-black",
  footnote,
}: CompanyReachStatsProps) => {
  return (
    <section className={className}>
      <div className="container py-12 sm:py-16">
        {footnote && (
          <p className="text-center text-base sm:text-lg font-manrope text-black/70 max-w-2xl mx-auto mb-8">
            {footnote}
          </p>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-2 border-black rounded-[20px] bg-skin-lavender/40 p-5 sm:p-6 text-center shadow-[4px_4px_0_0_#000]"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-clash_display font-semibold text-skin-blue-800">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-manrope text-black/75 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyReachStats;
