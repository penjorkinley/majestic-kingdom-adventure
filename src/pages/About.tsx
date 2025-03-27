import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Check, Heart, Globe, Users, Shield, Compass } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pb-20">
        {/* Hero Section */}
        <Hero
          backgroundImage="https://images.unsplash.com/photo-1599006934204-9e68d61ae8dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
          title={
            <>
              About <span className="text-majestic-gold">Bhutan</span> & Us
            </>
          }
          subtitle="Discover the magic of Bhutan with Majestic Kingdom Adventure"
          fullHeight={false}
        />

        <div className="container-custom">
          {/* About Bhutan Section */}
          <section className="py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Land of Thunder Dragon
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Bhutan, nestled in the eastern Himalayas, is a land of
                  breathtaking landscapes, ancient monasteries, and rich
                  cultural heritage. Known as "Druk Yul" or the Land of the
                  Thunder Dragon, this small kingdom has preserved its unique
                  identity and traditions while embracing sustainable
                  development through its philosophy of Gross National
                  Happiness.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From snow-capped mountains and pristine forests to vibrant
                  festivals and ornate temples, Bhutan offers visitors an
                  authentic and transformative experience. The country's
                  commitment to environmental conservation has made it the
                  world's only carbon-negative country, with over 70% of its
                  land covered in forests.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond its natural beauty, Bhutan's true treasure is its
                  people, known for their warmth, hospitality, and deep
                  spiritual values. A journey to Bhutan is not just a
                  vacation—it's an opportunity to reconnect with nature,
                  experience a living cultural heritage, and gain insights into
                  a way of life that prioritizes happiness and well-being over
                  material wealth.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1566553253535-2473cf16cf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
                  alt="Bhutan Landscape"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-16 md:py-20 border-t border-border">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Majestic Kingdom Adventure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your Gateway to Bhutan's Hidden Wonders - Crafting unforgettable
                cultural journeys across the Land of the Thunder Dragon
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80"
                  alt="Bhutan Tour Guide"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Majestic Kingdom Adventure is a dedicated tour agency
                  specializing in personalized travel experiences in Bhutan and
                  beyond. With a team of experienced guides and travel experts,
                  we craft journeys that showcase Bhutan's rich culture,
                  stunning landscapes, and spiritual heritage.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our vision is to inspire unforgettable journeys through
                  Bhutan's majestic landscapes, rich culture, and authentic
                  experiences. Whether you're seeking cultural immersion,
                  thrilling adventures, or serene retreats, we ensure a seamless
                  and enriching journey through this unique Himalayan kingdom.
                </p>

                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full p-1 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span>
                      <strong>Authentic Experiences</strong> – Provide immersive
                      and culturally rich travel experiences that reflect the
                      true essence of Bhutan.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full p-1 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span>
                      <strong>Sustainable Tourism</strong> – Promote responsible
                      and eco-friendly tourism practices that preserve Bhutan's
                      natural and cultural heritage.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full p-1 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span>
                      <strong>Exceptional Service</strong> – Deliver
                      personalized, high-quality services with a focus on
                      hospitality, comfort, and safety.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full p-1 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span>
                      <strong>Adventure & Exploration</strong> – Offer diverse
                      travel experiences, from serene spiritual retreats to
                      thrilling outdoor adventures.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-majestic-gold/20 text-majestic-gold rounded-full p-1 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span>
                      <strong>Community Engagement</strong> – Support local
                      communities by promoting ethical tourism and creating
                      economic opportunities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-20 border-t border-border">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the Majestic Kingdom Adventure difference - where
                passion meets expertise to create your perfect Bhutanese
                adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Our guides are local Bhutanese with deep knowledge of the
                  culture, history, and hidden gems that most tourists miss.
                  Their personal insights and connections create authentic
                  experiences beyond the typical tourist path.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We craft each itinerary to match your personal interests,
                  pace, and preferences. Unlike large tour companies, we offer
                  flexible arrangements and attentive service that puts your
                  experience first.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Sustainable Practices
                </h3>
                <p className="text-muted-foreground">
                  We're committed to preserving Bhutan's pristine environment
                  and cultural heritage through responsible tourism practices,
                  supporting local communities, and minimizing our ecological
                  footprint.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety & Reliability</h3>
                <p className="text-muted-foreground">
                  Your safety and comfort are our priorities. We maintain high
                  standards for accommodations, transportation, and activities,
                  with reliable support available throughout your journey.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Compass className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unique Experiences</h3>
                <p className="text-muted-foreground">
                  We go beyond standard itineraries to offer exclusive
                  experiences like home stays with local families, private
                  monastery visits, traditional cooking classes, and access to
                  seasonal festivals.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover-lift transition-all">
                <div className="w-14 h-14 bg-majestic-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-majestic-gold w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Passion for Bhutan</h3>
                <p className="text-muted-foreground">
                  Our love for Bhutan's culture, people, and landscapes shines
                  through in everything we do. We're not just selling
                  tours—we're sharing a country we love and helping you make
                  meaningful connections.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
