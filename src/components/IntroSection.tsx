import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function IntroSection() {
  return (
    <section className="w-full bg-[#009448] py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white font-sans leading-tight">
              Stop feeling fearful, overwhelmed and out of control about your
              future.
            </h2>
          </div>

          {/* Right Column - Content and Button */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white font-sans leading-relaxed">
              We at The Emerald Financial Group understand our clients need an
              unemotional partner to help them live their best lives! For over
              30 years we have been dedicated to <strong>Educating</strong> and{" "}
              <strong>Empowering</strong> clients just like you, to{" "}
              <strong>Take Control</strong> of their financial futures!
            </p>
            <Link
              to="/contact"
              className={cn(
                "inline-block px-6 py-3 md:px-8 md:py-4 rounded-md w-full md:w-fit text-center",
                "bg-[#f78f21] text-white font-sans text-base md:text-lg font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
