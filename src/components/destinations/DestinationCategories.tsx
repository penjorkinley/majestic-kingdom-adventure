import React, { useRef, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categoryDestinations } from "@/data/categoryDestinations";

interface DestinationCategoriesProps {
  limit?: number;
  randomize?: boolean;
}

const DestinationCategories: React.FC<DestinationCategoriesProps> = ({
  limit,
  randomize = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Function to get either all, limited, or random categories
  const getCategories = () => {
    if (!limit) return categoryDestinations;

    if (randomize) {
      // Get random categories
      const shuffled = [...categoryDestinations].sort(
        () => 0.5 - Math.random()
      );
      return shuffled.slice(0, limit);
    }

    // Just return the first n categories
    return categoryDestinations.slice(0, limit);
  };

  const displayedCategories = getCategories();

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

    // Observe each card with a delay
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 150); // Staggered delay for more visual interest
      }
    });

    // Observe the button container
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destination-categories"
      className="py-16 relative overflow-hidden"
    >
      <div className="container-custom">
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 transition-all duration-700"
        >
          <h2 className="h2 mb-4">
            Discover{" "}
            <span className="text-majestic-gold relative">
              Bhutan's
              <span className="absolute bottom-0 left-0 w-full rounded-full"></span>
            </span>{" "}
            Treasures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the diverse experiences and destinations that make Bhutan a
            truly unique kingdom
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
            limit === 4 ? "4" : limit === 3 ? "3" : "4"
          } gap-8`}
        >
          {displayedCategories.map((category, index) => (
            <Link to={`/destination-category/${category.id}`} key={category.id}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg opacity-0 transform transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  {/* Title - Always Visible */}
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {category.name}
                  </h3>

                  {/* Description - Only Visible on Hover */}
                  <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">
                      {category.description}
                    </p>
                    <p className="inline-flex items-center text-majestic-gold hover:text-white transition-colors">
                      Explore {category.name}{" "}
                      <ArrowRight size={16} className="ml-1" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button - Only shown on homepage */}
        {limit && (
          <div
            ref={buttonRef}
            className="mt-16 text-center opacity-0 transition-all duration-700"
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105 group"
            >
              View All Categories
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationCategories;
