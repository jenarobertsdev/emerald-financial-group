import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function CTASection() {
  return (
    <section className="w-full bg-[#009448] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-sans font-thin">
              Isn't it time to stop feeling overwhelmed, fearful, and out of
              control?
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-sans font-thin">
              Let us help you get the full picture, so you can live your best
              life!
            </p>
          </div>
          <Link
            to="/contact"
            className={cn(
              "inline-block px-6 py-3 md:px-8 md:py-4 rounded-md",
              "bg-[#f78f21] text-white font-sans text-base md:text-lg font-medium",
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

export default CTASection;
