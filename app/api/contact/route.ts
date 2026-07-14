import { NextRequest, NextResponse } from "next/server";

const GHL_LOCATION_ID = "0opRxfrvirYWX8LXL4Rx";
const GHL_API_KEY = "pit-32ca9103-cbad-49d8-b8c7-a6a26fd866f6";

const GHL_HEADERS = {
  "Authorization": `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  "Version": "2021-07-28",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, smsConsentTransactional, smsConsentMarketing } = body;

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const tags = ["website-contact"];
  if (smsConsentTransactional) tags.push("sms-consent-transactional");
  if (smsConsentMarketing) tags.push("sms-consent-marketing");

  const contactPayload = {
    locationId: GHL_LOCATION_ID,
    firstName,
    lastName,
    email,
    phone,
    tags,
    source: "Website Contact Form",
  };

  const createRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: GHL_HEADERS,
    body: JSON.stringify(contactPayload),
  });

  if (createRes.ok) {
    return NextResponse.json({ success: true });
  }

  const createData = await createRes.json().catch(() => ({}));

  // Duplicate contact — update the existing one with latest info + tags
  if (createRes.status === 400 && createData?.meta?.contactId) {
    const contactId = createData.meta.contactId;

    const updateRes = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}`, {
      method: "PUT",
      headers: GHL_HEADERS,
      body: JSON.stringify({ firstName, lastName, phone, tags }),
    });

    if (updateRes.ok) {
      return NextResponse.json({ success: true });
    }

    const updateErr = await updateRes.text();
    console.error("GHL update error:", updateRes.status, updateErr);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }

  console.error("GHL create error:", createRes.status, createData);
  return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
}
