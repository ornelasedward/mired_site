import { Metadata } from "next";
import AiReadinessQuiz from "@/components/ai-readiness/AiReadinessQuiz";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment",
  description:
    "Score your organization's AI readiness in 5 minutes. Get a personalized gap analysis and recommended next steps — free, instant results.",
};

export default function AiReadinessPage() {
  return (
    <div>
      <section className="bg-skin-lavender border-b-2 border-black py-12 sm:py-16">
        <div className="container max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800">
            Free · 5 minutes · Instant results
          </p>
          <h1 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl">
            Is your organization AI ready?
          </h1>
          <p className="font-manrope text-lg text-black/80 max-w-2xl mx-auto">
            Answer 12 targeted questions across your stack, use cases, team, and
            timeline. Get a personalized score and roadmap — then book a free call
            to walk through it with us.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl mx-auto">
          <AiReadinessQuiz />
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
