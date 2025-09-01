// lib/supabase/client.ts
// import { createClient } from "@supabase/supabase-js";
// import type { SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";


// Use environment variables (best practice)
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);




export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey);
}