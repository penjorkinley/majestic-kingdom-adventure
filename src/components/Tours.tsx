import React, { useState } from 'react';
import { Calendar, Clock, Users, Star, ArrowRight } from 'lucide-react';

interface Tour {
  id: number;
  title: string;
  image: string;
  rating: number;
  duration: string;
  groupSize: string;
  price: number;
  featured?: boolean;
  description: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Temples of Ancient Cambodia",
    image: "https://images.unsplash.com/photo-1602149546099-3e9d7a9a2c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    rating: 4.9,
    duration: "7 days",
    groupSize: "Max 12",
    price: 1899,
    featured: true,
    description: "Explore the magnificent temples of Angkor and immerse yourself in Cambodian culture with expert local guides."
  },
  {
    id: 2,
    title: "Golden Palaces of Thailand",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    rating: 4.8,
    duration: "10 days",
    groupSize: "Max 10",
    price: 2199,
    description: "Discover Bangkok's grand palaces, ancient temples, and experience authentic Thai hospitality."
  },
  {
    id: 3,
    title: "Spiritual Journey to Myanmar",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fb1e24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    rating: 4.7,
    duration: "12 days",
    groupSize: "Max 8",
    price: 2499,
    description: "Visit sacred pagodas, meet local monks, and experience the tranquility of Myanmar's spiritual sites."
  },
  {
    id: 4,
    title: "Himalayan Monastery Trek",
    image: "https://images.unsplash.com/photo-1605649461784-7bd82771a3af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    rating: 4.9,
    duration: "14 days",
    groupSize: "Max 6",
    price: 2899,
    featured: true,
    description: "Trek through breathtaking mountain trails to remote monasteries in the Himalayan foothills."
  }
];

const Tours = () => {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null);

  return (
    <section id="tours" className="section-padding bg-white dark:bg-background relative">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">Our Premium <span className="text-majestic-gold">Tour</span> Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertly crafted journeys combining cultural immersion, historical exploration, and unforgettable experiences
          </p>
        </div>
        
        {/* Featured Tour */}
        {tours.filter(tour => tour.featured).slice(0, 1).map(featuredTour => (
          <div key={featuredTour.id} className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-muted">
              <div className="absolute top-6 left-6 z-10">
                <div className="px-4 py-2 bg-majestic-gold text-white rounded-full text-sm font-medium">
                  Featured Tour
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={featuredTour.image} 
                    alt={featuredTour.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">{featuredTour.title}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-majestic-gold">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(featuredTour.rating) ? 'fill-majestic-gold' : 'stroke-majestic-gold'} 
                        />
                      ))}
                      <span className="ml-2 text-foreground">{featuredTour.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{featuredTour.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2 text-majestic-orange" />
                      <span>{featuredTour.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={18} className="mr-2 text-majestic-orange" />
                      <span>{featuredTour.groupSize}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2 text-majestic-orange" />
                      <span>Available Year-Round</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <p className="text-2xl font-bold text-majestic-gold">${featuredTour.price}</p>
                    </div>
                    
                    <a 
                      href="#book" 
                      className="bg-majestic-orange hover:bg-majestic-amber text-white px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105 flex items-center"
                    >
                      <span className="mr-2">View Details</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Other Tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.filter(tour => !tour.featured).map((tour, index) => (
            <div 
              key={tour.id}
              className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-card hover-lift"
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredTour === tour.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between p-6">
                  <div className="text-white">
                    <div className="flex items-center text-majestic-gold mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(tour.rating) ? 'fill-majestic-gold' : 'stroke-majestic-gold'} 
                        />
                      ))}
                      <span className="ml-2 text-white text-sm">{tour.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold">{tour.title}</h3>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-majestic-orange px-4 py-2 rounded-full text-sm font-bold">
                    ${tour.price}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-majestic-orange" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1 text-majestic-orange" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-2">{tour.description}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-majestic-orange font-medium hover:text-majestic-amber transition-colors underline-animation"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            View All Tours
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tours;
