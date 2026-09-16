import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

/** Safe client: never crash the whole site if env vars are missing on Vercel. */
function makeClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Dummy URL satisfies createClient; real calls will fail softly in e-learning only.
    return createClient('https://placeholder.supabase.co', 'public-anon-key-placeholder', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}

export const supabase = makeClient();
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
