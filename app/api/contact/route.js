import { createContactEmailTemplate } from "@/utils/emailTemplate";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          errors: {
            common: {
              msg: "All fields are required",
            },
          },
        }),
        { status: 400 },
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // send to your Gmail
      subject: `📩 New Message from ${name} via Portfolio Website`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: createContactEmailTemplate(name, email, message),
    };

    // Send email
    const sendMsgRes = await transporter.sendMail(mailOptions);

    if (!sendMsgRes.accepted.length) {
      return new Response(
        JSON.stringify({
          errors: {
            common: {
              msg: "Failed to send message. Please try again.",
            },
          },
        }),
        { status: 500 },
      );
    }

    //   success
    return new Response(
      JSON.stringify({
        msg: "Message sent successfully!",
      }),
      {
        status: 200,
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        errors: {
          common: {
            msg: "Something went wrong. Please try again.",
          },
        },
      }),
      {
        status: 500,
      },
    );
  }
}
