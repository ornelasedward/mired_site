export interface CrmLeadPayload {
  source: string;
  name: string;
  email: string;
  company_size?: string | null;
  challenge?: string | null;
  message?: string | null;
  overall_score?: number | null;
  tier?: string | null;
  tier_label?: string | null;
  share_url?: string | null;
  calendly_url?: string;
}

export async function pushToCrm(payload: CrmLeadPayload): Promise<void> {
  const webhookUrl = Deno.env.get("CRM_WEBHOOK_URL");
  if (!webhookUrl) return;

  const calendlyUrl =
    Deno.env.get("CALENDLY_URL") ??
    "https://calendly.com/mired";

  const body = {
    ...payload,
    calendly_url: payload.calendly_url ?? calendlyUrl,
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(Deno.env.get("CRM_WEBHOOK_SECRET")
          ? { "X-Webhook-Secret": Deno.env.get("CRM_WEBHOOK_SECRET")! }
          : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("CRM webhook failed:", res.status, text);
    }
  } catch (err) {
    console.error("CRM webhook error:", err);
  }
}
