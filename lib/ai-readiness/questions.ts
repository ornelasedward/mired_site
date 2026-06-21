import type { ReadinessQuestion } from "./types";

export const READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    id: "stack-crm",
    dimension: "stack",
    question: "What CRM or core business system does your team rely on most?",
    options: [
      { label: "Nothing centralized yet", score: 0 },
      { label: "Spreadsheets or disconnected tools", score: 1 },
      { label: "CRM/ERP but siloed from other tools", score: 2 },
      { label: "Integrated stack with API access", score: 2 },
      { label: "Fully connected CRM, comms, and ops stack", score: 3 },
    ],
  },
  {
    id: "stack-data",
    dimension: "stack",
    question: "How accessible is your business data for automation or AI?",
    options: [
      { label: "Mostly in people's heads or inboxes", score: 0 },
      { label: "Scattered across docs and tools", score: 1 },
      { label: "Centralized but hard to query", score: 2 },
      { label: "Clean, documented, and API-ready", score: 3 },
    ],
  },
  {
    id: "stack-integrations",
    dimension: "stack",
    question: "How well do your current tools talk to each other?",
    options: [
      { label: "Manual copy-paste between systems", score: 0 },
      { label: "Some integrations, lots of gaps", score: 1 },
      { label: "Most key tools connected", score: 2 },
      { label: "Real-time sync across your stack", score: 3 },
    ],
  },
  {
    id: "usecase-clarity",
    dimension: "useCase",
    question: "How clear is your team on where AI would create the most value?",
    options: [
      { label: "Still exploring — no clear use cases", score: 0 },
      { label: "A few ideas but not prioritized", score: 1 },
      { label: "Top 2–3 use cases identified", score: 2 },
      { label: "Documented roadmap with ROI estimates", score: 3 },
    ],
  },
  {
    id: "usecase-area",
    dimension: "useCase",
    question: "Which area would benefit most from AI integration right now?",
    options: [
      { label: "Not sure yet", score: 0 },
      { label: "Customer support or communications", score: 1 },
      { label: "Sales ops or CRM workflows", score: 2 },
      { label: "Multiple areas with a clear first win", score: 3 },
    ],
  },
  {
    id: "usecase-pilots",
    dimension: "useCase",
    question: "Have you tested any AI tools or pilots internally?",
    options: [
      { label: "No, still evaluating", score: 0 },
      { label: "Informal experiments only", score: 1 },
      { label: "One or two focused pilots", score: 2 },
      { label: "Production AI already in use", score: 3 },
    ],
  },
  {
    id: "team-owner",
    dimension: "team",
    question: "Does your team have someone who can own AI implementation?",
    options: [
      { label: "No technical owner", score: 0 },
      { label: "Part-time or shared responsibility", score: 1 },
      { label: "Dedicated person with bandwidth", score: 2 },
      { label: "Technical lead plus executive sponsor", score: 3 },
    ],
  },
  {
    id: "team-change",
    dimension: "team",
    question: "How ready is your organization for workflow changes?",
    options: [
      { label: "High resistance to change", score: 0 },
      { label: "Open but cautious", score: 1 },
      { label: "Generally agile and willing to iterate", score: 2 },
      { label: "Proven track record adopting new tools", score: 3 },
    ],
  },
  {
    id: "team-technical",
    dimension: "team",
    question: "How would you describe your team's technical comfort level?",
    options: [
      { label: "Non-technical team", score: 0 },
      { label: "Comfortable with SaaS tools", score: 1 },
      { label: "Some technical staff who can collaborate", score: 2 },
      { label: "Engineering team in-house", score: 3 },
    ],
  },
  {
    id: "timeline-when",
    dimension: "timeline",
    question: "When do you want to see AI producing measurable results?",
    options: [
      { label: "No timeline yet", score: 0 },
      { label: "Within 6–12 months", score: 1 },
      { label: "Within 3–6 months", score: 2 },
      { label: "Within 90 days", score: 3 },
    ],
  },
  {
    id: "timeline-budget",
    dimension: "timeline",
    question: "Is budget allocated or approved for an AI integration project?",
    options: [
      { label: "Just researching", score: 0 },
      { label: "Budget likely but not confirmed", score: 1 },
      { label: "Budget identified, pending approval", score: 2 },
      { label: "Approved budget ready to deploy", score: 3 },
    ],
  },
  {
    id: "timeline-decision",
    dimension: "timeline",
    question: "Who makes the final call on technology investments?",
    options: [
      { label: "Still identifying", score: 0 },
      { label: "Team decision, no single owner", score: 1 },
      { label: "Department head", score: 2 },
      { label: "C-level or founder with direct access", score: 3 },
    ],
  },
];

export const DIMENSION_LABELS: Record<
  import("./types").ReadinessDimension,
  string
> = {
  stack: "Stack & Integrations",
  useCase: "Use Case Clarity",
  team: "Team Readiness",
  timeline: "Timeline & Decision-Making",
};
