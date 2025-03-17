
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Tiger's Nest Monastery",
    location: "Paro, Bhutan",
    image: "https://images.unsplash.com/photo-1540556805098-1a6387ab1ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Explore this iconic monastery perched on a cliff, offering breathtaking views and spiritual significance"
  },
  {
    id: 2,
    name: "Punakha Dzong",
    location: "Punakha, Bhutan",
    image: "https://images.unsplash.com/photo-1625638332402-57211965d3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Discover the majestic fortress at the confluence of two rivers, showcasing Bhutan's architectural splendor"
  },
  {
    id: 3,
    name: "Dochula Pass",
    location: "Thimphu, Bhutan",
    image: "https://images.unsplash.com/photo-1609939006851-e4c4328598a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Visit this mountain pass with panoramic Himalayan views and 108 memorial chortens"
  },
  {
    id: 4,
    name: "Phobjikha Valley",
    location: "Wangdue, Bhutan",
    image: "https://images.unsplash.com/photo-1623677435560-ee1a346141b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Journey to this glacial valley, home to endangered black-necked cranes and pristine natural beauty"
  }
];

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
          {destinations.map((destination, index) => (
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
                <a 
                  href="#" 
                  className="inline-flex items-center text-majestic-orange font-medium hover:text-majestic-amber transition-colors underline-animation"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
