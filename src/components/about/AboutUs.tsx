import React, { useEffect, useRef } from "react";
import { Heart, Users, Globe, Shield, Compass, Star } from "lucide-react";

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const missionCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe story content with delay
    if (storyRef.current) {
      setTimeout(() => {
        observer.observe(storyRef.current);
      }, 150);
    }

    // Observe image with longer delay
    if (imageRef.current) {
      setTimeout(() => {
        observer.observe(imageRef.current);
      }, 300);
    }

    // Observe mission section with even longer delay
    if (missionRef.current) {
      setTimeout(() => {
        observer.observe(missionRef.current);
      }, 450);
    }

    // Observe each mission card with a staggered delay
    missionCardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, 450 + index * 150); // Staggered delay starting after mission header
      }
    });

    return () => observer.disconnect();
  }, []);

  // Mission data with Lucide icons
  const missions = [
    {
      title: "Authentic Experiences",
      description:
        "Provide immersive and culturally rich travel experiences that reflect the true essence of Bhutan.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Sustainable Tourism",
      description:
        "Promote responsible and eco-friendly tourism practices that preserve Bhutan's natural and cultural heritage.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Exceptional Service",
      description:
        "Deliver personalized, high-quality services with a focus on hospitality, comfort, and safety.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Adventure & Exploration",
      description:
        "Offer diverse travel experiences, from serene spiritual retreats to thrilling outdoor adventures.",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      title: "Community Engagement",
      description:
        "Support local communities by promoting ethical tourism and creating economic opportunities.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Cultural Preservation",
      description:
        "Help preserve and celebrate Bhutan's unique cultural heritage through respectful tourism practices.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
      {/* Decorative background elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-majestic-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-24 w-48 h-48 bg-majestic-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-all duration-700"
        >
          <h2 className="h2 mb-4">
            About Majestic Kingdom{" "}
            <span className="text-majestic-gold relative">
              Adventure
              <span className="absolute bottom-0 left-0"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your Gateway to Bhutan's Hidden Wonders - Crafting unforgettable
            cultural journeys across the Land of the Thunder Dragon
          </p>
        </div>

        {/* Redesigned Image and Story Section */}
        <div className="relative mb-24">
          {/* Decorative element */}
          <div className="absolute -top-16 -left-12 w-24 h-24 rounded-full border-4 border-majestic-gold/30 z-0"></div>
          <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full border-4 border-majestic-gold/20 z-0"></div>

          {/* Content with overlapping cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Section - Redesigned */}
            <div
              ref={imageRef}
              className="lg:col-span-12 lg:col-start-1 opacity-0 transition-all duration-700"
            >
              <div className="relative h-[600px] mt-16">
                {/* Main image */}
                <div className="rounded-2xl w-1/2 h-2/3 shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <img
                    src="../../buddha-point by Amp Sripimanwat.jpg"
                    alt="Bhutan Tour Guide"
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                {/* Floating stats cards */}
                {/* <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <p className="text-3xl font-bold text-majestic-gold">10+</p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <p className="text-3xl font-bold text-majestic-gold">250+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div> */}
                <div
                  ref={storyRef}
                  className="lg:col-span-7 w-1/2 left-[45%]  opacity-0 transition-all duration-700 absolute -top-16 transform translate-x-1/2 "
                >
                  <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative z-20">
                    <div className="absolute top-0 right-0 -mt-5 -mr-5 w-16 h-16 bg-majestic-gold/20 rounded-full"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                      <span className="inline-block w-8 h-1 bg-majestic-gold mr-3"></span>
                      Our Story
                    </h3>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Majestic Kingdom Adventure is a dedicated tour agency
                      specializing in personalized travel experiences in Bhutan
                      and beyond. With a team of experienced guides and travel
                      experts, we craft journeys that showcase Bhutan's rich
                      culture, stunning landscapes, and spiritual heritage.
                    </p>

                    <div className="bg-muted/50 p-6 rounded-xl my-6 border-l-4 border-majestic-gold">
                      <p className="text-lg italic">
                        "Our vision is to inspire unforgettable journeys through
                        Bhutan's majestic landscapes, rich culture, and
                        authentic experiences."
                      </p>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Whether you're seeking cultural immersion, thrilling
                      adventures, or serene retreats, we ensure a seamless and
                      enriching journey through this unique Himalayan kingdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Card - Redesigned */}
          </div>
        </div>

        {/* Mission section with redesigned cards - similar to WhyChooseUs */}
        <div
          ref={missionRef}
          className="mt-16 opacity-0 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Our <span className="text-majestic-gold">Mission</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to creating authentic travel experiences while
              preserving Bhutan's cultural and natural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                ref={(el) => (missionCardsRef.current[index] = el)}
                className="group relative bg-white dark:bg-card rounded-xl shadow-md p-8 opacity-0 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-majestic-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-majestic-gold/30">
                    <div className="text-majestic-gold">{mission.icon}</div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 group-hover:text-majestic-gold transition-colors">
                    {mission.title}
                  </h4>

                  <p className="text-muted-foreground">{mission.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-majestic-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
