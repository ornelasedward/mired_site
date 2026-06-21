import { cn } from "@/lib/utils";

interface AiOfferingsProps {
  embedded?: boolean;
}

const AiOfferings = ({ embedded = false }: AiOfferingsProps) => {
  const offerings = [
    {
      title: "Integrate",
      description:
        "Wire LLMs, voice agents, and automation into CRMs, ERPs, Slack, and custom platforms — model-agnostic and built for production.",
      image: "url('/images/code.svg')",
    },
    {
      title: "Automate",
      description:
        "RAG systems, LLM pipelines, workflow automation, and custom AI agents that eliminate manual work in your specific operations.",
      image: "url('/images/design_s.svg')",
    },
    {
      title: "Advise",
      description:
        "AI readiness assessments, build-vs-buy analysis, and 90-day roadmaps from a team that builds — not just advises.",
      image: "url('/images/marketing.svg')",
    },
  ];

  return (
    <div
      className={cn(
        "relative z-40",
        embedded ? "pb-12 pt-4 md:pt-8" : "py-16 bg-white"
      )}
    >
      <div className="container grid lg:grid-cols-3 gap-8 md:gap-10">
        {offerings.map((offering) => (
          <div
            key={offering.title}
            className="border-2 border-black rounded-[20px] pt-8 md:pt-12 pb-8 px-4 md:px-8 overflow-hidden text-center bg-white"
          >
            <div
              className="bg-top bg-contain bg-no-repeat max-w-[220px] mx-auto relative pb-[55%] mb-6"
              style={{ backgroundImage: offering.image }}
            />

            <h3 className="heading-2 normal-case text-2xl sm:text-3xl">
              {offering.title}
            </h3>
            <p className="text-base font-montserrat font-normal md:text-xl mt-3 max-w-md mx-auto">
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiOfferings;
