import { NextRequest, NextResponse } from "next/server";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets";

const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_API_KEY = process.env.GHL_API_KEY;

const GHL_HEADERS = {
  "Authorization": `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  "Version": "2021-07-28",
};

export async function POST(req: NextRequest) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.error("Missing GHL_API_KEY or GHL_LOCATION_ID environment variables.");
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }

  const body = await req.json();
  const { firstName, email, phone, magnetSlug } = body;

  if (!firstName || !email || !magnetSlug) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Look up the guide server-side — the client only ever sends a slug, never
  // the source label, tag, or PDF path, so those can't be spoofed.
  const magnet = getLeadMagnetBySlug(magnetSlug);
  if (!magnet) {
    return NextResponse.json({ error: "Unknown guide requested." }, { status: 400 });
  }

  const tags = ["heypearl", "pdf-lead-magnet", magnet.ghlTag];

  const contactPayload: Record<string, unknown> = {
    locationId: GHL_LOCATION_ID,
    firstName,
    email,
    tags,
    source: magnet.ghlSource,
  };
  if (phone) contactPayload.phone = phone;

  const createRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: GHL_HEADERS,
    body: JSON.stringify(contactPayload),
  });

  if (createRes.ok) {
    return NextResponse.json({ success: true, pdfUrl: magnet.pdfPath, title: magnet.title });
  }

  const createData = await createRes.json().catch(() => ({}));

  // Duplicate contact — update the existing one with the new guide's tag/source
  if (createRes.status === 400 && createData?.meta?.contactId) {
    const contactId = createData.meta.contactId;

    const updateRes = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}`, {
      method: "PUT",
      headers: GHL_HEADERS,
      body: JSON.stringify({ firstName, tags, source: magnet.ghlSource }),
    });

    if (updateRes.ok) {
      return NextResponse.json({ success: true, pdfUrl: magnet.pdfPath, title: magnet.title });
    }

    const updateErr = await updateRes.text();
    console.error("GHL update error:", updateRes.status, updateErr);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }

  console.error("GHL create error:", createRes.status, createData);
  return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
}
