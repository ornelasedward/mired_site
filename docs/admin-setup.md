# Admin, email & invoicing setup

This repo includes the admin stack migrated from pretty-potty: **inbound email inbox**, **outbound replies**, **contact form → database**, and **Stripe invoicing**.

## What you get

| Feature | Route | Backend |
|---------|-------|---------|
| Admin inbox | `/admin/inbox` | Supabase + Resend |
| Admin invoices | `/admin/invoices` | Supabase + Stripe |
| Public invoice | `/i/[token]` | Supabase Edge Functions |
| Contact form | `/contact` | `send-quote-request` edge function |

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Link it locally:

```bash
pnpm sb link --project-ref YOUR_PROJECT_REF
```

3. Push the database schema:

```bash
pnpm sb:push
```

4. Deploy edge functions:

```bash
pnpm sb:deploy
```

5. Set secrets (see `supabase/functions/.env.example`):

```bash
supabase secrets set RESEND_API_KEY=re_... RESEND_WEBHOOK_SECRET=whsec_... PUBLIC_SITE_URL=https://mired.io STRIPE_SECRET_KEY=sk_... STRIPE_WEBHOOK_SECRET=whsec_... CRON_SECRET=your-random-string NOTIFY_TO_EMAIL=contact@mired.io
```

## 2. Configure Resend for contact@mired.io

1. Add domain **mired.io** in [Resend → Domains](https://resend.com/domains).
2. Add the DNS records Resend provides (MX, SPF, DKIM).
3. Create a **Receiving** route for `contact@mired.io` (or catch-all `@mired.io`).
4. Add a webhook pointing to:

```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/receive-email
```

Event: `email.received`. Copy the signing secret → `RESEND_WEBHOOK_SECRET`.

## 3. Configure Stripe (for invoicing)

1. Create a Stripe account and get your secret key.
2. Add webhook endpoint:

```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/stripe-webhook
```

Events: `checkout.session.completed`, `payment_intent.succeeded`.

## 4. Frontend env

Copy `.env.example` → `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 5. Admin access

1. In Supabase Dashboard → Authentication → Users, create a user with your email (password or magic link).
2. Your email must be in the `admin_users` table (seeded in migration: `ornelasedward@rocketmail.com`, `contact@mired.io`).
3. Visit `/admin/inbox` and sign in.

## 6. Invoice reminders cron (optional)

Schedule a daily POST to:

```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/invoice-reminders
```

Header: `Authorization: Bearer YOUR_CRON_SECRET`

Use [cron-job.org](https://cron-job.org), GitHub Actions, or Vercel Cron.

## Docs

- [Inbound email](./inbound-email.md)
- [Invoicing](./invoicing.md)
