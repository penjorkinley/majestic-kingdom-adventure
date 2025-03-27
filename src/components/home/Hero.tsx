import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const ticking = useRef(false);

  // Set up parallax effect for hero image
  useEffect(() => {
    const content = heroRef.current?.querySelector(
      ".hero-content"
    ) as HTMLElement;

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        if (!heroRef.current) return;

        const scrollY = window.scrollY;

        // Apply a more efficient parallax effect using transform instead of backgroundPosition
        // Only apply if scroll position is reasonable (performance optimization)
        if (scrollY < 1000) {
          heroRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;

          // Fade out content with scroll - but with less frequent updates
          if (content) {
            const opacity = 1 - Math.min(1, scrollY / 700);
            content.style.opacity = String(opacity);
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add the animation effect from the destination page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".animate-ready");
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.remove("opacity-0");
            el.classList.add("animate-fade-in-up");
          }, index * 300);
        });
      }
    }, 1800); // Start animations after a short delay

    return () => clearTimeout(timer);
  }, []);

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden" id="home">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/hero-img.jpg)",
          willChange: "transform",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/30"></div>

      <div
        ref={contentRef}
        className="hero-content container mx-auto px-4 text-center text-white z-10 relative h-full flex flex-col justify-center transition-opacity duration-500"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg animate-ready opacity-0">
          Discover <span className="text-majestic-gold">Bhutan's</span> Majestic
          Wonders
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-shadow animate-ready opacity-0">
          Your Gateway to Bhutan's Hidden Wonders - Experience the rich culture,
          spiritual heritage, and breathtaking landscapes
        </p>

        <div className="flex justify-center">
          <a
            href="#destinations"
            className="bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 animate-ready opacity-0"
          >
            Explore Tours
          </a>
        </div>
      </div>

      <button
        onClick={scrollToDestinations}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 animate-ready opacity-1"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="stroke-white" />
      </button>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
