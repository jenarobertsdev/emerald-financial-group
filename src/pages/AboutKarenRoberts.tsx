import { useEffect } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

function AboutKarenRoberts() {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin text-white font-sans text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Karen Roberts
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Left Column - Image */}
              <div className="md:col-span-1">
                <img
                  src="/karenroberts.png"
                  alt="Karen Roberts"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Right Column - Biography */}
              <div className="md:col-span-2">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#009448] font-sans mb-2">
                    Karen Roberts ChFC
                  </h2>
                  <p className="text-sm md:text-base font-semibold text-black font-sans mb-3">
                    Wealth Planner, Speaker, Author
                  </p>
                  <a
                    href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE7gPERGjO8sgAAAZprgdRw_4vjjWgUeu40-gbiGakQGC03N0oGzy2A660kZZlPXOaqSSKt3fHhnSok9Ywd7d8lF1Ov2gycUjKMlki3wTficfv-Bs7CE_O_53hUbkGa7Ctwulk=&original_referer=https://www.emerald-financialgroup.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkaren-k-roberts%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <div className="space-y-4 text-xs md:text-sm font-light text-black font-sans leading-relaxed">
                  <p>
                    Karen K. Roberts is a Wealth Planning Specialist with over
                    30 years of experience. She is passionate about empowering
                    women to take control of their financial futures. Throughout
                    her career, Karen has helped countless clients plan for
                    their financial goals and retirement, and she is passionate
                    about sharing her insights on women's empowerment and
                    financial decisions.
                  </p>
                  <p>
                    Karen has delivered keynote speeches and has appeared on
                    "The Daily Buzz" and "The Balancing Act (Lifetime)." A
                    career highlight was ringing the New York Stock Exchange
                    Opening Bell.
                  </p>
                  <p>
                    Karen earned her degree in Economics from California State
                    University, Northridge, and holds CLU (Chartered Life
                    Underwriter) and ChFC (Chartered Financial Consultant)
                    designations from The American College of Financial
                    Services.
                  </p>
                  <p>
                    Karen is committed to her community, serving as a Trustee
                    for the Jewish Women's Foundation of Broward County. She
                    received the 2015 Financial Planning Foundation's Pro Bono
                    Award for her dedication to helping others.
                  </p>
                  <p>
                    Karen is also passionate about advocating for foster
                    children. She has opened her home to foster children and
                    adopted twin boys in 2005, completing her family of four
                    sons.
                  </p>
                  <p>
                    Karen lives in Boca Raton and enjoys spending time with her
                    grandchildren. She remains passionate about empowering
                    others to achieve financial control and live their best
                    lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-2">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/325267474"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    title="Karen Roberts Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default AboutKarenRoberts;
