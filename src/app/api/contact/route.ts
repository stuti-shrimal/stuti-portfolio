import { NextResponse } from "next/server";
import { site } from "@/content/site";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string; message?: string };
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const mailto = `mailto:${site.person.email}?subject=${encodeURIComponent(`Portfolio note from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
  return NextResponse.json({ ok: true, mailto });
}
