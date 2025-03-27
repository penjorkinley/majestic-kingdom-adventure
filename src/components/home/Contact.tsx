import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (formContainerRef.current) observer.observe(formContainerRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          name: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/50 to-muted/90 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-majestic-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-majestic-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container-custom">
        <div
          ref={contactRef}
          className="text-center mb-16 opacity-0 transition-all duration-700"
        >
          <div className="inline-block relative mb-3">
            <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-majestic-amber/20 animate-ping"></span>
            <span
              className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-majestic-amber/20 animate-ping"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
          <h2 className="h2 mb-4">
            Get in{" "}
            <span className="text-majestic-gold relative">
              Touch
              <span className="absolute bottom-0 left-0 w-full rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you plan your perfect cultural journey. Contact our
            travel experts today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Information Card */}
          <div
            ref={infoRef}
            className="lg:col-span-5 bg-white dark:bg-card rounded-2xl shadow-xl overflow-hidden opacity-0 transition-all duration-700"
          >
            <div className="h-32 bg-gradient-to-r from-majestic-amber to-majestic-gold relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] opacity-20 bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-8">
                <div className="flex items-start transition-all hover:translate-x-2 duration-300">
                  <div className="bg-majestic-gold/10 p-4 rounded-full mr-5">
                    <Mail size={24} className="text-majestic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <a
                      href="mailto:info@majestickingdom.com"
                      className="text-muted-foreground hover:text-majestic-gold transition-colors block"
                    >
                      info@majestickingdom.com
                    </a>
                    <a
                      href="mailto:bookings@majestickingdom.com"
                      className="text-muted-foreground hover:text-majestic-gold transition-colors block"
                    >
                      bookings@majestickingdom.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start transition-all hover:translate-x-2 duration-300">
                  <div className="bg-majestic-gold/10 p-4 rounded-full mr-5">
                    <Phone size={24} className="text-majestic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start transition-all hover:translate-x-2 duration-300">
                  <div className="bg-majestic-gold/10 p-4 rounded-full mr-5">
                    <MapPin size={24} className="text-majestic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">123 Temple Street</p>
                    <p className="text-muted-foreground">
                      Golden City, Kingdom 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-muted">
                <h4 className="font-medium mb-5">Connect With Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: <Facebook size={18} />, label: "Facebook" },
                    { icon: <Instagram size={18} />, label: "Instagram" },
                    { icon: <Twitter size={18} />, label: "Twitter" },
                    { icon: <Linkedin size={18} />, label: "LinkedIn" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted transition-all duration-300 hover:bg-majestic-gold hover:text-white hover:scale-110 hover:shadow-lg"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div
            ref={formContainerRef}
            className="lg:col-span-7 bg-white dark:bg-card rounded-2xl shadow-xl p-8 opacity-0 transition-all duration-700 delay-200"
          >
            <h3 className="text-2xl font-serif font-bold mb-6" id="book">
              Inquire About Our Tours
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                  Thank You!
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  Your inquiry has been submitted successfully. One of our
                  travel experts will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1rem",
                      }}
                    >
                      <option value="">Select a destination</option>
                      <option value="Paro">Paro, Bhutan</option>
                      <option value="Thimphu">Thimphu, Bhutan</option>
                      <option value="Punakha">Punakha, Bhutan</option>
                      <option value="Bumthang">Bumthang, Bhutan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-majestic-orange to-majestic-amber text-white py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden relative group ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-lg hover:scale-[1.02]"
                  }`}
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000"></span>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message{" "}
                      <Send
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
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
