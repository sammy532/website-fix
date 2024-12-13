import { NextResponse } from "next/server";
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("resend: ", resend)

export async function POST(request: Request) {
  const { email, name, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'support@travenue.org',
      to: ['support@travenue.org'],
      subject: `Message from ${name} (${email})`,
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      console.log("error: ", error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("error: ", error)
    return Response.json({ error }, { status: 500 });
  }
}
