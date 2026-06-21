-- Calendly webhook bookings (dedupe + audit trail)

CREATE TABLE IF NOT EXISTS public.calendly_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  calendly_invitee_uri TEXT NOT NULL UNIQUE,
  calendly_event_uri TEXT,
  webhook_event TEXT NOT NULL,
  name TEXT,
  email TEXT NOT NULL,
  scheduled_at TIMESTAMPTZ,
  event_name TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled',
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.calendly_bookings ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_calendly_bookings_email
  ON public.calendly_bookings (email);

CREATE INDEX IF NOT EXISTS idx_calendly_bookings_scheduled_at
  ON public.calendly_bookings (scheduled_at DESC);
