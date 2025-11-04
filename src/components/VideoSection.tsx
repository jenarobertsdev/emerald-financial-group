import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

function VideoSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Top-Left Block */}
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl lg:text-2xl text-[#009448] font-sans">
              Learn what makes us different, and how we guide you through the
              financial planning process.
            </p>
            <Link
              to="/process"
              className={cn(
                "inline-block px-8 py-4 rounded-md w-fit",
                "bg-[#f78f21] text-white font-sans text-lg font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Our Process
            </Link>
          </div>

          {/* Top-Right Block - Video Error */}
          <div className="bg-black aspect-video flex items-center justify-center rounded-md">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">
                Sorry
              </p>
              <p className="text-base md:text-lg text-white font-sans">
                This video does not exist.
              </p>
            </div>
          </div>

          {/* Bottom-Left Block - Video Player */}
          <div className="relative bg-[#00664F] aspect-video rounded-md overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <span className="text-white font-sans text-sm md:text-base">
                Play 2 minute video
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              </div>
            </div>
            {/* Placeholder for video thumbnail - you can replace with actual image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white/50 text-sm">Video Thumbnail</div>
            </div>
          </div>

          {/* Bottom-Right Block */}
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl lg:text-2xl text-[#009448] font-sans">
              Keep up with what we are up to and market updates by watching our
              videos.
            </p>
            <Link
              to="/videos"
              className={cn(
                "inline-block px-8 py-4 rounded-md w-fit",
                "bg-[#f78f21] text-white font-sans text-lg font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Emerald Videos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
