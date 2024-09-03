import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dummylogin.ui.test@gmail.com",
        pass: "ykby ifhw ajjk zisr",
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        to: "raakeshmuralitharan@gmail.com",
        subject: subject,
        text: `
          Porfolio website,
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Phone: ${phone}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
