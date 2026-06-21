import IntegrationLogo from "../IntegrationLogo";
import { BarChart3, Braces, LayoutDashboard, Mail, Megaphone, PenLine } from "lucide-react";

const logoBox =
  "flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white p-2.5 shadow-[2px_2px_0_0_#000]";

const aiModels = [
  { src: "/images/ai-logos/claude.svg", alt: "Claude", color: "#D97757" },
  { src: "/images/ai-logos/openai.svg", alt: "OpenAI", color: "#000000" },
  { src: "/images/ai-logos/googlegemini.svg", alt: "Google Gemini", color: "#1C69FF" },
];

const stackTools = [
  { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
  { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
  { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
];

export const IntegrateVisual = () => {
  return (
    <div
      className="w-full max-w-[340px] border-2 border-black rounded-[20px] bg-white p-5 sm:p-6 shadow-[6px_6px_0_0_#000]"
      aria-hidden
    >
      <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-3">
        AI models
      </p>
      <div className="flex justify-center gap-2.5 sm:gap-3 mb-2">
        {aiModels.map((logo) => (
          <div key={logo.alt} className={logoBox} title={logo.alt}>
            <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="lg" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8 py-3">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="text-skin-blue-800"
          >
            <path
              d="M10 0V20M10 20L4 14M10 20L16 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-3">
        Your stack
      </p>
      <div className="flex justify-center gap-2.5 sm:gap-3">
        {stackTools.map((logo) => (
          <div key={logo.alt} className={logoBox} title={logo.alt}>
            <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="lg" />
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t-2 border-dashed border-black/15 text-center">
        <p className="text-xs font-manrope text-black/60">
          LLMs wired into CRM, Slack &amp; internal tools
        </p>
      </div>
    </div>
  );
};

export const BuildVisual = () => {
  return (
    <div
      className="w-full max-w-[340px] border-2 border-black rounded-[20px] bg-white overflow-hidden shadow-[6px_6px_0_0_#000]"
      aria-hidden
    >
      <div className="bg-skin-lavender border-b-2 border-black px-3 py-2 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] border border-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41] border border-black/20" />
        <span className="ml-2 text-[10px] font-manrope font-semibold text-black/50 truncate">
          ops-dashboard.mired.io
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-skin-yellow-200">
            <LayoutDashboard className="h-4 w-4 text-skin-blue-800" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-manrope font-bold leading-tight">Admin Dashboard</p>
            <p className="text-[10px] font-manrope text-black/50">Live metrics &amp; workflows</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Users", value: "Millions+" },
            { label: "Revenue", value: "$2.5M" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border-2 border-black bg-skin-pink-200/40 px-2 py-2 text-center"
            >
              <p className="text-[9px] font-manrope font-semibold uppercase text-black/50">
                {stat.label}
              </p>
              <p className="text-sm font-clash_display font-semibold text-skin-blue-800">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-black bg-white p-2.5">
          <div className="flex items-end justify-between gap-1 h-16 px-1">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-skin-blue-800/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <BarChart3 className="h-3 w-3 text-skin-blue-800" />
            <p className="text-[10px] font-manrope text-black/50">Weekly performance</p>
          </div>
        </div>

        <div className="rounded-lg border-2 border-black bg-skin-slate-800 px-3 py-2.5 font-mono text-[10px] text-green-400 leading-relaxed">
          <div className="flex items-center gap-1.5 mb-1">
            <Braces className="h-3 w-3 text-skin-yellow-600" />
            <span className="text-white/60 font-manrope text-[9px] uppercase tracking-wider">
              REST API
            </span>
          </div>
          <span className="text-white/40">GET </span>
          <span className="text-green-400">/api/v1/analytics</span>
          <span className="text-white/40"> → 200 OK</span>
        </div>
      </div>
    </div>
  );
};

const growChannels = [
  {
    icon: PenLine,
    label: "Content",
    detail: "Strategy & SEO",
    color: "bg-skin-lavender",
  },
  {
    icon: Megaphone,
    label: "Ads",
    detail: "Paid campaigns",
    color: "bg-skin-yellow-200",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "Sequences that scale",
    color: "bg-skin-pink-200",
  },
];

export const GrowVisual = () => {
  return (
    <div
      className="w-full max-w-[340px] border-2 border-black rounded-[20px] bg-white p-5 sm:p-6 shadow-[6px_6px_0_0_#000]"
      aria-hidden
    >
      <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-4">
        Go-to-market
      </p>

      <div className="space-y-2.5">
        {growChannels.map(({ icon: Icon, label, detail, color }) => (
          <div
            key={label}
            className={`flex items-center gap-3 rounded-xl border-2 border-black ${color} px-3 py-2.5`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-white">
              <Icon className="h-4 w-4 text-skin-blue-800" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-manrope font-bold leading-tight">{label}</p>
              <p className="text-[11px] font-manrope text-black/55">{detail}</p>
            </div>
            <div className="ml-auto shrink-0">
              <svg width="16" height="10" viewBox="0 0 24 10" fill="none">
                <path
                  d="M23.4596 5.45962C23.7135 5.20578 23.7135 4.79422 23.4596 4.54038L19.323 0.403806C19.0692 0.149965 18.6576 0.149965 18.4038 0.403806C18.15 0.657647 18.15 1.0692 18.4038 1.32304L22.0808 5L18.4038 8.67696C18.15 8.9308 18.15 9.34235 18.4038 9.59619C18.6576 9.85003 19.0692 9.85003 19.323 9.59619L23.4596 5.45962ZM0 5.65H23V4.35H0V5.65Z"
                  fill="#420FB0"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border-2 border-black bg-skin-blue-800 px-3 py-3 text-center">
        <p className="text-2xl font-clash_display font-semibold text-white">10x</p>
        <p className="text-[11px] font-manrope text-white/75 mt-0.5">
          Traffic &amp; revenue — real client results
        </p>
      </div>
    </div>
  );
};
