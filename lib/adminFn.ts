import { supabase } from "@/integrations/supabase/client";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabaseEnv";

export const fnUrl = (path: string, params?: Record<string, string>) => {
  const u = new URL(`${SUPABASE_URL}/functions/v1/${path}`);
  if (params) Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
  return u.toString();
};

export async function callAdminFn<T = unknown>(
  path: string,
  init: RequestInit = {},
  params?: Record<string, string>,
): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("Not signed in");
  const res = await fetch(fnUrl(path, params), {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      Authorization: `Bearer ${token}`,
      apikey: SUPABASE_ANON_KEY,
    },
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error((j as { error?: string })?.error ?? `HTTP ${res.status}`);
    (err as Error & { status?: number }).status = res.status;
    throw err;
  }
  return j as T;
}
