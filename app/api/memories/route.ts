import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name, memory, timeframe } = await req.json();

    if (!name?.trim() || !memory?.trim()) {
      return NextResponse.json(
        { error: "Name and memory are required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("memories").insert({
      name: name.trim(),
      memory: memory.trim(),
      timeframe: timeframe?.trim() || null,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error submitting memory:", err);
    return NextResponse.json(
      { error: "Failed to submit memory. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ memories: data });
  } catch (err) {
    console.error("Error fetching memories:", err);
    return NextResponse.json(
      { error: "Failed to fetch memories." },
      { status: 500 }
    );
  }
}
