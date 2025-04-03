// src/components/destinations/CategoryDestinationDetail.tsx
import React, { useRef, useEffect } from "react";
import { MapPin, Calendar, Navigation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DestinationItem } from "@/data/categoryDestinations";

interface CategoryDestinationDetailProps {
  item: DestinationItem;
  isEven: boolean;
}

const CategoryDestinationDetail: React.FC<CategoryDestinationDetailProps> = ({
  item,
  isEven,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      className="mb-24 opacity-0 transition-all duration-700"
      id={`destination-${item.id}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section - Order changes based on isEven prop */}
        <div
          ref={imageRef}
          className={`opacity-0 transition-all duration-700 order-1 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60"></div>

            {/* Location badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-full flex items-center space-x-2">
              <MapPin size={16} className="text-majestic-gold" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section - Order changes based on isEven prop */}
        <div
          ref={contentRef}
          className={`opacity-0 transition-all duration-700 order-2 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            {item.name}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {item.description}
          </p>

          {/* Key information section */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-majestic-gold/10 p-3 rounded-full mr-4 mt-1">
                <Calendar size={20} className="text-majestic-gold" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Best Time to Visit</h4>
                <p className="text-muted-foreground">{item.bestTimeToVisit}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-majestic-gold/10 p-3 rounded-full mr-4 mt-1">
                <Navigation size={20} className="text-majestic-gold" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">How to Reach</h4>
                <p className="text-muted-foreground">{item.howToReach}</p>
              </div>
            </div>
          </div>

          {/* Highlights section */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Highlights</h4>
            <ul className="space-y-2">
              {item.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full w-6 h-6 flex-shrink-0 mr-3 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDestinationDetail;
