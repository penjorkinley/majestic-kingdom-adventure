import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png" alt="Majestic Kingdom Adventure" className="h-14 md:h-28 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['Home', 'Destinations', 'Tours', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="font-medium underline-animation text-foreground/90 hover:text-majestic-gold transition-colors">
              {item}
            </a>)}
          <a href="#book" className="bg-majestic-gold hover:bg-majestic-amber text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:scale-105 transform duration-300">
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2 rounded-md hover:bg-muted transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Close button */}
          <button className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" onClick={closeMenu} aria-label="Close Menu">
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-6">
            {['Home', 'Destinations', 'Tours', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-medium py-2 border-b border-muted hover:text-majestic-gold transition-colors" onClick={closeMenu}>
                {item}
              </a>)}
            <a href="#book" className="bg-majestic-gold hover:bg-majestic-amber text-white px-6 py-3 rounded-full transition-all hover:shadow-lg text-center mt-6" onClick={closeMenu}>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;