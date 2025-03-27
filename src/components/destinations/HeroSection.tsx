import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Set up parallax effect for hero image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;

        // Fade out text based on scroll position
        const heroContent = document.querySelector(
          ".hero-content"
        ) as HTMLElement;
        if (heroContent) {
          const opacity = 1 - Math.min(1, scrollY / 500);
          heroContent.style.opacity = String(opacity);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to destinations section
  const scrollToDestinations = () => {
    const element = document.getElementById("destinations-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
          alt="Bhutan Destinations"
          className="w-full h-full object-cover"
          style={{ minHeight: "120%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

      <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg animate-slide-in-top">
          All <span className="text-majestic-gold">Bhutan</span> Destinations
        </h1>
        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-shadow animate-slide-in-top"
          style={{ animationDelay: "0.3s" }}
        >
          Explore the hidden gems and iconic landmarks of the Land of the
          Thunder Dragon
        </p>

        <button
          onClick={scrollToDestinations}
          className="bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-in-top"
          style={{ animationDelay: "0.6s" }}
        >
          Discover Destinations
        </button>
      </div>

      <button
        onClick={scrollToDestinations}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="stroke-white" />
      </button>
    </div>
  );
};

export default HeroSection;
