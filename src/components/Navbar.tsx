
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'destinations', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png" alt="Majestic Kingdom Adventure" className="h-12 md:h-28 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['Home', 'Destinations', 'About'].map(item => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            const linkTo = item === 'Home' ? '/' : `/${sectionId}`;
            
            return (
              <Link 
                key={item} 
                to={linkTo}
                className={`font-medium text-foreground/90 hover:text-majestic-gold transition-colors ${
                  isActive 
                    ? 'text-majestic-gold font-semibold after:scale-x-100 after:origin-bottom-left' 
                    : 'underline-animation'
                }`}
              >
                {item}
              </Link>
            );
          })}
          <Link to="/contact" className="bg-majestic-gold hover:bg-majestic-amber text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:scale-105 transform duration-300">
            Contact
          </Link>
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
            {['Home', 'Destinations', 'About', 'Contact'].map(item => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              const linkTo = item === 'Home' ? '/' : `/${sectionId}`;
              
              return (
                <Link 
                  key={item} 
                  to={linkTo}
                  className={`text-xl font-medium py-2 border-b border-muted hover:text-majestic-gold transition-colors ${
                    isActive ? 'text-majestic-gold font-semibold' : ''
                  }`} 
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>;
};

export default Navbar;
