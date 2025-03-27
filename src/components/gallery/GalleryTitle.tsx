// src/components/gallery/GalleryTitle.tsx
import React, { useRef, useEffect } from "react";

const GalleryTitle: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  // Add fade-in animations
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

    // Observe the section title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={titleRef}
      className="text-center mb-12 opacity-0 transition-all duration-700"
    >
      <h2 className="h2 mb-4">
        Celebrating Bhutan's{" "}
        <span className="text-majestic-gold relative">
          Visual Heritage
          <span className="absolute bottom-0"></span>
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        All photographs on this website are provided courtesy of the Department
        of Tourism, Bhutan. We are grateful to these talented photographers for
        their work.
      </p>
    </div>
  );
};

export default GalleryTitle;
