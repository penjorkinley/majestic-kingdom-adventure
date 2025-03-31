import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  tour: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "Our journey through Cambodia's ancient temples was absolutely magical. The guides were knowledgeable and passionate, making history come alive for us. The attention to detail in every aspect of our tour was impressive!",
    tour: "Temples of Ancient Cambodia",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Canada",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "The Golden Palaces tour exceeded all expectations. We had authentic cultural experiences that felt like we were truly part of Thailand, not just tourists. The accommodations were luxurious and the food was incredible.",
    tour: "Golden Palaces of Thailand",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Australia",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "Trekking to the Himalayan monasteries was a life-changing experience. The spiritual atmosphere, combined with breathtaking mountain vistas, created memories I'll cherish forever. Our guide was exceptional!",
    tour: "Himalayan Monastery Trek",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../Trashi Yangtse 090723 by Amp Sripimanwat-179-parallax (1).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="h2 text-white mb-4">
            What Our <span className="text-majestic-gold">Travelers</span> Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Authentic experiences shared by guests who have embarked on our
            cultural journeys
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="transition-all duration-500 transform">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 absolute top-0 left-0"
                }`}
              >
                {index === activeIndex && (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="md:flex items-center gap-8">
                      <div className="mb-6 md:mb-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-majestic-gold mx-auto md:mx-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl text-white italic mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </p>

                        <div>
                          <h4 className="text-xl text-white font-bold">
                            {testimonial.name}
                          </h4>
                          <p className="text-majestic-gold">
                            {testimonial.location}
                          </p>
                          <p className="text-white/70 text-sm mt-1">
                            Tour: {testimonial.tour}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-majestic-gold w-8" : "bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
