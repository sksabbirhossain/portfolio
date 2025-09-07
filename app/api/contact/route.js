import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
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
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send email
    const sendMsgRes = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", sendMsgRes);

    return new Response(JSON.stringify({ msg: "Message sent successfully!" }), {
      status: 200,
    });
  } catch (err) {
    console.error("error", err);
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
