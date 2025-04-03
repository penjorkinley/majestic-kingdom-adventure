import React, { useRef, useEffect } from "react";
import {
  FileCheck,
  DollarSign,
  FileText,
  Calendar,
  Clock,
  Plane,
  Check,
} from "lucide-react";

const VisaRoadmap = () => {
  const guideRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe the entire roadmap
    if (guideRef.current) {
      observer.observe(guideRef.current);
    }

    // Observe each step with a staggered delay
    stepsRef.current.forEach((step, index) => {
      if (step) {
        setTimeout(() => {
          observer.observe(step);
        }, index * 150); // Staggered delay for more visual interest
      }
    });

    return () => observer.disconnect();
  }, []);

  // Timeline steps data
  const steps = [
    {
      id: 1,
      title: "Check Visa Requirements",
      content:
        "All international visitors require a visa before traveling to Bhutan, except citizens of India, Bangladesh, and the Maldives, who follow a different process.",
      icon: <FileCheck size={24} />,
    },
    {
      id: 2,
      title: "Understand the Fees",
      content: (
        <>
          <p className="mb-4">You'll need to pay two main fees:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check
                size={18}
                className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
              />
              <span>
                <strong>Sustainable Development Fee (SDF):</strong> US$100 per
                adult per day
              </span>
            </li>
            <li className="flex items-start">
              <Check
                size={18}
                className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
              />
              <span>
                <strong>Visa Application Fee:</strong> One-time non-refundable
                US$40
              </span>
            </li>
          </ul>
        </>
      ),
      icon: <DollarSign size={24} />,
    },
    {
      id: 3,
      title: "Prepare Required Documents",
      content: (
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <Check
              size={18}
              className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
            />
            <span>
              <strong>Valid Passport:</strong> Digital copy
            </span>
          </li>
          <li className="flex items-start">
            <Check
              size={18}
              className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
            />
            <span>
              <strong>Recent Photo:</strong> Digital passport-sized photo
            </span>
          </li>
          <li className="flex items-start">
            <Check
              size={18}
              className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
            />
            <span>
              <strong>Travel Details:</strong> Arrival and departure dates
            </span>
          </li>
          <li className="flex items-start">
            <Check
              size={18}
              className="text-majestic-gold mt-1 mr-2 flex-shrink-0"
            />
            <span>
              <strong>Payment Method:</strong> Credit/debit card for
              international payment
            </span>
          </li>
        </ul>
      ),
      icon: <FileText size={24} />,
    },
    {
      id: 4,
      title: "Application Process",
      content: (
        <>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
            <li className="pl-2">Sign the Pledge of Friendship</li>
            <li className="pl-2">Create an account on the official portal</li>
            <li className="pl-2">Add your travel information</li>
            <li className="pl-2">Pay the visa application fee and SDF</li>
          </ol>
          <div className="mt-4 p-4 bg-majestic-gold/10 rounded-lg">
            <p className="text-sm">
              <strong>Tip:</strong> You can save your application at any time
              and return to it later.
            </p>
          </div>
        </>
      ),
      icon: <Calendar size={24} />,
    },
    {
      id: 5,
      title: "Processing Time",
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Your application will be reviewed within five working days. Once
            approved, you'll receive your visa electronically.
          </p>
          <div className="flex items-center">
            <Clock size={20} className="text-majestic-gold mr-2" />
            <span className="font-medium">5 working days</span>
          </div>
        </>
      ),
      icon: <Clock size={24} />,
    },
    {
      id: 6,
      title: "Ready for Bhutan!",
      content: (
        <>
          <p className="text-muted-foreground mb-6">
            With your visa approved, you're all set to experience the beauty and
            culture of Bhutan. Remember to keep electronic copies of your visa
            and travel documents during your journey.
          </p>
          <div className="mt-4 flex justify-start">
            <a
              href="https://immi.gov.bt/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-majestic-gold hover:bg-majestic-amber text-white py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Apply for Visa
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
        </>
      ),
      icon: <Plane size={24} />,
    },
  ];

  return (
    <div
      ref={guideRef}
      className="relative opacity-0 transition-all duration-700"
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-majestic-gold/20 via-majestic-gold to-majestic-gold/20 z-0"></div>

      {/* Steps */}
      <div className="relative z-10 space-y-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepsRef.current[index] = el)}
            className={`flex flex-col md:flex-row items-center opacity-0 transition-all duration-500`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-10 order-2 md:order-1"
                  : "md:pl-10 order-2"
              }`}
            >
              <div className="group relative bg-white dark:bg-card rounded-xl shadow-md p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-majestic-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-majestic-gold transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-muted-foreground">{step.content}</div>
                </div>

                {/* Corner accent */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-majestic-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Center icon (positioned on the timeline) */}
            <div className="w-16 h-16 flex items-center justify-center relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
              <div className="w-14 h-14 bg-white dark:bg-card ring-4 ring-majestic-gold/30 shadow-lg rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-majestic-gold/20 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-majestic-gold/30">
                  <div className="text-majestic-gold">{step.icon}</div>
                </div>
              </div>
            </div>

            {/* Empty div to maintain grid layout */}
            <div
              className={`md:w-1/2 ${index % 2 === 0 ? "order-3" : "order-1"}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaRoadmap;
