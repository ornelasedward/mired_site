"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const FAST_RETRY_MS = 800;
const SLOW_RETRY_MS = 2500;
const FAST_RETRY_LIMIT = 20;
const LOAD_TIMEOUT_MS = 12000;

function embedUrl(
  base: string,
  hostname: string,
  prefill?: { name?: string; email?: string },
): string {
  try {
    const url = new URL(base.startsWith("http") ? base : `https://${base}`);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "ffffff");
    url.searchParams.set("text_color", "000000");
    url.searchParams.set("primary_color", "420FB0");
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", hostname);
    if (prefill?.name) url.searchParams.set("name", prefill.name);
    if (prefill?.email) url.searchParams.set("email", prefill.email);
    return url.toString();
  } catch {
    console.error("Invalid Calendly URL:", base);
    return base;
  }
}

interface CalendlyEmbedProps {
  /** Pass from a Server Component so Vercel env vars apply without a rebuild. */
  url: string;
  height?: number;
  className?: string;
  prefill?: { name?: string; email?: string };
}

export default function CalendlyEmbed({
  url,
  height = 700,
  className,
  prefill,
}: CalendlyEmbedProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const bookingUrl = url.startsWith("http") ? url : `https://${url}`;
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showFallbackLink, setShowFallbackLink] = useState(false);
  const retryCount = useRef(0);
  const retryTimer = useRef<number | undefined>(undefined);
  const loadTimer = useRef<number | undefined>(undefined);
  const mountGeneration = useRef(0);
  const loadedRef = useRef(false);

  const buildSrc = useCallback(() => {
    if (typeof window === "undefined") return null;
    return embedUrl(url, window.location.hostname, prefill);
  }, [url, prefill]);

  const clearTimers = useCallback(() => {
    if (retryTimer.current) window.clearTimeout(retryTimer.current);
    if (loadTimer.current) window.clearTimeout(loadTimer.current);
  }, []);

  const refreshIframe = useCallback(() => {
    clearTimers();
    loadedRef.current = false;
    setLoaded(false);
    setIframeKey((k) => k + 1);
    setIframeSrc(buildSrc());
  }, [buildSrc, clearTimers]);

  const armLoadTimeout = useCallback(() => {
    if (loadTimer.current) window.clearTimeout(loadTimer.current);
    loadTimer.current = window.setTimeout(() => {
      if (!loadedRef.current) {
        setShowFallbackLink(true);
        retryCount.current += 1;
        const delay =
          retryCount.current <= FAST_RETRY_LIMIT ? FAST_RETRY_MS : SLOW_RETRY_MS;
        retryTimer.current = window.setTimeout(refreshIframe, delay);
      }
    }, LOAD_TIMEOUT_MS);
  }, [refreshIframe]);

  const scheduleRetry = useCallback(() => {
    if (loadedRef.current) return;
    clearTimers();
    retryCount.current += 1;
    const delay =
      retryCount.current <= FAST_RETRY_LIMIT ? FAST_RETRY_MS : SLOW_RETRY_MS;
    retryTimer.current = window.setTimeout(refreshIframe, delay);
  }, [clearTimers, refreshIframe]);

  useEffect(() => {
    const generation = ++mountGeneration.current;
    retryCount.current = 0;
    loadedRef.current = false;
    setLoaded(false);
    setShowFallbackLink(false);
    refreshIframe();
    armLoadTimeout();

    const parent = containerRef.current;
    const observer =
      parent &&
      new IntersectionObserver(
        (entries) => {
          if (generation !== mountGeneration.current || loadedRef.current) return;
          if (entries.some((entry) => entry.isIntersecting)) {
            refreshIframe();
            armLoadTimeout();
          }
        },
        { rootMargin: "320px 0px" },
      );

    if (parent && observer) observer.observe(parent);

    const onPageShow = () => {
      if (!loadedRef.current) {
        refreshIframe();
        armLoadTimeout();
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && !loadedRef.current) {
        refreshIframe();
        armLoadTimeout();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearTimers();
      observer?.disconnect();
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [url, pathname, prefill?.name, prefill?.email, refreshIframe, armLoadTimeout, clearTimers]);

  const handleLoad = () => {
    loadedRef.current = true;
    setLoaded(true);
    setShowFallbackLink(false);
    clearTimers();
  };

  const handleError = () => {
    loadedRef.current = false;
    setLoaded(false);
    setShowFallbackLink(true);
    scheduleRetry();
  };

  return (
    <div className="relative w-full">
      {!loaded && (
        <p
          className="absolute inset-x-0 top-4 z-10 text-center font-manrope text-sm text-black/50 pointer-events-none"
          aria-live="polite"
        >
          Loading calendar…
        </p>
      )}
      <div
        ref={containerRef}
        className={`w-full ${className ?? ""}`}
        style={{ minWidth: "320px", height: `${height}px` }}
      >
        {iframeSrc && (
          <iframe
            key={`${pathname}-${iframeKey}`}
            src={iframeSrc}
            title="Book a call with Mired"
            width="100%"
            height={height}
            frameBorder={0}
            className="block w-full border-0"
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
      {showFallbackLink && !loaded && (
        <p className="mt-4 text-center font-manrope text-sm text-black/70">
          Calendar taking a moment?{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-skin-blue-800 underline underline-offset-2"
          >
            Open Calendly to book a time →
          </a>
        </p>
      )}
    </div>
  );
}
