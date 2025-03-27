import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Calendar, Navigation, ArrowLeft } from "lucide-react";
import { destinationDetails } from "@/data/destinations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const destination = destinationDetails.find(
    (dest) => dest.id.toString() === id
  );

  useEffect(() => {
    if (!destination) {
      navigate("/destinations");
    }

    window.scrollTo(0, 0);
  }, [destination, navigate]);

  if (!destination) return null;

  return (
    <>
      <Navbar />
      <main className="pb-20">
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl text-majestic-gold font-medium">
              {destination.location}
            </p>
          </div>
        </div>

        {/* Tab Navigation in the middle (between hero and content) */}
        <div className="container-custom relative">
          <div className="flex justify-center -mt-8 mb-10">
            <div className="bg-white dark:bg-card rounded-full shadow-lg inline-flex px-2">
              {["overview", "highlights", "essential information"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-6 font-medium transition-all capitalize rounded-full 
                    ${
                      activeTab === tab
                        ? "text-majestic-gold border-b-4 border-majestic-gold"
                        : "text-muted-foreground hover:text-majestic-gold"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-card p-8 rounded-xl shadow-lg">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {destination.fullDescription}
                </p>
              </div>
            )}

            {/* Highlights Tab */}
            {activeTab === "highlights" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Highlights
                </h2>
                <ul className="mb-10 space-y-4">
                  {destination.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start p-4 rounded-lg border border-transparent hover:border-majestic-gold/30 hover:bg-majestic-gold/5 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full w-8 h-8 flex-shrink-0 mr-4 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Essential Information Tab */}
            {activeTab === "essential information" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Essential Information
                </h2>

                <div className="space-y-8">
                  <div className="bg-muted p-6 rounded-xl">
                    <div className="flex items-center text-majestic-amber mb-4">
                      <Calendar size={20} className="mr-3" />
                      <h4 className="text-xl font-semibold">
                        Best Time to Visit
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {destination.bestTimeToVisit}
                    </p>
                  </div>

                  <div className="bg-muted p-6 rounded-xl">
                    <div className="flex items-center text-majestic-amber mb-4">
                      <Navigation size={20} className="mr-3" />
                      <h4 className="text-xl font-semibold">How to Reach</h4>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {destination.howToReach}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <a
                      href="/#contact"
                      className="block w-auto bg-majestic-gold hover:bg-majestic-amber text-white text-center py-4 px-10 rounded-lg transition-all font-medium hover:shadow-lg text-lg"
                    >
                      Enquire About This Destination
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Back button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/destinations")}
              className="flex items-center font-medium text-majestic-orange hover:text-majestic-amber transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 transition-transform group-hover:-translate-x-1"
              />
              Back to Destinations
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DestinationDetail;
