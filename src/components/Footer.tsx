import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <img
              src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png"
              alt="Majestic Kingdom Adventure"
              className="h-32 object-contain" // Increased logo size from h-16 to h-24
            />
            <p className="text-gray-400">
              Your Gateway to Bhutan's Hidden Wonders - Crafting unforgettable
              cultural journeys across the Land of the Thunder Dragon.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6z">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-majestic-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Norzin Lam, Thimphu, Bhutan
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-majestic-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+975 2 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-majestic-gold mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@majestickingdom.bt"
                  className="text-gray-400 hover:text-majestic-gold transition-colors"
                >
                  info@majestickingdom.bt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-majestic-gold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-majestic-gold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-majestic-gold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-majestic-gold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-majestic-gold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Majestic Kingdom Adventure. All rights
            reserved.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-majestic-gold hover:bg-majestic-amber text-white rounded-full w-12 h-12 flex items-center justify-center fixed bottom-6 right-6 shadow-lg transition-all hover:scale-110 z-20"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
