"use client";
import CustomButton from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { COMPANY_SIZE_OPTIONS, LEADS, SITE } from "@/lib/site";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookCallSection from "@/components/leads/BookCallSection";
import Link from "next/link";

interface ContactFormProps {
  source?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ source = "contact_form" }) => {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [companySize, setCompanySize] = useState("");
  const [formLoadTime] = useState(() => Date.now().toString());
  const useSupabase = isSupabaseConfigured;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("_honeypot") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const challenge = (form.elements.namedItem("challenge") as HTMLInputElement).value.trim();
    const company_size = companySize.trim();

    if (honeypot) {
      setShowModal(true);
      form.reset();
      return;
    }

    if (Date.now() - parseInt(formLoadTime, 10) < 3000) {
      setShowModal(true);
      form.reset();
      return;
    }

    if (!name || !email || !company_size) {
      toast.error("Name, email, and company size are required.");
      return;
    }

    setSubmitting(true);
    try {
      if (useSupabase) {
        const { data: result, error } = await supabase.functions.invoke("send-quote-request", {
          body: { name, email, company_size, challenge: challenge || null, source },
        });
        if (error || !result?.success) {
          throw new Error(error?.message || result?.error || "Submission failed");
        }
      } else {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company_size,
            challenge,
            source,
            _honeypot: honeypot,
            _timestamp: formLoadTime,
          }),
        });
        if (!response.ok) {
          throw new Error(await response.text());
        }
      }

      setShowModal(true);
      form.reset();
      setCompanySize("");
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Something went wrong";
      toast.error(`Couldn't send your message: ${msg}`);
      console.error("Contact form error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="relative z-50">
      <section className="bg-skin-yellow-200 border-b-2 border-black py-8">
        <div className="container max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800">
            Free · 5 minutes · Instant score
          </p>
          <h2 className="heading-1 normal-case text-2xl sm:text-3xl">
            Not ready to book? Start with the assessment.
          </h2>
          <p className="font-manrope text-black/80">
            Answer 12 questions, get your AI readiness score and personalized
            roadmap — then book a call to walk through it.
          </p>
          <Link
            href={LEADS.aiReadinessPath}
            className="inline-block font-manrope font-bold text-skin-blue-800 underline underline-offset-4 hover:text-black text-lg"
          >
            Take the free AI readiness assessment →
          </Link>
        </div>
      </section>
      <BookCallSection id="book" />

      <div className="py-16 sm:py-20 bg-skin-lavender border-b-2 border-black">
        <div className="container max-w-xl mx-auto">
          <div className="text-center mb-8 space-y-3">
            <h2 className="heading-1 normal-case text-2xl sm:text-3xl">
              Prefer to leave a message?
            </h2>
            <p className="font-manrope text-black/80">
              Short form — we&apos;ll reply within a few hours. Or{" "}
              <a href="#book" className="text-skin-blue-800 underline font-semibold">
                book a call above
              </a>{" "}
              for an instant time slot.
            </p>
          </div>

          <form
            className="grid grid-cols-1 gap-4 border-2 border-black p-6 sm:p-8 bg-white"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_honeypot"
              style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              tabIndex={-1}
              autoComplete="off"
            />
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-none sm:px-6 h-12"
            />
            <Input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="rounded-none sm:px-6 h-12"
            />
            <Select value={companySize} onValueChange={setCompanySize} required>
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
            <Input
              type="text"
              name="challenge"
              placeholder="Biggest AI challenge? (optional)"
              className="rounded-none sm:px-6 h-12"
            />
            <CustomButton type="submit" disabled={submitting} className="w-full mt-2">
              {submitting ? "Sending…" : "Send Message"}
            </CustomButton>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 font-manrope text-sm">
            <a href={SITE.phoneLink} className="hover:text-skin-blue-800">
              {SITE.phone}
            </a>
            <span className="hidden sm:inline text-black/30">·</span>
            <a href={`mailto:${SITE.email}`} className="hover:text-skin-blue-800">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-black">
            <h2 className="text-2xl font-bold mb-4 font-hero">You&apos;re on our list!</h2>
            <p className="mb-4 font-manrope text-black/80">
              Check your inbox — we sent a confirmation with next steps. For the
              fastest path,{" "}
              <a href="#book" className="text-skin-blue-800 underline font-semibold" onClick={closeModal}>
                pick a time on our calendar
              </a>
              .
            </p>
            <button
              className="bg-skin-yellow-200 text-black font-bold py-2 px-4 rounded border-2 border-black hover:bg-skin-yellow-600 transition-colors w-full font-manrope"
              onClick={closeModal}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
