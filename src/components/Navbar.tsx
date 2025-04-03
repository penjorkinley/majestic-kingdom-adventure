import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Gallery from "@/pages/Gallery";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      if (isMenuOpen) {
        setIsScrolled(false);
      } else {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    handleScroll();
    // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, setIsMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-1"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png"
            alt="Majestic Kingdom Adventure"
            className="h-20 md:h-24 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["Home", "Destinations", "About", "Gallery", "Travel Guide"].map(
            (item) => {
              const linkTo =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <Link
                  key={item}
                  to={linkTo}
                  className={`font-medium hover:text-majestic-gold transition-colors underline-animation ${
                    isScrolled
                      ? "text-foreground/90 dark:text-white/90"
                      : "text-white"
                  }`}
                >
                  {item}
                </Link>
              );
            }
          )}
          <HashLink
            smooth
            to="/#contact"
            className={`font-medium hover:text-majestic-gold transition-colors underline-animation
                ${
                  isScrolled
                    ? "text-foreground/90 dark:text-white/90"
                    : "text-white"
                }`}
          >
            Contact
          </HashLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md hover:bg-muted transition-colors ${
            isScrolled ? "text-foreground dark:text-white" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden h-screen fixed inset-0 bg-white dark:bg-black backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-8 pt-24 ">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col space-y-6 ">
            {["Home", "Destinations", "About", "Gallery", "Travel Guide"].map(
              (item) => {
                // Convert "Travel Guide" to "travel-guide" for URL, other items follow the same pattern
                const linkTo =
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

                return (
                  <Link
                    key={item}
                    to={linkTo}
                    className="text-xl font-medium py-2 border-b border-muted hover:text-majestic-gold transition-colors"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                );
              }
            )}
            <HashLink
              smooth
              to="/#contact"
              className="text-xl font-medium py-2 border-b border-muted hover:text-majestic-gold transition-colors"
              onClick={closeMenu}
            >
              Contact
            </HashLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
