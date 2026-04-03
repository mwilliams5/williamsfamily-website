import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";

function isAuthorized(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_session")?.value === process.env.ADMIN_SECRET;
}

export async function GET() {
  if (!isAuthorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ rsvps: data });
}

export async function DELETE(req: Request) {
  if (!isAuthorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  const { error } = await supabase.from("rsvps").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
