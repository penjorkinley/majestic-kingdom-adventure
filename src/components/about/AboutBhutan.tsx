import React, { useEffect, useRef } from "react";

const AboutBhutan = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);

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

    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe text content with delay
    if (textRef.current) {
      setTimeout(() => {
        observer.observe(textRef.current);
      }, 150);
    }

    // Observe image with longer delay
    if (imageRef.current) {
      setTimeout(() => {
        observer.observe(imageRef.current);
      }, 300);
    }

    // Observe decoration element with even longer delay
    if (decorationRef.current) {
      setTimeout(() => {
        observer.observe(decorationRef.current);
      }, 450);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-all duration-700"
        >
          <h2 className="h2 mb-4">
            The Land of{" "}
            <span className="text-majestic-gold relative">
              Thunder Dragon
              <span className="absolute bottom-0 left-0 w-full"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the mystical kingdom nestled in the eastern Himalayas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            ref={textRef}
            className="lg:col-span-6 opacity-0 transition-all duration-700 relative z-10"
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bhutan, nestled in the eastern Himalayas, is a land of
              breathtaking landscapes, ancient monasteries, and rich cultural
              heritage. Known as "Druk Yul" or the Land of the Thunder Dragon,
              this small kingdom has preserved its unique identity and
              traditions while embracing sustainable development through its
              philosophy of Gross National Happiness.
            </p>

            {/* Pull quote for visual interest */}
            <div className="my-8 pl-6 border-l-4 border-majestic-gold">
              <p className="text-xl italic font-serif text-foreground">
                "The first carbon-negative country in the world, with over 70%
                of its land covered in pristine forests."
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              From snow-capped mountains and pristine forests to vibrant
              festivals and ornate temples, Bhutan offers visitors an authentic
              and transformative experience. The country's commitment to
              environmental conservation has made it the world's only
              carbon-negative country, with over 70% of its land covered in
              forests.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond its natural beauty, Bhutan's true treasure is its people,
              known for their warmth, hospitality, and deep spiritual values. A
              journey to Bhutan is not just a vacation—it's an opportunity to
              reconnect with nature, experience a living cultural heritage, and
              gain insights into a way of life that prioritizes happiness and
              well-being over material wealth.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "70%", label: "Forest Cover" },
                { value: "2008", label: "Democratic Transition" },
                { value: "GNH", label: "Development Philosophy" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-card shadow-md rounded-lg py-4 px-6 border-b-4 border-majestic-gold/60 hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                >
                  <p className="text-2xl font-bold text-majestic-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className="lg:col-span-6 opacity-0 transition-all duration-700 relative z-10"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566553253535-2473cf16cf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
                  alt="Bhutan Landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative floating images */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-card">
                <img
                  src="https://images.unsplash.com/photo-1515248027005-c33283ec3218?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Bhutanese Prayer Flags"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-card">
                <img
                  src="https://images.unsplash.com/photo-1608021821039-66254a26d1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Bhutanese Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBhutan;
