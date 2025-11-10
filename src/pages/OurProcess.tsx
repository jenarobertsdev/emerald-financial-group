import { useEffect } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Briefcase,
  CheckSquare,
  LifeBuoy,
  CirclePlus,
  Umbrella,
  PieChart,
  Compass,
  User,
  ShieldX,
} from "lucide-react";

function OurProcess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Header with Image Background */}
      <section className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/palmtreeheader.jpg..webp')",
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white font-sans text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            What Makes Us Different
          </h1>
        </div>
      </section>

      {/* Planning Process Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-[#009448] font-sans text-center mb-8 md:mb-12 lg:mb-16 px-4">
            Our Planning Process
          </h2>

          {/* Steps List */}
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 md:mb-6">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-[#f78f21]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black font-sans mb-3 md:mb-4">
                Listening & Engagement Session
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-black font-sans font-light leading-relaxed max-w-3xl">
                We gather sufficient information to understand what "Your Best
                Life" means to YOU and begin to calm your fear and overwhelming
                feelings so you can Take Control of your money.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 md:mb-6">
                <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-[#f78f21]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black font-sans mb-3 md:mb-4">
                Financial Empowerment Plan
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-black font-sans font-light leading-relaxed max-w-3xl">
                We examine "what-if" scenarios and determine how your money
                affects your best life and together we create an actionable
                Financial Empowerment Plan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 md:mb-6">
                <CheckSquare className="w-12 h-12 md:w-16 md:h-16 text-[#f78f21]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black font-sans mb-3 md:mb-4">
                Plan Implementation
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-black font-sans font-light leading-relaxed max-w-3xl">
                We help you implement each step of your financial empowerment
                plan to ensure you do not run out of money in retirement.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 md:mb-6">
                <LifeBuoy className="w-12 h-12 md:w-16 md:h-16 text-[#f78f21]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black font-sans mb-3 md:mb-4">
                Ongoing Guidance and Support
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-black font-sans font-light leading-relaxed max-w-3xl">
                We are your unemotional partner. We want to be the first call
                you make when faced with a financial challenge or opportunity.
                We will review your financial empowerment plan at least once per
                year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Your Best Life Section */}
      <section className="w-full bg-white py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
            {/* Left Column - Text */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#009448] font-sans mb-4 md:mb-6">
                Live Your Best Life!
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-black font-sans font-light leading-relaxed">
                <p>
                  At The Emerald Financial Group, we believe that financial
                  advice should be about more than just numbers. It should be
                  about helping you live your best life. We understand that
                  money is emotional, and we're here to be your unemotional
                  partner in making financial decisions.
                </p>
                <p>
                  Our mission is to educate and empower you to take control of
                  your financial future. We take the time to understand your
                  unique situation, your goals, and your dreams. We believe that
                  everyone deserves to feel confident and secure about their
                  financial future.
                </p>
                <p>
                  We provide comprehensive financial planning services that help
                  you see the full picture of your financial situation. We work
                  with you to create a personalized plan that aligns with your
                  values and goals, helping you make informed decisions about
                  your money.
                </p>
                <p>
                  Our ongoing support includes regular meetings, e-newsletters,
                  educational events, and workshops designed to keep you
                  informed and empowered. We're here to help you navigate life's
                  financial challenges and opportunities, so you can focus on
                  living your best life.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img
                src="/karenimage2.jpg"
                alt="Karen Roberts"
                className="max-w-full md:max-w-xl w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <CirclePlus className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Save adequately for the future
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <Umbrella className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Be protected with proper insurance
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <PieChart className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Diversify Savings and Investments
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <Compass className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Maximize your retirement plan
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <User className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Leave a Legacy
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col items-center text-center">
              <ShieldX className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#f78f21] mb-2 md:mb-3 lg:mb-4" />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#009448] font-sans">
                Medicare Planning
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default OurProcess;
