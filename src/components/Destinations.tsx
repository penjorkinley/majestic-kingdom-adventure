
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
    name: "Ancient Temples of Angkor",
    location: "Cambodia",
    image: "https://images.unsplash.com/photo-1600184986426-b4d05602c237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Explore the magnificent temples of the ancient Khmer Empire"
  },
  {
    id: 2,
    name: "Golden Palace",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Discover the ornate architecture and rich history of royal palaces"
  },
  {
    id: 3,
    name: "Sacred Pagodas",
    location: "Myanmar",
    image: "https://images.unsplash.com/photo-1540122995631-7c74c451b23c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Visit ancient spiritual sites with stunning golden spires"
  },
  {
    id: 4,
    name: "Himalayan Monasteries",
    location: "Nepal",
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    description: "Journey to remote mountain temples with breathtaking views"
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
          <h2 className="h2 mb-4">Explore <span className="text-majestic-gold">Iconic</span> Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover ancient temples, cultural landmarks, and spiritual sites across Asia's most breathtaking locations
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
