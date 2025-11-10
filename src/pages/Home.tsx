import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import VideoSection from "@/components/VideoSection";
import StepsSection from "@/components/StepsSection";
import OurTeam from "@/components/OurTeam";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="bg-background">
      <Header />
      <div className="h-[calc(100vh-80px)]">
        <Hero />
      </div>
      <IntroSection />
      <VideoSection />
      <StepsSection />
      <OurTeam />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
