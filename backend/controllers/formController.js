import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const handleFormSubmission = async (req, res) => {
  const { captchaToken, formData } = req.body;

  console.log('Backend - Form submission received');
  console.log('Backend - Environment check:', {
    hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
    hasResendApiKey: !!process.env.RESEND_API_KEY,
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
    console.log('Backend - Sending email via Resend API...');

    const emailResponse = await axios.post(
      'https://api.resend.com/emails',
      {
        from: `${formData.name} on Your Portfolio <${process.env.FROM_ADDRESS}>`,
        to: [process.env.SITE_EMAIL],
        reply_to: formData.email,
        subject: `New Contact Form Submission: ${formData.subject}`,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}

            Message:
            ${formData.message}
        `,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    console.log('Backend - Email sent successfully via Resend:', emailResponse.data);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Backend - Error processing form submission:", error);
    console.error("Backend - Error details:", {
      message: error.message,
      code: error.code,
      response: error.response?.data,
    });
    res.status(500).json({ 
      error: "Internal server error",
      details: error.message 
    });
  }
};