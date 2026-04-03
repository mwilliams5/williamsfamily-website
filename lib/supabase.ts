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

export interface RSVP {
  id: string;
  created_at: string;
  name: string;
  attending_count: number;
  email: string | null;
  bringing_dish: string | null;
  notes: string | null;
}

export interface RecipeSubmission {
  id: string;
  created_at: string;
  contributor: string;
  recipe_name: string;
  category: string;
  ingredients: string;
  instructions: string;
  approved: boolean;
}

export interface PhotoSubmission {
  id: string;
  created_at: string;
  uploader_name: string;
  caption: string | null;
  event: string | null;
  storage_path: string;
  approved: boolean;
}
