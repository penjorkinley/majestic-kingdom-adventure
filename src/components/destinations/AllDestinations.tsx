import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { destinationDetails } from "@/data/destinations";

const AllDestinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

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
          entry.target.classList.add("animate-fade-in");
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

    // Observe each card with a delay
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      }
    });

    // Trigger card reveal animations
    setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations-section" className="pt-24 pb-16">
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <h2 className="h2 mb-4">
          Discover <span className="text-majestic-gold">Bhutan's</span>{" "}
          Treasures
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From ancient monasteries to breathtaking landscapes, experience the
          magic of the Thunder Dragon Kingdom
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {destinationDetails.map((destination, index) => (
          <div
            key={destination.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg opacity-0 transform transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-xl"
          >
            {/* Background Image */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              {/* Title and Location - Always Visible */}
              <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                {destination.name}
              </h3>
              <div className="flex items-center text-majestic-gold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{destination.location}</span>
              </div>

              {/* Description - Only Visible on Hover */}
              <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0">
                <p className="text-white/90 text-sm mb-4 line-clamp-3">
                  {destination.description}
                </p>
                <Link
                  to={`/destination/${destination.id}`}
                  className="inline-flex items-center text-majestic-gold hover:text-white transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
