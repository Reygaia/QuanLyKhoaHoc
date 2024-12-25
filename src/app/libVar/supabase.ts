import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
}

export const supabaseClient = createClient(supabaseURL, supabaseServiceKey, {
      auth: {
            persistSession: true,
            storage: typeof window !== "undefined" ? localStorage : undefined, // For server-side, provide a different storage mechanism if needed
      },
});
