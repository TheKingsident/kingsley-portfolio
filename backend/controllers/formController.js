import axios from "axios";

export const handleFormSubmission = async (req, res) => {
  const { captchaToken, formData } = req.body;

  // Verify reCAPTCHA token
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

    // Process the form data (e.g., save to database, send email, etc.)
    console.log("Form Data:", formData);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};