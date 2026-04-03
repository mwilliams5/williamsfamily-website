import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_session", process.env.ADMIN_SECRET!, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // No maxAge = session cookie; add maxAge: 60 * 60 * 24 * 7 for 7-day persistence
  });
  return response;
}
