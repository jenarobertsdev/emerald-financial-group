import { useState } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Is Financial Planning?",
      answer:
        "Financial planning is a way to help you navigate through the ups and downs of your financial life.  It is a plan that takes you from today, to your tomorrow…. Living your Best life.  Ultimately, we want to make sure that you have enough money when you are ready to retire, or pay for college, or any other goal that you have.",
    },
    {
      question: "Why Should I Have A Plan?",
      answer:
        "If you fail to plan, you will plan to fail. Would you travel on a highway without a map? A financial plan gives you the map that you need to succeed, and not run out of money in retirement.",
    },
    {
      question: "Can I Do My Own Financial Plan?",
      answer:
        "Sure, but would you represent yourself in a court of law? Or cure your own cancer? Having an objective partner will help you reach your goals.",
    },
    {
      question:
        "How Can I Plan For The Future, When I Cannot Pay My Bills Today?",
      answer:
        "Part of the planning process is to create a spending plan. Once you see exactly where you spend your money, you will be able to make choices which will empower you to save towards your financial future.",
    },
    {
      question: "After I Have Implemented My Plan, What's Next?",
      answer:
        "We offer ongoing guidance for you and your family. We are here to answer questions about buying/leasing a car, buying a home, moving, college, vacation, anything that has to do with money we are here to help.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full bg-white py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden cursor-pointer transition-colors ${
                  openIndex === index ? "bg-gray-200" : "bg-gray-100"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-3 md:p-4 lg:p-5">
                  <h3 className="text-base md:text-lg lg:text-xl font-medium text-black font-sans pr-3 md:pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#f78f21]" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#f78f21]" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="px-3 md:px-4 lg:px-5 pb-3 md:pb-4 lg:pb-5">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default FAQs;
