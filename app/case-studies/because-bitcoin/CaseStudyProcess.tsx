const STEPS = [
  {
    title: "Weekly syncs",
    description:
      "Standing calls with Max and the BB team — roadmap reviews, blockers, and priority shifts handled in real time, not buried in email threads.",
  },
  {
    title: "Dedicated team",
    description:
      "The same engineers and designers on every release. No rotating contractors, no context loss between sprints.",
  },
  {
    title: "Ship continuously",
    description:
      "Features go live as they're ready — Terminal modules, Trader X builds, site updates. Incremental delivery over big-bang launches.",
  },
  {
    title: "Desk-driven feedback",
    description:
      "The seven-analyst desk tests every build before it hits Premium. Real traders, real sessions, real edge cases caught early.",
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
            A long-term engagement model — not a one-off project handoff. We plan,
            build, deploy, and iterate as Because Bitcoin scales.
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
