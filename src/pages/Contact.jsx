import React, { useState } from "react";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Use your environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // EmailJS send function
      const response = await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Amal Raj R", 
      });

      if (response.status === 200) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative z-30 min-h-screen p-16 flex items-center justify-center"
    >
      <div className=" mb-8 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
            Contact Me
          </h1>

          <div className="space-y-2 text-xl text-gray-800">
            <p>Have a project in mind?</p>
            <p>Want to collaborate or just say hi?</p>
            <p>I'd love to hear from you!</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/amal-raj-r-0b1ab6292"
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/ar610"
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/pa_r_adox?igsh=MXAzNXZlNGN5eGNscw=="
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="space-y-6">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="shadow-inner shadow-zinc-400  w-full px-4 py-3 bg-blue-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmai.com"
                className="shadow-inner shadow-zinc-400   w-full px-4 py-3 bg-blue-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                rows={6}
                className="shadow-inner shadow-zinc-400  w-full px-4 py-3 bg-blue-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-600 resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`text-center p-3 rounded-lg ${
                  submitStatus.includes("successfully")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
