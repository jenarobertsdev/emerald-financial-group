import { useEffect } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Header with Image Background */}
      <section className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/palmtreeheader.jpg..webp')",
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white font-sans text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Contact
          </h1>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="w-full bg-white pt-6 md:pt-8 lg:pt-12 pb-0 -mb-2 md:-mb-4 lg:-mb-6">
        <div className="container mx-auto px-2 md:px-4">
          <iframe
            src="https://calendly.com/tefg-karen?embed_domain=www.emerald-financialgroup.com&embed_type=Inline&primary_color=077b27"
            width="100%"
            height="1200"
            frameBorder="0"
            scrolling="no"
            className="w-full overflow-hidden"
            style={{ minHeight: "800px" }}
            title="Schedule a meeting"
          ></iframe>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full bg-white -mt-2 md:-mt-4 lg:-mt-6 pt-0 pb-6 md:pb-8 lg:pb-12">
        <div className="container mx-auto px-2 md:px-4">
          <iframe
            src="https://www.google.com/maps?q=2300+Corporate+Blvd+NW+Suite+111+Boca+Raton+FL+33431&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="w-full rounded-lg"
          ></iframe>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;
