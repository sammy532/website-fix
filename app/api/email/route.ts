import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL;

  try {
    resend.emails.send({
      from: myEmail as string,
      reply_to: email as string,
      to: myEmail as string,
      subject: `Message from ${name} (${email})`,
      html: `Message content: ${message}`,
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error found", err);
    throw err;
  }
}
