// src/components/gallery/GalleryGrid.tsx
import React, { useRef, useEffect } from "react";
import { PhotoCredit } from "@/data/galleryData";

interface GalleryGridProps {
  photos: PhotoCredit[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ photos }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe gallery section
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    // Observe each photo card with a delay
    photoRefs.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100); // Staggered delay for more visual interest
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="opacity-0 transition-all duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            ref={(el) => (photoRefs.current[index] = el)}
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-xl opacity-0"
          >
            {/* Background Image */}
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-1 transform transition-transform duration-300 group-hover:-translate-y-2">
                {photo.title}
              </h3>
              <p className="text-majestic-gold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                {photo.location}
              </p>

              <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0">
                <p className="text-white/90 text-sm mb-2">
                  Photographer:{" "}
                  <span className="font-medium">{photo.photographer}</span>
                </p>
                <p className="text-white/90 text-sm">
                  Source: <span className="font-medium">{photo.source}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
