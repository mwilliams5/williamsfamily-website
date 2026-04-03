import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-server";
import { supabase } from "@/lib/supabase";

export const config = { api: { bodyParser: false } };

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("photo") as File | null;
    const uploader_name = (formData.get("uploader_name") as string)?.trim();
    const caption = (formData.get("caption") as string)?.trim() || null;
    const event = (formData.get("event") as string)?.trim() || null;

    if (!file || !uploader_name) {
      return NextResponse.json({ error: "Photo and your name are required." }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Only JPEG, PNG, GIF, and WebP images are allowed." }, { status: 400 });
    }
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: "Photo must be under 10 MB." }, { status: 400 });
    }

    const ext = file.name.split(".").pop() ?? "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const storagePath = `pending/${filename}`;

    const arrayBuffer = await file.arrayBuffer();
    const { error: uploadError } = await supabaseAdmin.storage
      .from("photo-submissions")
      .upload(storagePath, arrayBuffer, { contentType: file.type });

    if (uploadError) throw uploadError;

    const { error: dbError } = await supabase.from("photo_submissions").insert({
      uploader_name,
      caption,
      event,
      storage_path: storagePath,
      approved: false,
    });

    if (dbError) throw dbError;

    resend.emails.send({
      from: "Williams Family <noreply@williamsfamily.org>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New photo submitted by ${uploader_name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a5f;">New Photo Submission</h2>
          <p><strong>From:</strong> ${uploader_name}</p>
          ${caption ? `<p><strong>Caption:</strong> ${caption}</p>` : ""}
          ${event ? `<p><strong>Event:</strong> ${event}</p>` : ""}
          <a href="https://www.williamsfamily.org/admin" style="display:inline-block; background:#1e3a5f; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-family:Arial,sans-serif; font-size:14px; margin-top:16px;">
            Review in Admin →
          </a>
        </div>
      `,
    }).catch((err) => console.error("Resend error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Photo submit error:", err);
    return NextResponse.json({ error: "Failed to upload photo. Please try again." }, { status: 500 });
  }
}
