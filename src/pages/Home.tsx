import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import VideoSection from "@/components/VideoSection";
import StepsSection from "@/components/StepsSection";

function Home() {
  return (
    <div className="bg-background">
      <div className="flex flex-col h-screen">
        <Header />
        <Hero />
      </div>
      <IntroSection />
      <VideoSection />
      <StepsSection />
    </div>
  );
}

export default Home;
