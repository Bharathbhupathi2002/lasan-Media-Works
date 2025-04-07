
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Marketing", path: "/marketing" },
    { name: "Pricing", path: "/pricing" },
    { name: "Daily Checklist", path: "/daily-checklist" },
    { name: "Careers", path: "/careers" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/95 backdrop-blur-sm shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center">
        <Link to="/" className="flex items-center z-10">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7415d699-b00e-45f3-973d-12a73b84371e.png" 
              alt="LaSan Logo" 
              className="h-12 md:h-14 mr-3"
            />
          </div>
        </Link>

        {/* Desktop Navigation - Added ml-16 for spacing from logo */}
        <nav className="hidden md:flex items-center space-x-8 ml-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors duration-300 hover:text-lasan-blue ${
                location.pathname === link.path ? "text-lasan-blue" : "text-gray-700"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-lasan-blue"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 z-10 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 block font-medium ${
                  location.pathname === link.path
                    ? "text-lasan-blue"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
