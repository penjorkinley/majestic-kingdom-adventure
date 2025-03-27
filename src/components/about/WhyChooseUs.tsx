import React, { useEffect, useRef } from "react";
import { Heart, Users, Globe, Shield, Compass, Star } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe each card with a delay
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 150); // Staggered delay for more visual interest
      }
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Local Expertise",
      description:
        "Our guides are local Bhutanese with deep knowledge of the culture, history, and hidden gems that most tourists miss. Their personal insights and connections create authentic experiences beyond the typical tourist path.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Service",
      description:
        "We craft each itinerary to match your personal interests, pace, and preferences. Unlike large tour companies, we offer flexible arrangements and attentive service that puts your experience first.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sustainable Practices",
      description:
        "We're committed to preserving Bhutan's pristine environment and cultural heritage through responsible tourism practices, supporting local communities, and minimizing our ecological footprint.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Reliability",
      description:
        "Your safety and comfort are our priorities. We maintain high standards for accommodations, transportation, and activities, with reliable support available throughout your journey.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Unique Experiences",
      description:
        "We go beyond standard itineraries to offer exclusive experiences like home stays with local families, private monastery visits, traditional cooking classes, and access to seasonal festivals.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Passion for Bhutan",
      description:
        "Our love for Bhutan's culture, people, and landscapes shines through in everything we do. We're not just selling tours—we're sharing a country we love and helping you make meaningful connections.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-majestic-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-all duration-700"
        >
          <h2 className="h2 mb-4">
            Why Choose <span className="text-majestic-gold relative">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the Majestic Kingdom Adventure difference - where passion
            meets expertise to create your perfect Bhutanese adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white dark:bg-card rounded-xl shadow-md p-8 opacity-0 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-majestic-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-majestic-gold/30">
                  <div className="text-majestic-gold">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-majestic-gold transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-majestic-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="mt-16 text-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-majestic-gold hover:bg-majestic-amber text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            Plan Your Bhutan Adventure
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
