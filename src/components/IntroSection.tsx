import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function IntroSection() {
  return (
    <section className="w-full bg-[#009448] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white font-sans leading-tight">
              Stop feeling fearful, overwhelmed and out of control about your
              future.
            </h2>
          </div>

          {/* Right Column - Content and Button */}
          <div className="flex flex-col gap-6">
            <p className="text-base md:text-lg lg:text-xl text-white font-sans leading-relaxed">
              We at The Emerald Financial Group understand our clients need an
              unemotional partner to help them live their best lives! For over
              30 years we have been dedicated to <strong>Educating</strong> and{" "}
              <strong>Empowering</strong> clients just like you, to{" "}
              <strong>Take Control</strong> of their financial futures!
            </p>
            <Link
              to="/contact"
              className={cn(
                "inline-block px-8 py-4 rounded-md w-fit",
                "bg-[#f78f21] text-white font-sans text-lg font-medium",

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
