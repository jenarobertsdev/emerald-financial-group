import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto py-2">
        <div className="flex flex-row items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex flex-row items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Emerald Financial Group Logo"
              className="h-auto w-56 object-contain flex-shrink-0"
            />
          </div>

          {/* Navigation Section */}
          <nav className="flex items-center gap-6">
            <Link
              to="/about"
              className="text-gray-700 font-sans text-base hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 font-sans text-base hover:text-gray-900 transition-colors outline-none">
                How We Help
                <ChevronDown className="w-4 h-4 text-gray-900" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/how-we-help" className="cursor-pointer">
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/how-we-help" className="cursor-pointer">
                    Financial Planning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/how-we-help" className="cursor-pointer">
                    Investment Management
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/contact"
              className={cn(
                "px-6 py-3 rounded-md",
                "bg-[#f78f21] text-white font-sans text-base font-medium",
                "hover:bg-[#009448]",
                "transition-colors"
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
