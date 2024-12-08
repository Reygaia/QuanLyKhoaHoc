import {createClient} from "@supabase/supabase-js";

const supabaseURL = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseURL || !supabaseServiceKey ) {
    throw new Error('Missing Supabase environment variables');
}

export const supabaseClient = createClient(supabaseURL, supabaseServiceKey);