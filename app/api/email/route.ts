import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";


import Mail from 'nodemailer/lib/mailer';

export async function POST(request: Request) {
  const { email, name, message} = await request.json();

  const password = process.env.NEXT_PUBLIC_MY_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: password,
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: myEmail,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: `Message content: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    throw err;
  }
}
