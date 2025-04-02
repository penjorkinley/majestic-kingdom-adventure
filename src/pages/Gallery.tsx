// src/pages/Gallery.tsx
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GalleryTitle from "@/components/gallery/GalleryTitle";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCopyright from "@/components/gallery/GalleryCopyright";
import { photoCredits } from "@/data/galleryData";

const Gallery = () => {
  // Add a preloader effect
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      body.style.overflow = "";
      const preloader = document.getElementById("gallery-preloader");
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
        id="gallery-preloader"
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
          backgroundImage="https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Pelala-Mountain-Pass-Trans-Bhutan-Trail-by-Alicia-Warner-4.jpg"
          title={
            <>
              Bhutan <span className="text-majestic-gold">Gallery</span>
            </>
          }
          subtitle="Celebrating the photographers who captured Bhutan's majestic beauty"
          //   buttonText="Learn More"
          //   scrollToId="about-bhutan"
          // fullHeight={false}
        />

        <div className="container-custom">
          <section id="gallery-section" className="py-16 md:py-24">
            <GalleryTitle />

            {/* Gallery grid */}
            <GalleryGrid photos={photoCredits} />

            {/* Copyright notice */}
            <GalleryCopyright />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
