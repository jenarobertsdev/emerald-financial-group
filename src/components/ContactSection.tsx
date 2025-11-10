import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Youtube } from "lucide-react";

function ContactSection() {
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
                href="#"
                className="w-10 h-10 bg-gray-800/50 border border-white/30 rounded flex items-center justify-center hover:bg-gray-800/70 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800/50 border border-white/30 rounded flex items-center justify-center hover:bg-gray-800/70 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
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
            <form className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white/50 border border-white/30 rounded-md text-sm md:text-base text-gray-900 placeholder-gray-500 font-sans focus:outline-none focus:bg-white/60 resize-none"
              />
              <button
                type="submit"
                className={cn(
                  "px-6 py-3 md:px-8 md:py-3 rounded-md w-full md:w-auto",
                  "bg-[#f78f21] text-white font-sans text-sm md:text-base font-medium",
                  "hover:bg-[#009448]",
                  "transition-colors"
                )}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
