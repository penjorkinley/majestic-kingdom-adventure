import React, { useRef, useEffect } from "react";
import { Users, Check } from "lucide-react";

const SpecialCases = () => {
  const specialCasesRef = useRef<HTMLDivElement>(null);

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

    // Observe the special cases section
    if (specialCasesRef.current) {
      observer.observe(specialCasesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={specialCasesRef}
      className="mt-24 opacity-0 transition-all duration-700"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Special Cases:{" "}
          <span className="text-majestic-gold">
            India, Bangladesh & Maldives
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Different procedures apply for visitors from these countries
        </p>
      </div>

      <div className="bg-white dark:bg-card p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-6">
          <Users size={24} className="text-majestic-gold mr-3" />
          <h3 className="text-2xl font-bold">Special Entry Procedures</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* India */}
          <div className="border border-muted p-6 rounded-xl hover:border-majestic-gold/50 transition-all duration-300">
            <h4 className="text-xl font-bold mb-4 text-majestic-gold">
              Indian Visitors
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Require a permit, not a visa</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Apply online in advance or at point of entry</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>
                  If applying at entry point, bring a passport-size photo
                </span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>SDF is payable when applying for permit</span>
              </li>
            </ul>
          </div>

          {/* Bangladesh */}
          <div className="border border-muted p-6 rounded-xl hover:border-majestic-gold/50 transition-all duration-300">
            <h4 className="text-xl font-bold mb-4 text-majestic-gold">
              Bangladeshi Visitors
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Require a visa</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Application process similar to Indian nationals</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Can apply online or at entry points</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>SDF payable when applying</span>
              </li>
            </ul>
          </div>

          {/* Maldives */}
          <div className="border border-muted p-6 rounded-xl hover:border-majestic-gold/50 transition-all duration-300">
            <h4 className="text-xl font-bold mb-4 text-majestic-gold">
              Maldivian Visitors
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Require a visa</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Application process similar to Indian nationals</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>Can apply online or at entry points</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={16}
                  className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
                />
                <span>SDF payable when applying</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <p className="text-muted-foreground">
            <strong>Note:</strong> If applying for a permit/visa on arrival, be
            prepared for potential waiting times depending on the number of
            applicants. For a smoother experience, we recommend applying online
            in advance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCases;
