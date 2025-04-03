import React, { useRef, useEffect } from "react";

interface TitleSectionProps {
  id?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="text-center mb-16 opacity-0 transition-all duration-700"
    >
      <h2 className="h2 mb-4">
        Your <span className="text-majestic-gold">Journey</span> to Bhutan
        Starts Here
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Follow our step-by-step guide to prepare for your trip to the Land of
        the Thunder Dragon
      </p>
    </div>
  );
};

export default TitleSection;
