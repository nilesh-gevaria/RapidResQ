
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="containerCustom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <img 
              src="logo.png" 
              alt="RapidResQ Logo" 
              className="h-10" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative font-medium text-sm transition-colors",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
                  "after:scale-x-0 after:bg-gold after:transition-transform after:duration-300",
                  "hover:text-gold hover:after:scale-x-100",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={cn(
              "hidden md:inline-flex items-center justify-center h-10 px-4 py-2 text-sm",
              "bg-gold text-white rounded-lg transition-colors",
              "hover:bg-gold/90"
            )}
          >
            Get Started
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white/95 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-foreground hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "inline-flex items-center justify-center h-10 px-4 py-2 text-sm",
                "bg-gold text-white rounded-lg transition-colors",
                "hover:bg-gold/90 mt-2"
              )}
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
