import IntegrationLogo from "@/components/home/IntegrationLogo";
import {
  Bot,
  Database,
  FileText,
  GitBranch,
  MessageSquare,
  Mic,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const card =
  "w-full max-w-[340px] border-2 border-black rounded-[20px] bg-white shadow-[6px_6px_0_0_#000]";

const logoBox =
  "flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0_0_#000]";

const pipeArrow = () => (
  <svg width="16" height="20" viewBox="0 0 20 28" fill="none" className="text-skin-blue-800 shrink-0">
    <path
      d="M10 0V20M10 20L4 14M10 20L16 14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LlmPipelineVisual = () => (
  <div className={`${card} p-5 sm:p-6`} aria-hidden>
    <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-3">
      Model-agnostic pipeline
    </p>

    <div className="flex justify-center gap-2 mb-3">
      {[
        { src: "/images/ai-logos/openai.svg", alt: "OpenAI", color: "#000000" },
        { src: "/images/ai-logos/claude.svg", alt: "Claude", color: "#D97757" },
        { src: "/images/ai-logos/googlegemini.svg", alt: "Gemini", color: "#1C69FF" },
      ].map((logo) => (
        <div key={logo.alt} className={logoBox} title={logo.alt}>
          <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="lg" />
        </div>
      ))}
    </div>

    <div className="flex justify-center py-1">{pipeArrow()}</div>

    <div className="space-y-2">
      {[
        { icon: GitBranch, label: "API layer", detail: "Secure endpoints & routing" },
        { icon: Shield, label: "Guardrails", detail: "Policy & cost controls" },
        { icon: Sparkles, label: "Monitoring", detail: "Logs, latency & usage" },
      ].map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 rounded-xl border-2 border-black bg-skin-lavender px-3 py-2"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-white">
            <Icon className="h-3.5 w-3.5 text-skin-blue-800" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-manrope font-bold leading-tight">{label}</p>
            <p className="text-[10px] font-manrope text-black/55">{detail}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center py-2">{pipeArrow()}</div>

    <div className="flex justify-center gap-2">
      {[
        { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
        { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
        { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
      ].map((logo) => (
        <div key={logo.alt} className={logoBox} title={logo.alt}>
          <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="lg" />
        </div>
      ))}
    </div>

    <div className="mt-3 pt-3 border-t-2 border-dashed border-black/15 text-center">
      <p className="text-[11px] font-manrope text-black/60">
        Your data in — production responses out
      </p>
    </div>
  </div>
);

export const AiAgentsVisual = () => (
  <div className={`${card} overflow-hidden`} aria-hidden>
    <div className="bg-skin-blue-800 border-b-2 border-black px-4 py-3 flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
        <Bot className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-xs font-manrope font-bold text-white leading-tight">Support Agent</p>
        <p className="text-[10px] font-manrope text-white/60">Live · Slack &amp; Teams</p>
      </div>
      <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400 border border-white/40" />
    </div>

    <div className="p-4 space-y-2.5 bg-skin-pink-50/50">
      <div className="flex gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-[10px] font-manrope font-bold">
          U
        </div>
        <div className="rounded-xl rounded-tl-sm border-2 border-black bg-white px-3 py-2 max-w-[85%]">
          <p className="text-[11px] font-manrope leading-snug">
            Where&apos;s my order status?
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <div className="rounded-xl rounded-tr-sm border-2 border-black bg-skin-lavender px-3 py-2 max-w-[85%]">
          <p className="text-[11px] font-manrope leading-snug">
            Order #4821 shipped yesterday — tracking link sent to your email.
          </p>
        </div>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-black bg-skin-blue-800">
          <Bot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-3 py-2">
        <Mic className="h-3.5 w-3.5 text-skin-blue-800 shrink-0" strokeWidth={2.5} />
        <div className="flex items-end gap-0.5 h-5 flex-1">
          {[3, 6, 4, 8, 5, 9, 6, 4, 7, 3].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-skin-blue-800/70"
              style={{ height: `${h * 10}%` }}
            />
          ))}
        </div>
        <span className="text-[9px] font-manrope font-semibold text-black/45 uppercase">
          Voice
        </span>
      </div>
    </div>

    <div className="border-t-2 border-black px-4 py-3 flex justify-center gap-2">
      {[
        { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
        { src: "/images/integrations/microsoftteams.svg", alt: "Teams", color: "#6264A7" },
      ].map((logo) => (
        <div key={logo.alt} className={logoBox} title={logo.alt}>
          <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="lg" />
        </div>
      ))}
      <div className={logoBox} title="Web chat">
        <MessageSquare className="h-4 w-4 text-skin-blue-800" strokeWidth={2.5} />
      </div>
    </div>
  </div>
);

export const RagKnowledgeVisual = () => (
  <div className={`${card} p-5 sm:p-6`} aria-hidden>
    <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-4">
      Grounded in your data
    </p>

    <div className="space-y-2 mb-3">
      {[
        { icon: FileText, label: "Docs & PDFs", color: "bg-skin-yellow-200" },
        { icon: Database, label: "Databases", color: "bg-skin-pink-200" },
        { icon: FileText, label: "Internal wiki", color: "bg-skin-lavender" },
      ].map(({ icon: Icon, label, color }) => (
        <div
          key={label}
          className={`flex items-center gap-2.5 rounded-xl border-2 border-black ${color} px-3 py-2`}
        >
          <Icon className="h-4 w-4 text-skin-blue-800 shrink-0" strokeWidth={2.5} />
          <p className="text-xs font-manrope font-bold">{label}</p>
        </div>
      ))}
    </div>

    <div className="flex justify-center py-1">{pipeArrow()}</div>

    <div className="rounded-xl border-2 border-black bg-skin-slate-800 px-3 py-2.5 text-center">
      <p className="text-[10px] font-manrope font-bold uppercase tracking-wider text-white/50 mb-1">
        Vector index
      </p>
      <div className="flex justify-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-6 w-1 rounded-full bg-skin-yellow-600/80"
            style={{ opacity: 0.4 + i * 0.12 }}
          />
        ))}
      </div>
    </div>

    <div className="flex justify-center py-1">{pipeArrow()}</div>

    <div className="rounded-xl border-2 border-black bg-white p-3">
      <div className="flex items-start gap-2">
        <Sparkles className="h-4 w-4 text-skin-blue-800 shrink-0 mt-0.5" strokeWidth={2.5} />
        <div>
          <p className="text-[10px] font-manrope font-bold uppercase text-black/45 mb-1">
            Accurate answer
          </p>
          <p className="text-[11px] font-manrope leading-snug text-black/75">
            &ldquo;Based on your Q3 policy doc, returns are accepted within 30
            days.&rdquo;
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const WorkflowAutomationVisual = () => (
  <div className={`${card} p-5 sm:p-6`} aria-hidden>
    <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-black/45 text-center mb-4">
      Cross-system automation
    </p>

    <div className="space-y-0">
      {[
        {
          step: "Trigger",
          detail: "New lead in HubSpot",
          icon: Sparkles,
          bg: "bg-skin-yellow-200",
          logo: { src: "/images/integrations/hubspot.svg", alt: "HubSpot", color: "#FF7A59" },
        },
        {
          step: "Process",
          detail: "Enrich & route via AI",
          icon: Workflow,
          bg: "bg-skin-lavender",
        },
        {
          step: "Action",
          detail: "Notify team in Slack",
          icon: GitBranch,
          bg: "bg-skin-pink-200",
          logo: { src: "/images/integrations/slack.svg", alt: "Slack", color: "#4A154B" },
        },
        {
          step: "Log",
          detail: "Sync record to Salesforce",
          icon: Database,
          bg: "bg-white",
          logo: { src: "/images/integrations/salesforce-icon.svg", alt: "Salesforce", color: "#00A1E0" },
        },
      ].map(({ step, detail, icon: Icon, bg, logo }, i) => (
        <div key={step}>
          <div className={`flex items-center gap-3 rounded-xl border-2 border-black ${bg} px-3 py-2.5`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-skin-blue-800 text-white text-[10px] font-clash_display font-semibold">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-manrope font-bold leading-tight">{step}</p>
              <p className="text-[10px] font-manrope text-black/55">{detail}</p>
            </div>
            {logo ? (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-white p-1">
                <IntegrationLogo src={logo.src} alt={logo.alt} color={logo.color} size="sm" />
              </div>
            ) : (
              <Icon className="h-4 w-4 text-skin-blue-800 shrink-0" strokeWidth={2.5} />
            )}
          </div>
          {i < 3 && (
            <div className="flex justify-center py-0.5">{pipeArrow()}</div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-4 rounded-xl border-2 border-black bg-skin-blue-800 px-3 py-2.5 text-center">
      <p className="text-[11px] font-manrope text-white/75">
        Zero manual handoffs · runs 24/7
      </p>
    </div>
  </div>
);
