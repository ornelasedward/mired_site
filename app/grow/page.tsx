import ServiceOfferingLayout from "@/components/offerings/ServiceOfferingLayout";
import {
  GrowFunnelVisual,
  GrowMetricsVisual,
} from "@/components/offerings/OfferingVisuals";
import { GrowVisual } from "@/components/home/digitalSoluations/ServiceVisuals";
import {
  BarChart3,
  Mail,
  Megaphone,
  Palette,
  PenLine,
  Share2,
} from "lucide-react";

export const metadata = {
  title: "Grow — Launch & Scale Your Product",
  description:
    "Content strategy, paid advertising, and email sequences that scale — how Mired helps clients grow traffic, revenue, and brand presence.",
};

const steps = [
  {
    phase: "01",
    title: "Consultation",
    description:
      "We start by understanding where you are — current traffic, conversion rates, email list size, ad spend, and brand positioning. No marketing degree required on your end; we meet you at your level and build from there.",
  },
  {
    phase: "02",
    title: "Audit & opportunity map",
    description:
      "What's working, what's not, and what's missing. We review your site, content, ad accounts, and email flows to find the highest-leverage gaps — the ones that move revenue, not just vanity metrics.",
  },
  {
    phase: "03",
    title: "Strategy & channel plan",
    description:
      "Content, paid ads, email, social — we recommend the mix that fits your budget and goals. Because Bitcoin went from a media idea to 38K+ followers and $2.5M in revenue; Comanche Comms went from showroom to global Shopify. We know what growth looks like at each stage.",
  },
  {
    phase: "04",
    title: "Content that converts",
    description:
      "Blog posts, landing pages, case studies, and SEO-optimized copy written for your audience — not generic templates. Every piece ties back to a business outcome: leads, signups, or sales.",
  },
  {
    phase: "05",
    title: "Paid campaigns & email",
    description:
      "Ad creative, audience targeting, and email sequences designed to scale. Welcome flows, nurture campaigns, and retargeting — written and built to run while you focus on the product.",
  },
  {
    phase: "06",
    title: "Launch & measure",
    description:
      "Campaigns go live with tracking from day one. We monitor open rates, CTR, ROAS, and conversion paths — adjusting copy, creative, and spend based on what the data actually says.",
  },
  {
    phase: "07",
    title: "Optimize & scale",
    description:
      "Double down on winners, cut what underperforms, and expand into new channels as traction builds. Growth isn't a one-time launch — it's a system we tune continuously.",
  },
  {
    phase: "08",
    title: "Long-term partnership",
    description:
      "We stay embedded as your audience grows — new product launches, seasonal campaigns, and brand refreshes handled by a team that already knows your story and your stack.",
  },
];

const iconClass = "h-5 w-5 text-skin-blue-800";

const deliverables = [
  {
    title: "Content strategy",
    description:
      "Editorial calendars, SEO roadmaps, and messaging frameworks aligned to your business goals.",
    icon: <PenLine className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Paid advertising",
    description:
      "Meta, Google, and platform-specific campaigns with creative, targeting, and budget management.",
    icon: <Megaphone className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Email marketing",
    description:
      "Sequences, newsletters, and automation flows that nurture leads and drive repeat revenue.",
    icon: <Mail className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Brand & web design",
    description:
      "Visual identity, landing pages, and site updates that match the quality of your product.",
    icon: <Palette className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Analytics & reporting",
    description:
      "Clear dashboards showing what's working — traffic, conversions, and campaign ROI in one view.",
    icon: <BarChart3 className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Social & community",
    description:
      "Content for Instagram, X, Discord, and the channels where your audience already gathers.",
    icon: <Share2 className={iconClass} strokeWidth={2.5} />,
  },
];

const principles = [
  "Data-driven",
  "Real client results",
  "Multi-channel",
  "Copy that converts",
  "Scale what works",
];

export default function GrowPage() {
  return (
    <ServiceOfferingLayout
      label="Grow"
      title="Launch and scale with systems that compound"
      subtitle="Content, ads, and email — built to grow traffic, revenue, and brand trust."
      intro="Building the product is half the battle. The other half is getting it in front of the right people and turning attention into revenue. We run the same go-to-market systems for our clients that we use on our own projects — fast, measurable, and built to iterate."
      visual={<GrowVisual />}
      processVisual={
        <>
          <GrowVisual />
          <GrowFunnelVisual />
        </>
      }
      midVisual={<GrowMetricsVisual />}
      steps={steps}
      deliverables={deliverables}
      principles={principles}
      heroClassName="bg-skin-yellow-200"
      handholdText="You don't need a marketing team or ad account expertise on day one. We guide you from strategy through launch — content calendars, campaign setup, and email flows built and managed alongside you. Have a brand voice in mind? We amplify it. Starting from scratch? We build it with you, one channel at a time."
    />
  );
}
