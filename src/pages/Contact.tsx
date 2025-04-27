import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TextInput from "../components/TextInput";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email ? "" : "Email is required.",
      subject: formData.subject ? "" : "Subject is required.",
      message: formData.message ? "" : "Message is required.",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.subject && !newErrors.message) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section id="contact" className="relative flex flex-col min-h-fit w-full px-8 md:px-16 py-12 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
        Get in touch
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl text-gray-900">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Phone Card */}
          <div className="flex items-center gap-4 bg-white/30 px-6 py-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-500 rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-500">+234-806-674-8521</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center gap-4 bg-white/30 px-6 py-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
              <p className="text-sm text-gray-500">hello@kingsleyusa.dev</p>
            </div>
          </div>
        </div>
        {/* Send Message Section */}
        <div className="mt-5">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Send Message</h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextInput
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {/* Subject */}
            <TextInput
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />

            {/* Message */}
            <TextInput
              type="text"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              isTextArea={true}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit px-6 py-3 bg-orange-300/50 text-orange-500 font-medium rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;