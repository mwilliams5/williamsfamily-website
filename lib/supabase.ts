import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface Memory {
  id: string;
  created_at: string;
  name: string;
  memory: string;
  timeframe: string | null;
  approved: boolean;
}
