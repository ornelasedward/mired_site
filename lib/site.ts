export const SITE = {
  name: "Mired",
  tagline: "AI Integration & Custom Software",
  phone: "(575) 513-6238",
  phoneLink: "tel:+15755136238",
  email: "contact@mired.io",
  url: "https://mired.io",
};

const DEFAULT_CALENDLY_URL = "https://calendly.com/mired";

/** Read at request time on the server — do not rely on this in client bundles. */
export function getCalendlyUrl(): string {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return url || DEFAULT_CALENDLY_URL;
}

export const LEADS = {
  calendlyUrl: getCalendlyUrl(),
  contactBookPath: "/contact#book",
  contactMessagePath: "/contact#message",
  aiReadinessPath: "/ai-readiness",
};

export const COMPANY_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
] as const;
