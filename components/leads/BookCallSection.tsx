import { cn } from "@/lib/utils";
import CalendlyEmbed from "./CalendlyEmbed";
import ContactFormFallback from "./ContactFormFallback";
import Link from "next/link";
import { LEADS } from "@/lib/site";

interface BookCallSectionProps {
  id?: string;
  className?: string;
  variant?: "default" | "compact" | "dark";
  showSubtext?: boolean;
  showContactFallback?: boolean;
  calendlyUrl: string;
}

const variantStyles = {
  default: "bg-white border-b-2 border-black",
  compact: "bg-skin-pink-200 border-b-2 border-black",
  dark: "bg-[#420FB0] text-white border-b-2 border-black",
};

export default function BookCallSection({
  id = "book",
  className,
  variant = "default",
  showSubtext = true,
  showContactFallback = true,
  calendlyUrl,
}: BookCallSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 scroll-mt-24", variantStyles[variant], className)}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 space-y-4">
          <p
            className={cn(
              "text-sm font-manrope font-semibold uppercase tracking-wider",
              isDark ? "text-white/80" : "text-skin-blue-800"
            )}
          >
            Free 15-minute call
          </p>
          <h2
            className={cn(
              "heading-1 normal-case text-3xl sm:text-4xl md:text-5xl",
              isDark && "text-white"
            )}
          >
            Book your AI readiness call
          </h2>
          {showSubtext && (
            <p
              className={cn(
                "text-lg sm:text-xl font-manrope max-w-2xl mx-auto",
                isDark ? "text-white/90" : "text-black/80"
              )}
            >
              Pick a time that works — we&apos;ll map your stack, identify
              high-ROI use cases, and tell you honestly if we&apos;re the right
              fit. No pitch deck, just a straight conversation.
            </p>
          )}
          <p className="font-manrope text-base">
            Not sure where to start?{" "}
            <Link
              href={LEADS.aiReadinessPath}
              className={cn(
                "font-semibold underline underline-offset-2",
                isDark ? "text-white hover:text-white/80" : "text-skin-blue-800 hover:text-black"
              )}
            >
              Take the free AI readiness assessment first →
            </Link>
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-lg border-2 border-black bg-white">
          <CalendlyEmbed url={calendlyUrl} height={700} />
        </div>
        {showContactFallback && <ContactFormFallback variant={isDark ? "dark" : "default"} />}
      </div>
    </section>
  );
}
