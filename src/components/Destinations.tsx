
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinationDetails } from '@/data/destinations';

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe the section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe each card with a delay
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations" className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="h2 mb-4">Explore <span className="text-majestic-gold">Bhutan's</span> Treasures</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover ancient monasteries, majestic fortresses, and breathtaking landscapes across the Kingdom of Bhutan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinationDetails.map((destination, index) => (
            <div
              key={destination.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-md hover-lift opacity-0 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <div className="flex items-center text-majestic-gold">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <Link 
                  to={`/destination/${destination.id}`}
                  className="inline-flex items-center text-majestic-orange font-medium hover:text-majestic-amber transition-colors underline-animation"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
