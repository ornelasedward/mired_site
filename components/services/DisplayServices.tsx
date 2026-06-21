import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BuildVisual,
  GrowVisual,
  IntegrateVisual,
} from "@/components/home/digitalSoluations/ServiceVisuals";

const offerings = [
  {
    label: "Integrate",
    subtitle: "We wire AI into the systems you already run",
    description:
      "CRMs, ERPs, Slack, internal dashboards, and custom platforms. LLM pipelines, RAG systems, voice agents, and workflow automation your team uses every day.",
    href: "/integrate",
    backgroundClass: "bg-skin-pink-200",
    visual: <IntegrateVisual />,
  },
  {
    label: "Build",
    subtitle: "Custom software and internal tools",
    description:
      "Dashboards, APIs, admin panels, and full-stack applications that power your operations. The connective tissue between your team and the AI layer.",
    href: "/build",
    backgroundClass: "bg-white",
    visual: <BuildVisual />,
  },
  {
    label: "Grow",
    subtitle: "Launch and scale your product",
    description:
      "Content strategy, paid advertising, and email sequences that scale with your business — the same go-to-market systems we run for our clients.",
    href: "/grow",
    backgroundClass: "bg-skin-yellow-200",
    visual: <GrowVisual />,
  },
];

const DisplayServices = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
      {offerings.map((offering) => (
        <Link
          key={offering.label}
          href={offering.href}
          className={cn(
            "group flex flex-col border-2 border-black rounded-[20px] overflow-hidden shadow-[6px_6px_0_0_#000] transition-transform duration-200 hover:-translate-y-1",
            offering.backgroundClass
          )}
        >
          <div className="flex justify-center pt-8 pb-4 px-4 scale-90 sm:scale-100">
            {offering.visual}
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-8 pt-2 border-t-2 border-black/10">
            <span className="inline-block w-fit border-2 border-black rounded-md px-3 py-1 text-sm font-manrope font-bold bg-white/80 mb-3">
              {offering.label}
            </span>
            <h3 className="text-xl font-clash_display font-semibold mb-2">
              {offering.subtitle}
            </h3>
            <p className="text-sm sm:text-base font-manrope text-black/75 flex-1">
              {offering.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-manrope font-semibold text-skin-blue-800 group-hover:underline">
              Learn more
              <svg width="20" height="8" viewBox="0 0 24 10" fill="none">
                <path
                  d="M23.4596 5.45962C23.7135 5.20578 23.7135 4.79422 23.4596 4.54038L19.323 0.403806C19.0692 0.149965 18.6576 0.149965 18.4038 0.403806C18.15 0.657647 18.15 1.0692 18.4038 1.32304L22.0808 5L18.4038 8.67696C18.15 8.9308 18.15 9.34235 18.4038 9.59619C18.6576 9.85003 19.0692 9.85003 19.323 9.59619L23.4596 5.45962ZM0 5.65H23V4.35H0V5.65Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayServices;
