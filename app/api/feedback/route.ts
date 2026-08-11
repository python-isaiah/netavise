import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API Route Hit, Body:", body);

    // Destructure all fields sent from the 5-step diagnostic modal
    const { 
      name, 
      business, 
      email, 
      phone, 
      businessType, 
      monthlyVolume, 
      currentWebsiteStatus, 
      mainPainPoint, 
      customNotes 
    } = body;

    // Format all responses into a professional text email layout
    const formattedEmailText = `
New Netavise Audit Request! 🚀

--- PROSPECT DETAILS ---
• Name: ${name}
• Business Name: ${business}
• Email: ${email}
• Mobile Phone: ${phone || "Not provided"}

--- 5-STEP DIAGNOSTIC ANSWERS ---
1. Business Type: ${businessType || "N/A"}
2. Monthly Customer Volume: ${monthlyVolume || "N/A"}
3. Current Website & Tech Status: ${currentWebsiteStatus || "N/A"}
4. Core Operational Bottleneck: ${mainPainPoint || "N/A"}

--- CUSTOM GOALS & NOTES ---
${customNotes || "No custom notes provided."}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: "Netavise Audit <onboarding@resend.dev>",
      to: "aizzy127@gmail.com",
      subject: `New Audit Request: ${business} (${businessType})`,
      text: formattedEmailText,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Catch Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}