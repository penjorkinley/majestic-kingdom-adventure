import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutBhutan from "@/components/about/AboutBhutan";
import AboutUs from "@/components/about/AboutUs";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const About = () => {
  // Add a preloader effect
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      body.style.overflow = "";
      const preloader = document.getElementById("about-preloader");
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
        id="about-preloader"
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
      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero
          backgroundImage="/about/hero-kezang-choden.jpg"
          title={
            <>
              About <span className="text-majestic-gold">Bhutan</span> & Us
            </>
          }
          subtitle="Discover the magic of Bhutan with Majestic Kingdom Adventure"
          buttonText="Learn More"
          scrollToId="about-bhutan"
          fullHeight={true}
        />

        {/* Modular sections */}
        <div id="about-bhutan">
          <AboutBhutan />
        </div>
        <AboutUs />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default About;
