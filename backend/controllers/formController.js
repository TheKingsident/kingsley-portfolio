import axios from "axios";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config({ path: "../.env" });

export const handleFormSubmission = async (req, res) => {
  const { captchaToken, formData } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        },
      }
    );

    if (!response.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SITE_EMAIL,
        pass: process.env.SITE_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${formData.name} on Kingsley Usa's Portfolio <${process.env.SITE_EMAIL}>`,
      to: process.env.SITE_EMAIL,
      subject: `New Contact Form Submission: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};