# Calendly setup for Mired

## What each credential is for

| Credential | Where to store | Needed now? |
|---|---|---|
| **Event URL** (`NEXT_PUBLIC_CALENDLY_URL`) | `.env.local` | **Yes** — powers the embed widget |
| **Webhook signing key** | Supabase Edge Function secrets | **Yes** — verifies booking webhooks |
| **Client ID / Client Secret** | Supabase secrets (optional) | **No** — only for OAuth API flows |

**Do not commit secrets to git.** Never paste the client secret or signing key into tracked files.

---

## 1. Embed (booking widget)

1. In Calendly, open your scheduling page or a specific event type.
2. Copy the public link. Either works:
   - **Profile page** (all events): `https://calendly.com/mired`
   - **Single event**: `https://calendly.com/mired/your-event-slug` — slug must match an event you actually created in Calendly.
3. Add to `.env.local` (and Vercel env vars for production):

```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

4. Restart dev server → test `/contact#book`.

---

## 2. Webhooks (auto-notify when someone books)

### Deploy

```bash
pnpm sb:push
pnpm sb:deploy
```

### Supabase secrets

Dashboard → Project Settings → Edge Functions → Secrets:

```
CALENDLY_WEBHOOK_SIGNING_KEY=<Webhook signing key from OAuth app>
```

### Register the webhook in Calendly

**Webhook URL:**

```
https://gtmveuvvpwfucosokvti.supabase.co/functions/v1/calendly-webhook
```

**Events:** `invitee.created`, `invitee.canceled`

### What happens on booking

1. Lead saved to `calendly_bookings` + `quote_requests` (`source: calendly_booking`)
2. Email notification to `contact@mired.io`
3. Pending nurture emails for that address are cancelled
4. CRM webhook fired if `CRM_WEBHOOK_URL` is set

---

## 3. OAuth Client ID / Secret

Save in a password manager. Not required for embed or webhooks. Used only for future API v2 OAuth flows.
