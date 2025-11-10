import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById("our-team");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Navigate to home page first
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById("our-team");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto py-2 px-4">
        <div className="flex flex-row items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex flex-row items-center flex-shrink-0">
            <Link to="/" className="cursor-pointer">
              <img
                src="/logo.png"
                alt="Emerald Financial Group Logo"
                className="h-auto w-40 md:w-56 object-contain flex-shrink-0"
              />
            </Link>
          </div>

          {/* Desktop Navigation Section */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="#our-team"
              onClick={handleAboutUsClick}
              className="text-gray-700 font-sans text-base lg:text-lg hover:text-gray-900 transition-colors cursor-pointer"
            >
              About Us
            </a>
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <DropdownMenu
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 font-sans text-base lg:text-lg hover:text-gray-900 transition-colors outline-none">
                  How We Help
                  <ChevronDown className="w-4 h-4 text-gray-900" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="text-base lg:text-lg"
                >
                  <DropdownMenuItem
                    asChild
                    className="hover:bg-[#f78f21] hover:text-white focus:bg-[#f78f21] focus:text-white"
                  >
                    <Link to="/our-process" className="cursor-pointer">
                      Our Process
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="hover:bg-[#f78f21] hover:text-white focus:bg-[#f78f21] focus:text-white"
                  >
                    <Link to="/faqs" className="cursor-pointer">
                      FAQs
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              to="/contact"
              className={cn(
                "px-4 py-2 lg:px-6 lg:py-3 rounded-md",
                "bg-[#f78f21] text-white font-sans text-sm lg:text-base font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#our-team"
                onClick={(e) => {
                  handleAboutUsClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 font-sans text-base hover:text-gray-900 transition-colors cursor-pointer"
              >
                About Us
              </a>
              <Link
                to="/our-process"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 font-sans text-base hover:text-gray-900 transition-colors"
              >
                Our Process
              </Link>
              <Link
                to="/faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 font-sans text-base hover:text-gray-900 transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 rounded-md w-full text-center",
                  "bg-[#f78f21] text-white font-sans text-base font-medium",
                  "hover:bg-[#009448]",
                  "transition-colors"
                )}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
