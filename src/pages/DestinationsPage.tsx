import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AllDestinations from "@/components/destinations/AllDestinations";
import SeasonsSection from "@/components/destinations/SeasonsSection";
import CallToAction from "@/components/destinations/CallToAction";

const DestinationsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pb-20 overflow-hidden">
        <Hero
          backgroundImage="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
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
    </>
  );
};

export default DestinationsPage;
