import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-3"
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
          {["Home", "Destinations", "About"].map((item) => {
            const linkTo = item === "Home" ? "/" : `/${item.toLowerCase()}`;

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
          })}
          <Link
            to="/contact"
            className="bg-majestic-gold hover:bg-majestic-amber text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:scale-105 transform duration-300"
          >
            Contact
          </Link>
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
        className={`md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col space-y-6">
            {["Home", "Destinations", "About", "Contact"].map((item) => {
              const linkTo = item === "Home" ? "/" : `/${item.toLowerCase()}`;

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
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
