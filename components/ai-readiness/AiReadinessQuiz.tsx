"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { READINESS_QUESTIONS } from "@/lib/ai-readiness/questions";
import { scoreReadiness } from "@/lib/ai-readiness/score";
import type { ReadinessAnswers, ReadinessResult } from "@/lib/ai-readiness/types";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { COMPANY_SIZE_OPTIONS } from "@/lib/site";
import CustomButton from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CalendlyEmbed from "@/components/leads/CalendlyEmbed";
import Link from "next/link";
import { toast } from "sonner";

type Step = "quiz" | "email" | "results";

const tierColors: Record<string, string> = {
  exploring: "bg-skin-yellow-200",
  building: "bg-skin-lavender",
  ready: "bg-skin-pink-200",
  advanced: "bg-customGreen/30",
};

export default function AiReadinessQuiz({ calendlyUrl }: { calendlyUrl: string }) {
  const [step, setStep] = useState<Step>("quiz");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ReadinessAnswers>({});
  const [result, setResult] = useState<ReadinessResult | null>(null);
  const [shareToken, setShareToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: "", email: "", company_size: "" });

  const currentQuestion = READINESS_QUESTIONS[questionIndex];
  const progress = ((questionIndex + (step !== "quiz" ? 1 : 0)) / READINESS_QUESTIONS.length) * 100;

  const handleAnswer = (score: number) => {
    const next = { ...answers, [currentQuestion.id]: score };
    setAnswers(next);

    if (questionIndex < READINESS_QUESTIONS.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      setResult(scoreReadiness(next));
      setStep("email");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!result) return;
    if (!emailForm.name.trim() || !emailForm.email.trim() || !emailForm.company_size) {
      toast.error("Name, email, and company size are required.");
      return;
    }

    setSubmitting(true);
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.functions.invoke("submit-ai-readiness", {
          body: {
            name: emailForm.name.trim(),
            email: emailForm.email.trim(),
            company_size: emailForm.company_size,
            answers,
            result,
          },
        });
        if (error || !data?.success) {
          throw new Error(error?.message || data?.error || "Submission failed");
        }
        setShareToken(data.share_token ?? null);
      }
      setStep("results");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(`Couldn't save your results: ${msg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh]">
      {step === "quiz" && (
        <div className="space-y-8">
          <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-skin-blue-800 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm font-manrope text-black/60">
            Question {questionIndex + 1} of {READINESS_QUESTIONS.length}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="heading-1 normal-case text-2xl sm:text-3xl md:text-4xl">
                {currentQuestion.question}
              </h2>
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleAnswer(option.score)}
                    className="text-left border-2 border-black px-5 py-4 font-manrope hover:bg-skin-lavender transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {questionIndex > 0 && (
            <button
              type="button"
              onClick={() => setQuestionIndex((i) => i - 1)}
              className="font-manrope text-sm text-black/60 hover:text-black underline"
            >
              ← Previous question
            </button>
          )}
        </div>
      )}

      {step === "email" && result && (
        <div className="max-w-lg mx-auto space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm font-manrope uppercase tracking-wider text-skin-blue-800">
              Your score is ready
            </p>
            <div
              className={`inline-block text-6xl font-hero font-extrabold px-8 py-4 border-2 border-black ${tierColors[result.tier]}`}
            >
              {result.overallScore}
            </div>
            <p className="font-manrope text-lg">{result.tierLabel}</p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4 border-2 border-black p-6 bg-white">
            <p className="font-manrope text-black/80">
              Enter your details to unlock your full report — dimension breakdown,
              gap analysis, and recommended next steps.
            </p>
            <Input
              name="name"
              placeholder="Your name"
              required
              value={emailForm.name}
              onChange={(e) => setEmailForm((f) => ({ ...f, name: e.target.value }))}
              className="rounded-none h-12"
            />
            <Input
              type="email"
              name="email"
              placeholder="Work email"
              required
              value={emailForm.email}
              onChange={(e) => setEmailForm((f) => ({ ...f, email: e.target.value }))}
              className="rounded-none h-12"
            />
            <Select
              value={emailForm.company_size}
              onValueChange={(v) => setEmailForm((f) => ({ ...f, company_size: v }))}
              required
            >
              <SelectTrigger className="rounded-none h-12">
                <SelectValue placeholder="Company size" />
              </SelectTrigger>
              <SelectContent>
                {COMPANY_SIZE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CustomButton type="submit" disabled={submitting} className="w-full">
              {submitting ? "Saving…" : "Get My Full Report"}
            </CustomButton>
            <p className="text-xs font-manrope text-black/50 text-center">
              Free. No credit card. Instant results.
            </p>
          </form>
        </div>
      )}

      {step === "results" && result && (
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm font-manrope uppercase tracking-wider text-skin-blue-800">
              Your AI Readiness Score
            </p>
            <div
              className={`inline-block text-7xl font-hero font-extrabold px-10 py-5 border-2 border-black ${tierColors[result.tier]}`}
            >
              {result.overallScore}
            </div>
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl">
              {result.tierLabel}
            </h2>
            <p className="font-manrope text-lg text-black/80 max-w-2xl mx-auto">
              {result.summary}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {result.dimensionScores.map((dim) => (
              <div key={dim.dimension} className="border-2 border-black p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-hero font-bold">{dim.label}</h3>
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

          <div className="max-w-2xl mx-auto border-2 border-black p-6 bg-skin-yellow-200 space-y-4">
            <h3 className="font-hero text-xl font-bold">Your top 3 opportunities</h3>
            <ol className="space-y-3 font-manrope list-decimal list-inside">
              {result.topOpportunities.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ol>
          </div>

          <div id="book" className="scroll-mt-24 space-y-6">
            <div className="text-center space-y-3">
              <h3 className="heading-1 normal-case text-2xl sm:text-3xl">
                Walk through your roadmap with us
              </h3>
              <p className="font-manrope text-black/70 max-w-xl mx-auto">
                Book a free 15-minute call — we&apos;ll review your score, answer
                questions, and tell you honestly if we&apos;re the right fit.
              </p>
            </div>
            <div className="max-w-4xl mx-auto border-2 border-black rounded-lg overflow-visible">
              <CalendlyEmbed url={calendlyUrl} height={700} />
            </div>
          </div>

          {shareToken && (
            <p className="text-center font-manrope text-sm text-black/60">
              Share your results:{" "}
              <Link
                href={`/ai-readiness/results/${shareToken}`}
                className="text-skin-blue-800 underline"
              >
                mired.io/ai-readiness/results/{shareToken}
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
