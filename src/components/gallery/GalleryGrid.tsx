// src/components/gallery/GalleryGrid.tsx
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoCredit } from "@/data/galleryData";

interface GalleryGridProps {
  photos: PhotoCredit[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ photos }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Group photos into sets of 9 (3 columns x 3 rows)
  const slides = [];
  const imagesPerSlide = 9;

  for (let i = 0; i < photos.length; i += imagesPerSlide) {
    slides.push(photos.slice(i, i + imagesPerSlide));
  }

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

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div ref={gridRef} className="opacity-0 transition-all duration-700">
      {/* Carousel with peeking effect */}
      <div className="relative w-full">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 90}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-[90%] flex-shrink-0 pr-[1.5%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {slide.map((photo) => (
                    <div
                      key={photo.id}
                      className="group relative aspect-square overflow-hidden transform transition-all duration-500 hover:scale-105 hover:z-10"
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
                      <div className="absolute inset-0 p-3 group-hover:p-4 group-hover:pb-6 flex flex-col justify-end text-white transition-all duration-300">
                        <h3 className="text-lg font-bold mb-1 transform transition-transform duration-300 group-hover:-translate-y-2">
                          {photo.title}
                        </h3>
                        <p className="text-majestic-gold text-sm mb-1 transform transition-transform duration-300 group-hover:-translate-y-2">
                          {photo.location}
                        </p>

                        <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 py-2">
                          <p className="text-white/90 text-xs mb-1">
                            Photographer:{" "}
                            <span className="font-medium">
                              {photo.photographer}
                            </span>
                          </p>
                          <p className="text-white/90 text-xs">
                            Source:{" "}
                            <span className="font-medium">{photo.source}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-majestic-gold p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-majestic-gold p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-majestic-gold w-8"
                    : "bg-gray-300 hover:bg-majestic-gold/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        )}

        {/* Slide Counter */}
        <div className="text-center mt-3 text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
