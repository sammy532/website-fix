import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, message } = await request.json();
  console.log("email: ", email)
  try {
    const { data, error } = await resend.emails.send({
      from: 'blaga.davidova@gmail.com',
      to: 'blaga.davidova@gmail.com',
      subject: 'Hello world',
      react: EmailTemplate({ name: 'John', email: "some email" , message: "some message" }),
    });

    if (error) {
      console.log("error: ", error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
