import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      approved: false,
    });

    if (error) throw error;

    // Send email notification — non-blocking, don't fail the request if this errors
    resend.emails.send({
      from: "Williams Family <noreply@williamsfamily.org>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New memory submitted by ${name.trim()}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a5f;">New Family Memory Submitted</h2>
          <p><strong>From:</strong> ${name.trim()}</p>
          ${timeframe?.trim() ? `<p><strong>When:</strong> ${timeframe.trim()}</p>` : ""}
          <blockquote style="border-left: 4px solid #d4a84b; padding-left: 16px; color: #444; font-style: italic; margin: 16px 0;">
            ${memory.trim()}
          </blockquote>
          <a href="https://www.williamsfamily.org/admin" style="display:inline-block; background:#1e3a5f; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-family:Arial,sans-serif; font-size:14px; margin-top:16px;">
            Review in Admin →
          </a>
        </div>
      `,
    }).catch((err) => console.error("Resend error:", err));

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
