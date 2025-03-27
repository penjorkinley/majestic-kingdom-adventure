import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-16 transform transition-all hover:-translate-y-2 hover:shadow-xl duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Experience{" "}
            <span className="text-majestic-gold">Bhutan?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Let our travel experts craft the perfect itinerary for your Bhutan
            adventure. We'll create a personalized journey that includes the
            destinations that interest you most.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-majestic-orange hover:bg-majestic-amber text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            Plan Your Journey Now
          </a>
        </div>
        <div className="relative rounded-xl overflow-hidden h-64 shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1623677435560-ee1a346141b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
            alt="Bhutan Landscape"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 transition-transform duration-500 group-hover:translate-y-[-10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
