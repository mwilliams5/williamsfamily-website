import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { contributor, recipe_name, category, ingredients, instructions } = await req.json();

    if (!contributor?.trim() || !recipe_name?.trim() || !category?.trim() || !ingredients?.trim() || !instructions?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await supabase.from("recipe_submissions").insert({
      contributor: contributor.trim(),
      recipe_name: recipe_name.trim(),
      category: category.trim(),
      ingredients: ingredients.trim(),
      instructions: instructions.trim(),
      approved: false,
    });

    if (error) throw error;

    resend.emails.send({
      from: "Williams Family <noreply@williamsfamily.org>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New recipe submitted: ${recipe_name.trim()} by ${contributor.trim()}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a5f;">New Recipe Submission</h2>
          <p><strong>Recipe:</strong> ${recipe_name.trim()}</p>
          <p><strong>Submitted by:</strong> ${contributor.trim()}</p>
          <p><strong>Category:</strong> ${category.trim()}</p>
          <p><strong>Ingredients:</strong></p>
          <pre style="background:#f9f9f9; padding:12px; border-radius:6px; font-size:13px; white-space:pre-wrap;">${ingredients.trim()}</pre>
          <p><strong>Instructions:</strong></p>
          <pre style="background:#f9f9f9; padding:12px; border-radius:6px; font-size:13px; white-space:pre-wrap;">${instructions.trim()}</pre>
          <a href="https://www.williamsfamily.org/admin" style="display:inline-block; background:#1e3a5f; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-family:Arial,sans-serif; font-size:14px; margin-top:16px;">
            Review in Admin →
          </a>
        </div>
      `,
    }).catch((err) => console.error("Resend error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Recipe submit error:", err);
    return NextResponse.json({ error: "Failed to submit recipe. Please try again." }, { status: 500 });
  }
}
