// src/pages/DestinationsPage.tsx
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DestinationCategories from "@/components/destinations/DestinationCategories";
import SeasonsSection from "@/components/destinations/SeasonsSection";
import CallToAction from "@/components/destinations/CallToAction";

const DestinationsPage = () => {
  // Add a preloader effect
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      body.style.overflow = "";
      const preloader = document.getElementById("destinations-preloader");
      if (preloader) {
        preloader.classList.add("opacity-0");
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Preloader */}
      <div
        id="destinations-preloader"
        className="fixed inset-0 bg-background z-[100] flex items-center justify-center transition-opacity duration-500"
      >
        <div className="text-center">
          <img
            src="/lovable-uploads/6be2a70a-e41c-483f-9fe8-e34d2ef3c881.png"
            alt="Majestic Kingdom Adventure"
            className="h-24 md:h-32 mx-auto mb-6 animate-pulse"
          />
          <div className="w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="bg-majestic-gold h-full rounded-full animate-[loader_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <Navbar />
      <main className="pb-20 overflow-hidden">
        <Hero
          backgroundImage="../../destination-hero-by-scarlette-DG.jpg"
          title={
            <>
              <span className="text-majestic-gold">Explore</span> Bhutan
            </>
          }
          subtitle="Discover the hidden gems and iconic landmarks of the Land of the Thunder Dragon"
          buttonText="Browse Categories"
          scrollToId="destination-categories"
          fullHeight={true}
        />
        <div className="container-custom relative">
          {/* Destination Categories */}
          <DestinationCategories />

          {/* Seasons Section */}
          <SeasonsSection />

          {/* Call to Action */}
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
