-- Lead generation: contact form extensions, AI readiness assessments, nurture queue

ALTER TABLE public.quote_requests
  ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'contact_form',
  ADD COLUMN IF NOT EXISTS company_size TEXT,
  ADD COLUMN IF NOT EXISTS challenge TEXT;

CREATE TABLE IF NOT EXISTS public.ai_readiness_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  company_size TEXT,
  overall_score INTEGER NOT NULL,
  tier TEXT NOT NULL,
  tier_label TEXT NOT NULL,
  dimension_scores JSONB NOT NULL,
  top_opportunities JSONB NOT NULL DEFAULT '[]'::jsonb,
  summary TEXT NOT NULL,
  answers JSONB NOT NULL,
  share_token TEXT NOT NULL UNIQUE DEFAULT replace(gen_random_uuid()::text, '-', ''),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_readiness_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit ai readiness assessments"
ON public.ai_readiness_assessments
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public SELECT; results fetched via public-ai-readiness edge function by share_token.

CREATE TABLE IF NOT EXISTS public.lead_nurture_queue (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  lead_type TEXT NOT NULL,
  lead_id UUID,
  sequence_step INTEGER NOT NULL,
  scheduled_at TIMESTAMPTZ NOT NULL,
  sent_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'pending',
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.lead_nurture_queue ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_ai_readiness_share_token
  ON public.ai_readiness_assessments (share_token);

CREATE INDEX IF NOT EXISTS idx_ai_readiness_created_at
  ON public.ai_readiness_assessments (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_nurture_pending
  ON public.lead_nurture_queue (scheduled_at)
  WHERE status = 'pending';

CREATE INDEX IF NOT EXISTS idx_quote_requests_source
  ON public.quote_requests (source);
