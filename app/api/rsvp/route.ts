import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, attending_count, email, bringing_dish, notes } = await req.json();

    if (!name?.trim() || !attending_count) {
      return NextResponse.json({ error: "Name and guest count are required." }, { status: 400 });
    }

    const count = parseInt(attending_count, 10);
    if (isNaN(count) || count < 1 || count > 20) {
      return NextResponse.json({ error: "Guest count must be between 1 and 20." }, { status: 400 });
    }

    const { error } = await supabase.from("rsvps").insert({
      name: name.trim(),
      attending_count: count,
      email: email?.trim() || null,
      bringing_dish: bringing_dish?.trim() || null,
      notes: notes?.trim() || null,
    });

    if (error) throw error;

    resend.emails.send({
      from: "Williams Family <noreply@williamsfamily.org>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New RSVP from ${name.trim()} (${count} attending)`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a5f;">New Reunion 2026 RSVP</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Attending:</strong> ${count}</p>
          ${email?.trim() ? `<p><strong>Email:</strong> ${email.trim()}</p>` : ""}
          ${bringing_dish?.trim() ? `<p><strong>Bringing a dish:</strong> ${bringing_dish.trim()}</p>` : ""}
          ${notes?.trim() ? `<p><strong>Notes:</strong> ${notes.trim()}</p>` : ""}
          <a href="https://www.williamsfamily.org/admin" style="display:inline-block; background:#1e3a5f; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-family:Arial,sans-serif; font-size:14px; margin-top:16px;">
            View RSVPs in Admin →
          </a>
        </div>
      `,
    }).catch((err) => console.error("Resend error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("RSVP error:", err);
    return NextResponse.json({ error: "Failed to submit RSVP. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from("rsvps")
    .select("id, name, attending_count, bringing_dish")
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ rsvps: data });
}
