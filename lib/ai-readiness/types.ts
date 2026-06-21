export type ReadinessDimension =
  | "stack"
  | "useCase"
  | "team"
  | "timeline";

export type ReadinessTier = "exploring" | "building" | "ready" | "advanced";

export interface ReadinessOption {
  label: string;
  score: number;
}

export interface ReadinessQuestion {
  id: string;
  dimension: ReadinessDimension;
  question: string;
  options: ReadinessOption[];
}

export interface DimensionScore {
  dimension: ReadinessDimension;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface ReadinessResult {
  overallScore: number;
  tier: ReadinessTier;
  tierLabel: string;
  dimensionScores: DimensionScore[];
  topOpportunities: string[];
  summary: string;
}

export type ReadinessAnswers = Record<string, number>;
