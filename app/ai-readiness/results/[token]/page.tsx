import { notFound } from "next/navigation";
import Link from "next/link";
import { DIMENSION_LABELS } from "@/lib/ai-readiness/questions";
import type { ReadinessDimension } from "@/lib/ai-readiness/types";
import CalendlyEmbed from "@/components/leads/CalendlyEmbed";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabaseEnv";

interface Props {
  params: Promise<{ token: string }>;
}

const tierColors: Record<string, string> = {
  exploring: "bg-skin-yellow-200",
  building: "bg-skin-lavender",
  ready: "bg-skin-pink-200",
  advanced: "bg-customGreen/30",
};

async function fetchResult(token: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;

  const res = await fetch(
    `${SUPABASE_URL}/functions/v1/public-ai-readiness?token=${encodeURIComponent(token)}`,
    {
      headers: { Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) return null;
  const json = await res.json();
  return json.data as {
    overall_score: number;
    tier: string;
    tier_label: string;
    dimension_scores: { dimension: ReadinessDimension; percentage: number }[];
    top_opportunities: string[];
    summary: string;
    name: string | null;
  } | null;
}

export async function generateMetadata({ params }: Props) {
  const { token } = await params;
  return {
    title: "AI Readiness Score",
    description: `AI readiness assessment results`,
    robots: { index: false, follow: false },
  };
}

export default async function AiReadinessResultsPage({ params }: Props) {
  const { token } = await params;
  const data = await fetchResult(token);
  if (!data) notFound();

  const topOpportunities = data.top_opportunities ?? [];

  return (
    <div>
      <section className="bg-skin-lavender border-b-2 border-black py-12 sm:py-16">
        <div className="container max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm font-manrope uppercase tracking-wider text-skin-blue-800">
            AI Readiness Report
            {data.name ? ` — ${data.name}` : ""}
          </p>
          <div
            className={`inline-block text-7xl font-hero font-extrabold px-10 py-5 border-2 border-black ${tierColors[data.tier] ?? "bg-white"}`}
          >
            {data.overall_score}
          </div>
          <h1 className="heading-1 normal-case text-2xl sm:text-3xl">
            {data.tier_label}
          </h1>
          <p className="font-manrope text-lg text-black/80 max-w-2xl mx-auto">
            {data.summary}
          </p>
        </div>
      </section>

      <section className="py-12 container max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {data.dimension_scores.map((dim) => (
            <div key={dim.dimension} className="border-2 border-black p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="font-hero font-bold">{DIMENSION_LABELS[dim.dimension]}</h2>
                <span className="font-manrope font-semibold">{dim.percentage}%</span>
              </div>
              <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-skin-blue-800"
                  style={{ width: `${dim.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {topOpportunities.length > 0 && (
          <div className="border-2 border-black p-6 bg-skin-yellow-200 space-y-4 mb-12">
            <h2 className="font-hero text-xl font-bold">Top opportunities</h2>
            <ol className="space-y-3 font-manrope list-decimal list-inside">
              {topOpportunities.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ol>
          </div>
        )}

        <div className="text-center space-y-6">
          <h2 className="heading-1 normal-case text-2xl sm:text-3xl">
            Want your own assessment?
          </h2>
          <Link
            href="/ai-readiness"
            className="inline-block font-manrope font-semibold text-skin-blue-800 underline"
          >
            Take the free AI readiness assessment →
          </Link>
        </div>
      </section>

      <section id="book" className="py-12 border-t-2 border-black">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl">
              Book a free roadmap review
            </h2>
          </div>
          <div className="border-2 border-black rounded-lg overflow-visible">
            <CalendlyEmbed height={700} />
          </div>
        </div>
      </section>
    </div>
  );
}
