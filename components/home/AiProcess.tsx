const STEPS = [
  {
    title: "Assess",
    description:
      "We map your stack, identify high-ROI use cases, and deliver a build-vs-buy roadmap — so you know exactly where AI creates value before writing a line of code.",
  },
  {
    title: "Pilot",
    description:
      "A fixed-scope pilot integrated into one real workflow. Production architecture from day one — not a slide deck or disconnected prototype.",
  },
  {
    title: "Deploy",
    description:
      "Full integration with your CRM, ERP, internal tools, or custom platforms. Security, monitoring, and human-in-the-loop built in.",
  },
  {
    title: "Support",
    description:
      "Ongoing optimization, model updates, and new integrations as your needs evolve. We stay with you past launch.",
  },
];

const AiProcess = () => {
  return (
    <div className="bg-white border-y-[2px] border-black py-16 sm:py-20">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            How we work
          </h2>
          <p className="text-xl mt-4">
            From readiness assessment to production deployment — consulting that
            ends with working systems, not recommendations sitting in a folder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="border-2 rounded-10 border-black p-6 min-h-[220px]"
            >
              <h5 className="text-base font-manrope font-extrabold">
                Step {i + 1}
              </h5>
              <h4 className="text-xl lg:text-2xl font-clash_display font-semibold mt-1 mb-3">
                {step.title}
              </h4>
              <p className="text-base font-normal font-manrope">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiProcess;
