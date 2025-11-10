function Footer() {
  return (
    <footer className="w-full bg-[#009448] text-gray-100 py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Top Section - Legal Disclaimers */}
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8 text-center">
          <p className="text-xs md:text-sm lg:text-base font-sans leading-relaxed">
            Securities offered through J.W. Cole Financial, Inc. (JWC) Member
            FINRA / SIPC. Advisory Services offered through J.W. Cole Advisors,
            Inc. (JWCA). The Emerald Financial Group and JWC/JWCA are
            unaffiliated entities.
          </p>
          <p className="text-xs md:text-sm lg:text-base font-sans leading-relaxed">
            Advisors must be properly registered in the state where you live
            before being able to conduct securities business with you. The
            information contained in this website is not intended as tax, legal
            or investment advice and may not be relied on for the purpose of
            avoiding any federal tax penalties. You are encouraged to seek
            advice from independent tax, legal and/or investment professionals
            based on your particular circumstances. Not all investments and
            services are available in all states. Securities offered through
            J.W. Cole Financial, Inc. (JWC) Member FINRA / SIPC. Advisory
            Services offered through J.W. Cole Advisors, Inc. (JWCA). The
            Emerald Financial Group and JWC/JWCA are unaffiliated entities.
          </p>
        </div>

        {/* Middle Section - Informational Links */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-center">
          <h3 className="text-xs md:text-sm lg:text-base font-sans font-medium mb-3 md:mb-4">
            Legal, privacy, copyright and trademark information
          </h3>
          <div className="space-y-2 text-xs md:text-sm lg:text-base font-sans">
            <p>
              For a copy of JWCF's Form CRS please{" "}
              <a href="#" className="underline hover:text-gray-300">
                click here
              </a>
              .
            </p>
            <p>
              For a copy of JWCA's Form CRS please{" "}
              <a href="#" className="underline hover:text-gray-300">
                click here
              </a>
              .
            </p>
            <p>
              For a copy of JWC's Disclosure Supplement please{" "}
              <a href="#" className="underline hover:text-gray-300">
                click here
              </a>
              . By following the link, you consent to receipt of the Form CRS
              electronically
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 md:pt-6 border-t border-gray-100/20 gap-4">
          <p className="text-xs md:text-sm lg:text-base font-sans text-center md:text-left">
            © 2025 Emerald Financial Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              {/* Placeholder for Kraken icon - replace with actual logo */}
              <span className="text-[#009448] text-xs font-bold">K</span>
            </div>
            <div className="text-xs md:text-sm font-sans text-gray-100">
              <div className="leading-tight">
                <span className="block">SNAPPY</span>
                <span className="flex items-baseline gap-1">
                  <span>KRAKEN</span>
                  <span className="text-[10px]">WEBSITES</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
