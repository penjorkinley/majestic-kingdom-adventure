
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';
import { destinationDetails } from '@/data/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const destination = destinationDetails.find(dest => dest.id.toString() === id);
  
  useEffect(() => {
    if (!destination) {
      navigate('/destinations');
    }
    
    window.scrollTo(0, 0);
  }, [destination, navigate]);
  
  if (!destination) return null;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="relative h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center text-majestic-gold mb-2">
                  <MapPin size={20} className="mr-2" />
                  <span className="text-lg">{destination.location}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-shadow-lg mb-4">
                  {destination.name}
                </h1>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {destination.fullDescription}
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Highlights</h2>
              <ul className="mb-10 space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full w-6 h-6 flex-shrink-0 mr-3 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-xl h-fit">
              <h3 className="text-xl font-bold mb-4">Essential Information</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center text-majestic-amber mb-2">
                    <Calendar size={18} className="mr-2" />
                    <h4 className="font-semibold">Best Time to Visit</h4>
                  </div>
                  <p className="text-muted-foreground ml-7">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center text-majestic-amber mb-2">
                    <Navigation size={18} className="mr-2" />
                    <h4 className="font-semibold">How to Reach</h4>
                  </div>
                  <p className="text-muted-foreground ml-7">
                    {destination.howToReach}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-border">
                  <a 
                    href="/contact" 
                    className="block w-full bg-majestic-gold hover:bg-majestic-amber text-white text-center py-3 rounded-lg transition-colors font-medium"
                  >
                    Enquire About This Destination
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back button */}
          <div className="mt-12">
            <button 
              onClick={() => navigate('/destinations')}
              className="flex items-center font-medium text-majestic-orange hover:text-majestic-amber transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
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
