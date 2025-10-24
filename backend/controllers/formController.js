import axios from "axios";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config({ path: "../.env" });

export const handleFormSubmission = async (req, res) => {
  const { captchaToken, formData } = req.body;

  console.log('Backend - Form submission received');
  console.log('Backend - Environment check:', {
    hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPassword: !!process.env.EMAIL_PASSWORD,
    hasFromAddress: !!process.env.FROM_ADDRESS,
    hasSiteEmail: !!process.env.SITE_EMAIL,
  });

  try {
    console.log('Backend - Verifying reCAPTCHA...');
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        },
        timeout: 10000,
      }
    );

    if (!response.data.success) {
      console.log('Backend - reCAPTCHA verification failed:', response.data);
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    console.log('Backend - reCAPTCHA verified successfully');
    console.log('Backend - Creating email transporter...');

    const transporter = nodemailer.createTransport({
      host: "smtp.zeptomail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      logger: true, // Enable detailed logging
      debug: true, // Enable debug output
    });

    // Verify transporter configuration
    console.log('Backend - Verifying SMTP connection...');
    try {
      await transporter.verify();
      console.log('Backend - SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('Backend - SMTP verification failed:', verifyError);
      throw new Error(`SMTP connection failed: ${verifyError.message}`);
    }

    const mailOptions = {
      from: `${formData.name} on Kingsley Usa's Portfolio <${process.env.FROM_ADDRESS}>`,
      to: process.env.SITE_EMAIL,
      subject: `New Contact Form Submission: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
    };

    console.log('Backend - Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Backend - Email sent successfully');

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Backend - Error processing form submission:", error);
    console.error("Backend - Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    res.status(500).json({ 
      error: "Internal server error",
      details: error.message 
    });
  }
};