import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function VideoSection() {
  return (
    <section className="w-full bg-white py-8 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Top-Left Block */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#009448] font-sans">
              Learn what makes us different, and how we guide you through the
              financial planning process.
            </p>
            <Link
              to="/our-process"
              className={cn(
                "inline-block px-6 py-3 md:px-8 md:py-4 rounded-md w-full md:w-fit text-center",
                "bg-[#f78f21] text-white font-sans text-base md:text-lg font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Our Process
            </Link>
          </div>

          {/* Top-Right Block - Video Player */}
          <div className="relative bg-black aspect-video rounded-md overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/yWed0gsyFGI"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Emerald Financial Group Video"
            ></iframe>
          </div>

          {/* Bottom-Left Block - Video Player */}
          <div className="relative bg-[#00664F] aspect-video rounded-md overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/zW5kMjVv7gg"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Emerald Financial Group Video"
            ></iframe>
          </div>

          {/* Bottom-Right Block */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#009448] font-sans">
              Keep up with what we are up to and market updates by watching our
              videos.
            </p>
            <a
              href="https://www.youtube.com/@theemeraldfinancialgroup5110"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-block px-6 py-3 md:px-8 md:py-4 rounded-md w-full md:w-fit text-center",
                "bg-[#f78f21] text-white font-sans text-base md:text-lg font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Emerald Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
