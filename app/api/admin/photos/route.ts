import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabase-server";

function isAuthorized(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_session")?.value === process.env.ADMIN_SECRET;
}

export async function GET() {
  if (!isAuthorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("photo_submissions")
    .select("*")
    .eq("approved", false)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Generate short-lived signed URLs for each photo
  const photosWithUrls = await Promise.all(
    (data ?? []).map(async (photo) => {
      const { data: urlData } = await supabaseAdmin.storage
        .from("photo-submissions")
        .createSignedUrl(photo.storage_path, 60 * 60); // 1 hour
      return { ...photo, signed_url: urlData?.signedUrl ?? null };
    })
  );

  return NextResponse.json({ photos: photosWithUrls });
}

export async function PATCH(req: Request) {
  if (!isAuthorized()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, action, storage_path } = await req.json();
  if (!id || !["approve", "delete"].includes(action)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (action === "approve") {
    // Move file from pending/ to approved/ in storage
    if (storage_path) {
      const newPath = storage_path.replace("pending/", "approved/");
      await supabaseAdmin.storage.from("photo-submissions").move(storage_path, newPath);
      await supabase.from("photo_submissions").update({ approved: true, storage_path: newPath }).eq("id", id);
    } else {
      await supabase.from("photo_submissions").update({ approved: true }).eq("id", id);
    }
  } else {
    // Delete from storage and DB
    if (storage_path) {
      await supabaseAdmin.storage.from("photo-submissions").remove([storage_path]);
    }
    await supabase.from("photo_submissions").delete().eq("id", id);
  }

  return NextResponse.json({ success: true });
}
