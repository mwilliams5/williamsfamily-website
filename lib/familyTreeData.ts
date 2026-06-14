import { supabase } from "./supabase";

export interface FamilyPerson {
  peck: number;
  name: string;
  nick?: string;
  gen: number;          // 0=roots, 1=Gen1, 2=grandchildren, 3=great, 4=great-great
  born?: number;        // year
  died?: number;        // year
  married?: number;     // year
  divorced?: boolean;
  spouse?: string;
  spousePeck?: number;
  parentPeck?: number;
  notes?: string;
}

interface DbRow {
  peck: number;
  name: string;
  nickname: string | null;
  gen: number | null;
  birth_date: string | null;
  marriage_date: string | null;
  divorced: boolean;
  death_date: string | null;
  step_notes: string | null;
  spouse_name: string | null;
  parent_peck: number | null;
  spouse_peck: number | null;
}

function toYear(iso: string | null): number | undefined {
  if (!iso) return undefined;
  return new Date(iso).getUTCFullYear();
}

function cleanName(raw: string): string {
  return raw.replace(/\s*\([^)]+\)\s*$/, "").trim();
}

function toFamilyPerson(row: DbRow): FamilyPerson {
  return {
    peck:      row.peck,
    name:      cleanName(row.name),
    nick:      row.nickname ?? undefined,
    gen:       row.gen!,
    born:      toYear(row.birth_date),
    died:      toYear(row.death_date),
    married:   toYear(row.marriage_date),
    divorced:  row.divorced || undefined,
    spouse:    row.spouse_name ?? undefined,
    spousePeck: row.spouse_peck ?? undefined,
    parentPeck: row.parent_peck ?? undefined,
    notes:     row.step_notes ?? undefined,
  };
}

export async function fetchFamily(): Promise<FamilyPerson[]> {
  const { data, error } = await supabase
    .from("family_members")
    .select("peck,name,nickname,gen,birth_date,marriage_date,divorced,death_date,step_notes,spouse_name,parent_peck,spouse_peck")
    .not("gen", "is", null)
    .order("peck");

  if (error) throw new Error(`Supabase fetch failed: ${error.message}`);
  return (data as DbRow[]).map(toFamilyPerson);
}
