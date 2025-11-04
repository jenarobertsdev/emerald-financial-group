import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function StepsSection() {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#009448] font-sans text-center mb-12 md:mb-16">
          Get started today in just 3 easy steps!
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Step 1 Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans mb-4">
              Step 1
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-sans leading-relaxed">
              Schedule your complimentary appointment in person or on Zoom.
            </p>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans mb-4">
              Step 2
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-sans leading-relaxed">
              Attend your listening and engagement session. This session enables
              us to ask any questions to determine how we can help you live your
              best life. From here we will create a financial empowerment plan.
            </p>
          </div>

          {/* Step 3 Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans mb-4">
              Step 3
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-sans leading-relaxed">
              Together we will implement your financial empowerment plan and
              empower you to take control of your financial future.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-gray-700 font-sans mb-6">
            To see our process in more detail,{" "}
            <Link
              to="/process"
              className="underline hover:text-[#009448] transition-colors"
            >
              click here
            </Link>{" "}
            or schedule your appointment <strong>NOW</strong>
          </p>
          <Link
            to="/contact"
            className={cn(
              "inline-block px-8 py-4 rounded-md",
              "bg-[#f78f21] text-white font-sans text-lg font-medium",
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
