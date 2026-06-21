// Shared Mired branding for outbound email signatures and footers.

export const BRAND = {
  tagline: "AI Integration & Custom Software",
  phone: "(575) 513-6238",
  phoneLink: "tel:+15755136238",
  email: "contact@mired.io",
  url: "https://mired.io",
  location: "Austin, TX",
} as const;

/** Plain-text signature appended to admin replies / compose. */
export const emailSignatureText = `--
mired.io
${BRAND.tagline}
${BRAND.phone} · ${BRAND.email}
${BRAND.location}`;

/** HTML signature for admin replies / compose. */
export const emailSignatureHtml = `
<p style="margin-top:24px;color:#666;font-size:13px;line-height:1.6;border-top:1px solid #eee;padding-top:12px;">
  <a href="${BRAND.url}" style="color:#222;text-decoration:none;">mired.io</a><br/>
  ${BRAND.tagline}<br/>
  <a href="${BRAND.phoneLink}" style="color:#666;text-decoration:none;">${BRAND.phone}</a> ·
  <a href="mailto:${BRAND.email}" style="color:#666;text-decoration:none;">${BRAND.email}</a><br/>
  ${BRAND.location}
</p>`;

/** HTML footer block for transactional emails (invoices, receipts, reminders). */
export const emailFooterHtml = emailSignatureHtml;

/** Plain-text footer for simple emails. */
export const emailFooterText = `mired.io
${BRAND.tagline}
${BRAND.phone} · ${BRAND.email}
${BRAND.location}`;
