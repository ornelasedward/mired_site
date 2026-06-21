import ServiceOfferingLayout from "@/components/offerings/ServiceOfferingLayout";
import {
  BuildProductTypes,
  BuildStackVisual,
} from "@/components/offerings/OfferingVisuals";
import { BuildVisual } from "@/components/home/digitalSoluations/ServiceVisuals";
import {
  Braces,
  Cpu,
  LayoutDashboard,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Build — Custom Software & Internal Tools",
  description:
    "Dashboards, APIs, admin panels, and full-stack applications — how Mired builds the software layer that powers your operations and AI integrations.",
};

const steps = [
  {
    phase: "01",
    title: "Consultation",
    description:
      "We learn how your team works today — what spreadsheets, dashboards, and workarounds are holding things together. No need to arrive with a spec; we ask the right questions to uncover what actually needs to be built.",
  },
  {
    phase: "02",
    title: "Define the problem",
    description:
      "Pain points become requirements: a dashboard that shows live ops data, an API your mobile app can call, an admin panel that replaces five manual steps. We translate business needs into a build scope you can approve with confidence.",
  },
  {
    phase: "03",
    title: "Architecture & scope",
    description:
      "We map the technical shape — frontend, backend, database, auth, integrations — and show you what the finished product looks like before a line of code is written. Clear milestones, fixed phases, no surprise scope creep.",
  },
  {
    phase: "04",
    title: "Collaborate on the vision",
    description:
      "Bring your own wireframes or let us lead the design. Either way, we workshop together — you review staging builds, give feedback, and we adjust. You're never guessing what we're building behind closed doors.",
  },
  {
    phase: "05",
    title: "Build in sprints",
    description:
      "Dashboards, REST APIs, internal tools, and customer-facing platforms — developed incrementally so you see progress every week. We use modern frameworks (Next.js, TypeScript, PostgreSQL) built for speed and maintainability.",
  },
  {
    phase: "06",
    title: "Stage, test & refine",
    description:
      "Every feature lands in a staging environment first. Your team clicks through real flows, catches edge cases, and validates before production. We fix, polish, and repeat until it feels right.",
  },
  {
    phase: "07",
    title: "Deploy to production",
    description:
      "Launch day is planned, not improvised — monitoring, rollback paths, and documentation included. The software goes live integrated with your AI layer, CRM, and the rest of your ecosystem.",
  },
  {
    phase: "08",
    title: "Iterate as you scale",
    description:
      "Products evolve. We add modules, optimize performance, and ship new features as your business grows. Because Bitcoin started with a website and ended with three production platforms — we build for the long run.",
  },
];

const iconClass = "h-5 w-5 text-skin-blue-800";

const deliverables = [
  {
    title: "Admin dashboards",
    description:
      "Real-time metrics, user management, and ops views — the command center your team opens every morning.",
    icon: <LayoutDashboard className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "REST & GraphQL APIs",
    description:
      "Documented, versioned endpoints your apps, partners, and integrations can rely on.",
    icon: <Braces className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Customer-facing apps",
    description:
      "Web platforms, portals, and tools your users interact with — fast, accessible, and on-brand.",
    icon: <Users className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "Internal tooling",
    description:
      "Replace manual workflows with software your team actually wants to use.",
    icon: <Wrench className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "E-commerce & Shopify",
    description:
      "Storefronts, catalog management, and checkout flows — like we built for Comanche Comms.",
    icon: <ShoppingCart className={iconClass} strokeWidth={2.5} />,
  },
  {
    title: "AI-ready infrastructure",
    description:
      "Built to connect with LLM pipelines, agents, and automation from day one.",
    icon: <Cpu className={iconClass} strokeWidth={2.5} />,
  },
];

const principles = [
  "Weekly demos",
  "Staging first",
  "Ship fast",
  "Full ownership",
  "Built to scale",
];

export default function BuildPage() {
  return (
    <ServiceOfferingLayout
      label="Build"
      title="Custom software that powers your operations"
      subtitle="Dashboards, APIs, admin panels, and full-stack apps — the build layer behind everything else."
      intro="AI integrations need software around them — dashboards to monitor agents, APIs to connect partners, admin panels to manage workflows. We build the connective tissue between your team and the tools that run your business."
      visual={<BuildVisual />}
      processVisual={
        <>
          <BuildVisual />
          <BuildStackVisual />
        </>
      }
      bottomVisual={<BuildProductTypes />}
      steps={steps}
      deliverables={deliverables}
      principles={principles}
      heroClassName="bg-white"
      handholdText="You don't need a full technical spec or a product manager on staff. We walk you through scoping, design, and deployment — reviewing staging builds together at every milestone. Bring your own wireframes or let us lead; either way, you're never left guessing what's being built or when it ships."
    />
  );
}
