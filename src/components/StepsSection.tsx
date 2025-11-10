import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function StepsSection() {
  return (
    <section
      id="our-process"
      className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-[#009448] font-sans text-center mb-8 md:mb-12 lg:mb-16">
          Get started today in just 3 easy steps!
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Step 1 Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-sans mb-3 md:mb-4">
              Step 1
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-sans leading-relaxed">
              Schedule your complimentary appointment in person or on Zoom.
            </p>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-sans mb-3 md:mb-4">
              Step 2
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-sans leading-relaxed">
              Attend your listening and engagement session. This session enables
              us to ask any questions to determine how we can help you live your
              best life. From here we will create a financial empowerment plan.
            </p>
          </div>

          {/* Step 3 Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-sans mb-3 md:mb-4">
              Step 3
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-sans leading-relaxed">
              Together we will implement your financial empowerment plan and
              empower you to take control of your financial future.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-sans mb-4 md:mb-6">
            To see our process in more detail,{" "}
            <Link
              to="/contact"
              className="underline hover:text-[#009448] transition-colors"
            >
              click here
            </Link>{" "}
            or schedule your appointment <strong>NOW</strong>
          </p>
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

export default StepsSection;
