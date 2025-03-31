import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe the main container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Observe content with delay
    if (contentRef.current) {
      setTimeout(() => {
        observer.observe(contentRef.current);
      }, 150);
    }

    // Observe image with longer delay
    if (imageRef.current) {
      setTimeout(() => {
        observer.observe(imageRef.current);
      }, 300);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-card rounded-2xl shadow-lg mb-16 transform transition-all hover:-translate-y-2 hover:shadow-xl duration-500 opacity-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          ref={contentRef}
          className="opacity-0 transition-all duration-700 p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Experience{" "}
            <span className="text-majestic-gold">Bhutan?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Let our travel experts craft the perfect itinerary for your Bhutan
            adventure. We'll create a personalized journey that includes the
            destinations that interest you most.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-majestic-orange hover:bg-majestic-amber text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105 group"
          >
            Plan Your Journey Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div
          ref={imageRef}
          className="relative rounded-r-xl overflow-hidden h-full shadow-lg group opacity-0 transition-all duration-700"
        >
          <img
            src="../../destination-experience-by-kezang-choden.jpg"
            alt="Bhutan Landscape"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 transition-transform duration-500 group-hover:translate-y-[-10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
