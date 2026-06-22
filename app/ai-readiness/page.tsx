import { Metadata } from "next";
import AiReadinessQuiz from "@/components/ai-readiness/AiReadinessQuiz";
import { getCalendlyUrl } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment",
  description:
    "Score your organization's AI readiness in 5 minutes. Get a personalized gap analysis and recommended next steps — free, instant results.",
};

export default function AiReadinessPage() {
  return (
    <div>
      <section className="bg-skin-lavender border-b-2 border-black py-8 sm:py-10">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-6 sm:mb-8">
            <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800">
              Free · 5 minutes · Instant results
            </p>
            <h1 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl">
              Is your organization AI ready?
            </h1>
          </div>
          <AiReadinessQuiz calendlyUrl={getCalendlyUrl()} />
        </div>
      </section>

      <section className="py-8 border-t-2 border-black text-center">
        <p className="font-manrope text-sm text-black/60">
          Prefer to talk first?{" "}
          <Link href="/contact#book" className="text-skin-blue-800 underline">
            Book a free AI readiness call
          </Link>
        </p>
      </section>
    </div>
  );
}
