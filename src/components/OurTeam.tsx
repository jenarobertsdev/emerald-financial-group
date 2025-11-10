import { Link } from "react-router-dom";

function OurTeam() {
  return (
    <section
      id="our-team"
      className="w-full bg-white pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16 lg:pb-20 xl:pb-24"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-black font-sans text-center mb-4 md:mb-6 lg:mb-8">
          Meet Karen
        </h2>
        <div className="flex flex-col items-center">
          <Link to="/about-karen-roberts" className="cursor-pointer">
            <img
              src="/karenroberts.png"
              alt="Karen Roberts"
              className="max-w-xs md:max-w-sm w-full h-auto rounded-lg mb-4 md:mb-6 hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="bg-white rounded-lg shadow-2xl p-4 md:p-5 text-center max-w-md w-full mx-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#009448] font-sans mb-2">
              Karen Roberts ChFC
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 font-sans">
              Wealth Planner, Speaker, Author
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
