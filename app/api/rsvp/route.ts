import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || !body.name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const record = {
    name: String(body.name).trim(),
    email: String(body.email || "").trim(),
    attending: body.attending === "yes",
    party_size: Number(body.party_size) || 1,
    meal: String(body.meal || ""),
    song_1: String(body.song_1 || "").trim(),
    song_2: String(body.song_2 || "").trim(),
    message: String(body.message || ""),
    created_at: new Date().toISOString(),
  };

  // v1: log to server. When POSTGRES_URL is set, swap this for a real insert.
  console.log("RSVP received:", record);

  return NextResponse.json({ ok: true });
}
