import Link from "next/link";
import { cn } from "@/lib/utils";
import { LEADS } from "@/lib/site";

interface ContactFormFallbackProps {
  variant?: "default" | "dark";
}

export default function ContactFormFallback({
  variant = "default",
}: ContactFormFallbackProps) {
  const isDark = variant === "dark";

  return (
    <div className="mt-8 sm:mt-10 text-center space-y-4">
      <p
        className={cn(
          "font-manrope text-base",
          isDark ? "text-white/80" : "text-black/70",
        )}
      >
        Or if you prefer, contact us here.
      </p>
      <Link
        href={LEADS.contactMessagePath}
        className={cn(
          "inline-flex items-center justify-center font-manrope font-semibold text-sm sm:text-base px-8 h-12 border-2 border-black transition-colors",
          isDark
            ? "bg-white text-black hover:bg-white/90"
            : "bg-skin-lavender text-black hover:bg-skin-pink-200",
        )}
      >
        Send us a message
      </Link>
    </div>
  );
}
