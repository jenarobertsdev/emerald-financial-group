import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/heroo-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-[1]"></div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center justify-center md:justify-end px-4 md:px-8 lg:pr-16 xl:pr-24 pb-8 md:pb-16">
        <div className="text-center md:text-right max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Live Your Best Life
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 font-sans px-2 md:px-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            We help you get the full picture of your financial future
          </p>

          {/* Call-to-Action Button */}
          <Link
            to="/contact"
            className={cn(
              "inline-block px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-md",
              "bg-[#f78f21] text-white font-sans text-base md:text-lg lg:text-xl font-medium",
              "hover:bg-[#009448]",
              "transition-colors"
            )}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
