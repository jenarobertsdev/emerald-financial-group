import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Youtube } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer_0.jpeg')",
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-6 md:gap-8 lg:gap-12">
          {/* Office Section */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-sans mb-4 md:mb-6">
              Office
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white font-sans mb-6 md:mb-8">
              2300 Corporate Blvd NW, Suite 111
              <br />
              Boca Raton, FL 33431
            </p>
            <div className="flex flex-col gap-3 md:gap-4">
              <button
                className={cn(
                  "px-4 py-3 rounded-md border-2 border-white w-full md:w-48 text-left",
                  "bg-white/20 text-white font-sans text-sm md:text-base font-medium",
                  "hover:bg-white/30",
                  "transition-colors"
                )}
              >
                Newsletter Sign Up
              </button>
              <Link
                to="/contact"
                className={cn(
                  "px-4 py-3 rounded-md border-2 border-white text-left w-full md:w-48",
                  "bg-transparent text-white font-sans text-sm md:text-base font-medium",
                  "hover:bg-white/10",
                  "transition-colors"
                )}
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-sans mb-4 md:mb-6">
              Contact Info
            </h2>
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <p className="text-sm md:text-base lg:text-lg text-white font-sans">
                P | 561-437-6500
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white font-sans">
                F | 561-287-6571
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white font-sans break-words">
                E | efg@emerald-financialgroup.com
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TheEmeraldFinancialGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 border border-white/30 rounded flex items-center justify-center hover:bg-gray-800/70 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/karen-k-roberts/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 border border-white/30 rounded flex items-center justify-center hover:bg-gray-800/70 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@theemeraldfinancialgroup5110"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 border border-white/30 rounded flex items-center justify-center hover:bg-gray-800/70 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-sans mb-4 md:mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60 resize-none"
              />
              {submitStatus.type && (
                <div
                  className={cn(
                    "px-4 py-3 rounded-md text-sm md:text-base font-sans",
                    submitStatus.type === "success"
                      ? "bg-green-500/90 text-white"
                      : "bg-red-500/90 text-white"
                  )}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "px-6 py-3 md:px-8 md:py-3 rounded-md w-full md:w-auto",
                  "bg-[#f78f21] text-white font-sans text-sm md:text-base font-medium",
                  "hover:bg-[#009448]",
                  "transition-colors",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
