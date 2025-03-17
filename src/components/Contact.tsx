
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">Get in <span className="text-majestic-gold">Touch</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you plan your perfect cultural journey. Contact our travel experts today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-majestic-gold/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-majestic-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@majestickingdom.com</p>
                  <p className="text-muted-foreground">bookings@majestickingdom.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-majestic-gold/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-majestic-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-majestic-gold/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-majestic-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Temple Street</p>
                  <p className="text-muted-foreground">Golden City, Kingdom 12345</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-muted w-10 h-10 rounded-full flex items-center justify-center hover:bg-majestic-gold/20 transition-colors"
                  >
                    <i className={`fab fa-${social} text-majestic-gold`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-6" id="book">Inquire About Our Tours</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">Thank You!</h4>
                <p className="text-green-700 dark:text-green-400">
                  Your inquiry has been submitted successfully. One of our travel experts will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-muted-foreground mb-1">
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                    >
                      <option value="">Select a destination</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-majestic-orange hover:bg-majestic-amber text-white py-3 px-6 rounded-lg transition-all flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
