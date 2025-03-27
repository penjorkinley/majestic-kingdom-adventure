import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  scrollToId?: string;
  fullHeight?: boolean;
}

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
  scrollToId,
  fullHeight = true,
}: HeroProps) => {
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

  // Scroll to a section when clicking the button or down arrow
  const scrollToSection = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Render button based on props
  const renderButton = () => {
    if (!buttonText) return null;

    if (buttonLink && buttonLink.startsWith("/")) {
      // Internal link - use React Router's Link
      return (
        <Link
          to={buttonLink}
          className="bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-in-top"
          style={{ animationDelay: "0.6s" }}
        >
          {buttonText}
        </Link>
      );
    } else if (buttonLink && buttonLink.startsWith("#")) {
      // Anchor link - use regular anchor
      return (
        <a
          href={buttonLink}
          className="bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-in-top"
          style={{ animationDelay: "0.6s" }}
        >
          {buttonText}
        </a>
      );
    } else {
      // No link or scroll - use button
      return (
        <button
          onClick={scrollToSection}
          className="bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-in-top"
          style={{ animationDelay: "0.6s" }}
        >
          {buttonText}
        </button>
      );
    }
  };

  return (
    <div
      className={`relative ${
        fullHeight ? "h-screen" : "h-[50vh] md:h-[60vh]"
      } overflow-hidden`}
    >
      <div ref={heroRef} className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          style={{ minHeight: "120%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

      <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg animate-slide-in-top">
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-shadow animate-slide-in-top"
          style={{ animationDelay: "0.3s" }}
        >
          {subtitle}
        </p>

        {renderButton()}
      </div>

      {scrollToId && (
        <button
          onClick={scrollToSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} className="stroke-white" />
        </button>
      )}
    </div>
  );
};

export default Hero;
