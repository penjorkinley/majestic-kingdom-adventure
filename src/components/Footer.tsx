
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png" 
              alt="Majestic Kingdom Adventure" 
              className="h-16 mb-4 object-contain"
            />
            <p className="text-gray-400 mb-6">
              Your Gateway to Bhutan's Hidden Wonders - Crafting unforgettable cultural journeys across the Land of the Thunder Dragon.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-gray-800 hover:bg-majestic-gold/80 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-majestic-gold after:bottom-0 after:left-0">
              Destinations
            </h4>
            <ul className="space-y-3">
              {['Thimphu', 'Paro', 'Punakha', 'Bumthang', 'Wangdue', 'Haa Valley'].map(destination => (
                <li key={destination}>
                  <a href="#" className="text-gray-400 hover:text-majestic-gold transition-colors">
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-majestic-gold after:bottom-0 after:left-0">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '#about' },
                { name: 'Tours', link: '#tours' },
                { name: 'Testimonials', link: '#' },
                { name: 'Gallery', link: '#' },
                { name: 'Terms & Conditions', link: '#' },
                { name: 'Privacy Policy', link: '#' }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.link} className="text-gray-400 hover:text-majestic-gold transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-majestic-gold after:bottom-0 after:left-0">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new Bhutan tours and special offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-majestic-gold/50 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-majestic-gold hover:bg-majestic-amber text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Majestic Kingdom Adventure. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-majestic-gold transition-colors mx-2">Terms</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-majestic-gold transition-colors mx-2">Privacy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-majestic-gold transition-colors mx-2">Cookies</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-majestic-gold hover:bg-majestic-amber text-white rounded-full w-12 h-12 flex items-center justify-center fixed bottom-6 right-6 shadow-lg transition-all hover:scale-110 z-20"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
