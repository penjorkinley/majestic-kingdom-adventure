import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AllDestinations from "@/components/destinations/AllDestinations";
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
              All <span className="text-majestic-gold">Bhutan</span>{" "}
              Destinations
            </>
          }
          subtitle="Explore the hidden gems and iconic landmarks of the Land of the Thunder Dragon"
          buttonText="Discover Destinations"
          scrollToId="destinations-section"
          fullHeight={true}
        />
        <div className="container-custom relative">
          <AllDestinations />
          <SeasonsSection />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
