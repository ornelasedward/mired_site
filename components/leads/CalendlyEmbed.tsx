"use client";

import { useEffect, useRef } from "react";
import { LEADS } from "@/lib/site";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );

    if (existing) {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Calendly script failed")));
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed"));
    document.head.appendChild(script);
  });
}

function embedUrl(base: string): string {
  const url = new URL(base.startsWith("http") ? base : `https://${base}`);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "ffffff");
  url.searchParams.set("text_color", "000000");
  url.searchParams.set("primary_color", "420FB0");
  return url.toString();
}

interface CalendlyEmbedProps {
  url?: string;
  height?: number;
  className?: string;
}

export default function CalendlyEmbed({
  url,
  height = 700,
  className,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = embedUrl(url ?? LEADS.calendlyUrl);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) return;
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        });
      })
      .catch((err) => console.error("Calendly embed error:", err));

    return () => {
      cancelled = true;
    };
  }, [calendlyUrl]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget w-full ${className ?? ""}`}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
