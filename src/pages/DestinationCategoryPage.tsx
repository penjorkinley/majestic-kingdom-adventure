// src/pages/DestinationCategoryPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  categoryDestinations,
  CategoryDestination,
  DestinationItem,
} from "@/data/categoryDestinations";
import CategoryDestinationDetail from "@/components/destinations/CategoryDestinationDetail";

const DestinationCategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryDestination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Add a preloader effect
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      body.style.overflow = "";
      const preloader = document.getElementById("category-preloader");
      if (preloader) {
        preloader.classList.add("opacity-0");
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Find the category based on the ID parameter
  useEffect(() => {
    if (id) {
      const foundCategory = categoryDestinations.find(
        (cat) => cat.id.toString() === id
      );

      if (foundCategory) {
        setCategory(foundCategory);
      } else {
        // If category not found, navigate to destinations page
        navigate("/destinations");
      }
    }

    setLoading(false);
  }, [id, navigate]);

  if (loading) return null;
  if (!category) return null;

  return (
    <div className="relative">
      {/* Preloader */}
      <div
        id="category-preloader"
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
          backgroundImage={category.image}
          title={
            <>
              <span className="text-majestic-gold">{category.name}</span> in
              Bhutan
            </>
          }
          subtitle={category.description}
          buttonText="Discover Places"
          scrollToId="category-content"
          fullHeight={true}
        />

        <div id="category-content" className="container-custom relative pt-20">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">
              Explore{" "}
              <span className="text-majestic-gold relative">
                {category.name}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the wonders that Bhutan has to offer in{" "}
              {category.name.toLowerCase()}
            </p>
          </div>

          {/* Destination items with alternating layout */}
          {category.items.map((item, index) => (
            <CategoryDestinationDetail
              key={item.id}
              item={item}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Back button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/destinations")}
              className="inline-flex items-center font-medium text-majestic-orange hover:text-majestic-amber transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Destinations
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DestinationCategoryPage;
