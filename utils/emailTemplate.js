// utils/emailTemplate.js
export function createContactEmailTemplate(name, email, message) {
  return `
    <div style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f2f4f7;
      padding: 40px 20px;
    ">
      <div style="
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 15px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        padding: 30px;
      ">
        <h2 style="color: #c7171c; text-align: center; margin-bottom: 30px;">
          New Contact Form Submission
        </h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p style="
          background: #f9f9f9;
          padding: 15px;
          border-radius: 10px;
          border-left: 4px solid #c7171c;
        ">${message}</p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;" />

        <p style="
          font-size: 12px;
          color: #888;
          text-align: center;
        ">
          This message was sent from your portfolio website contact form.
        </p>
      </div>
    </div>
  `;
}
