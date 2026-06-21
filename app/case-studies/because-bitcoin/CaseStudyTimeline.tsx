const PHASES = [
  {
    phase: "01",
    title: "Discovery & vision",
    description:
      "It started with a conversation — Max had a ground-up idea for a trading media company built around real analysts, daily market coverage, and tools traders would actually use. We mapped the product surface, audience, and revenue model before writing a line of code.",
  },
  {
    phase: "02",
    title: "Plan & assemble the team",
    description:
      "We scoped the first release, put a dedicated Mired team on the account, and established weekly syncs with Max and the BB leadership. Design, engineering, and deployment ran in parallel — not in silos.",
  },
  {
    phase: "03",
    title: "Ship BecauseBitcoin.com",
    description:
      "The flagship site launched as the hub for articles, Premium Discord, Academy, and product discovery. It became the public face of a seven-analyst desk serving 38K+ followers across YouTube, X, and Discord.",
  },
  {
    phase: "04",
    title: "Build BB Terminal",
    description:
      "As the audience grew, traders needed a real command center — degen charts, portfolio tracking, liquidation heatmaps, and on-chain analytics in one fast terminal. We shipped it module by module, with the desk testing every build.",
  },
  {
    phase: "05",
    title: "Launch BB Trader X",
    description:
      "The latest evolution: an AI-powered trading platform with strategy automation, exchange integration, and an AI Builder workflow — purpose-built for the speed and clarity active crypto traders demand.",
  },
  {
    phase: "06",
    title: "Continuous partnership",
    description:
      "Years in, we still ship weekly. New features, model updates, infrastructure scaling, and product drops — Mired remains embedded with Because Bitcoin as the company grows past $2.5M in annual revenue.",
  },
];

const CaseStudyTimeline = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-b-2 border-black">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            From idea to ecosystem
          </h2>
          <p className="text-xl mt-4">
            A ground-up partnership that grew into multiple production platforms —
            each one built, tested, and iterated with the desk that uses them.
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
