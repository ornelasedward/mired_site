import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabaseEnv";

// Placeholder values allow the app to build when env vars are not set locally.
const url = SUPABASE_URL || "https://placeholder.supabase.co";
const key = SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
