import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API Route Hit, Body:", body);

    const { name, business, email } = body;

    const { data, error } = await resend.emails.send({
      from: "Audit Request <onboarding@resend.dev>",
      to: "aizzy127@gmail.com",
      subject: `New Audit Request: ${business}`,
      text: `Name: ${name}\nBusiness: ${business}\nEmail: ${email}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      // Return JSON even on error
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Catch Error:", error);
    // Return JSON even on catch
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
