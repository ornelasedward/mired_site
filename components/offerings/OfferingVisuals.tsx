import IntegrationLogo from "@/components/home/IntegrationLogo";

const logoTile = (src: string, alt: string, color?: string) => (
  <div
    key={alt}
    className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0_0_#000]"
    title={alt}
  >
    <IntegrationLogo src={src} alt={alt} color={color} size="lg" />
  </div>
);

export const IntegrateEcosystemGrid = () => (
  <div className="border-2 border-black rounded-[20px] bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000]">
    <p className="text-xs font-manrope font-bold uppercase tracking-wider text-black/50 text-center mb-6">
      Platforms we integrate with
    </p>
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {[
        { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
        { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
        { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
        { src: "/images/integrations/notion.svg", alt: "Notion", color: "#000000" },
        { src: "/images/integrations/airtable.svg", alt: "Airtable", color: "#18BFFF" },
        { src: "/images/integrations/zapier.svg", alt: "Zapier", color: "#FF4A00" },
        { src: "/images/integrations/microsoftteams.svg", alt: "Teams", color: "#6264A7" },
        { src: "/images/integrations/stripe.svg", alt: "Stripe", color: "#635BFF" },
        { src: "/images/integrations/postgresql.svg", alt: "PostgreSQL", color: "#4169E1" },
        { src: "/images/integrations/snowflake.svg", alt: "Snowflake", color: "#29B5E8" },
        { src: "/images/integrations/amazonaws.svg", alt: "AWS", color: "#232F3E" },
        { src: "/images/integrations/pipedrive.svg", alt: "Pipedrive" },
      ].map((l) => logoTile(l.src, l.alt, l.color))}
    </div>
  </div>
);

export const IntegrateAiStack = () => (
  <div className="border-2 border-black rounded-[20px] bg-skin-lavender p-6 sm:p-8 shadow-[6px_6px_0_0_#000]">
    <p className="text-xs font-manrope font-bold uppercase tracking-wider text-black/50 mb-4">
      AI models we deploy
    </p>
    <div className="flex flex-wrap gap-3">
      {[
        { src: "/images/ai-logos/claude.svg", alt: "Claude", color: "#D97757" },
        { src: "/images/ai-logos/openai.svg", alt: "OpenAI", color: "#000000" },
        { src: "/images/ai-logos/googlegemini.svg", alt: "Gemini", color: "#1C69FF" },
        { src: "/images/ai-logos/anthropic.svg", alt: "Anthropic" },
        { src: "/images/ai-logos/meta.svg", alt: "Meta AI", color: "#0467DF" },
      ].map((l) => logoTile(l.src, l.alt, l.color))}
    </div>
    <div className="mt-6 grid grid-cols-3 gap-2 text-center">
      {[
        { label: "RAG", desc: "Your data" },
        { label: "Agents", desc: "Workflows" },
        { label: "Voice", desc: "Assistants" },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-lg border-2 border-black bg-white py-3 px-2"
        >
          <p className="text-sm font-clash_display font-semibold text-skin-blue-800">
            {item.label}
          </p>
          <p className="text-[10px] font-manrope text-black/50">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export const BuildStackVisual = () => (
  <div className="border-2 border-black rounded-[20px] overflow-hidden shadow-[6px_6px_0_0_#000]">
    {[
      {
        label: "Customer-facing UI",
        desc: "Dashboards, portals, storefronts",
        bg: "bg-white",
      },
      {
        label: "API layer",
        desc: "REST, webhooks, integrations",
        bg: "bg-skin-yellow-200",
      },
      {
        label: "Data & auth",
        desc: "PostgreSQL, roles, security",
        bg: "bg-skin-pink-200",
      },
      {
        label: "Infrastructure",
        desc: "Deploy, monitor, scale",
        bg: "bg-skin-lavender",
      },
    ].map((layer, i) => (
      <div
        key={layer.label}
        className={`${layer.bg} px-5 py-4 border-b-2 border-black last:border-b-0 flex items-center gap-4`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-skin-blue-800 text-white text-sm font-clash_display font-semibold">
          {i + 1}
        </span>
        <div>
          <p className="font-manrope font-bold text-sm">{layer.label}</p>
          <p className="text-xs font-manrope text-black/55">{layer.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const BuildProductTypes = () => (
  <div className="grid grid-cols-2 gap-3">
    {[
      { title: "Admin panels", emoji: "📊" },
      { title: "REST APIs", emoji: "⚡" },
      { title: "Shopify stores", emoji: "🛒" },
      { title: "Mobile-ready web", emoji: "📱" },
    ].map((item) => (
      <div
        key={item.title}
        className="border-2 border-black rounded-xl bg-white p-4 text-center shadow-[3px_3px_0_0_#000]"
      >
        <span className="text-2xl block mb-2">{item.emoji}</span>
        <p className="text-sm font-manrope font-bold">{item.title}</p>
      </div>
    ))}
  </div>
);

export const GrowFunnelVisual = () => (
  <div className="border-2 border-black rounded-[20px] bg-white p-6 shadow-[6px_6px_0_0_#000] space-y-3">
    {[
      { stage: "Awareness", channel: "Content & SEO", width: "100%" },
      { stage: "Interest", channel: "Social & ads", width: "85%" },
      { stage: "Consideration", channel: "Email nurture", width: "70%" },
      { stage: "Conversion", channel: "Landing pages", width: "55%" },
      { stage: "Retention", channel: "Lifecycle email", width: "40%" },
    ].map((step) => (
      <div key={step.stage}>
        <div className="flex justify-between text-xs font-manrope mb-1">
          <span className="font-bold">{step.stage}</span>
          <span className="text-black/50">{step.channel}</span>
        </div>
        <div
          className="h-8 rounded-lg border-2 border-black bg-skin-yellow-200 flex items-center px-3"
          style={{ width: step.width }}
        >
          <span className="text-[10px] font-manrope font-semibold text-skin-blue-800">
            →
          </span>
        </div>
      </div>
    ))}
  </div>
);

export const GrowMetricsVisual = () => (
  <div className="border-2 border-black rounded-[20px] bg-skin-blue-800 p-6 text-white shadow-[6px_6px_0_0_#000]">
    <p className="text-xs font-manrope font-bold uppercase tracking-wider text-white/60 mb-4">
      Impact at scale
    </p>
    <div className="grid grid-cols-2 gap-4">
      {[
        { value: "Millions+", label: "End users reached" },
        { value: "10x", label: "Traffic & revenue" },
        { value: "Enterprise", label: "Clients & growth brands" },
        { value: "25+", label: "Markets shipped" },
      ].map((m) => (
        <div
          key={m.label}
          className="rounded-lg border border-white/20 bg-white/10 p-3 text-center"
        >
          <p className="text-xl font-clash_display font-semibold">{m.value}</p>
          <p className="text-[10px] font-manrope text-white/70 mt-0.5">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);
