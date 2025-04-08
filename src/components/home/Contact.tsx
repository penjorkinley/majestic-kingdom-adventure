import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import CountryList from "country-list-with-dial-code-and-flag";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle, // Replaced Twitter with MessageCircle for WhatsApp
  Linkedin,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    daysOfVisit: "",
    message: "",
  });

  const [countries, setCountries] = useState<{ name: string; code: string }[]>(
    []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);

  const contactRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const countries = CountryList.getAll();
    const formattedCountries = countries.map((country) => ({
      name: country.name,
      code: country.code,
      dial_code: country.dial_code,
      flag: country.flag,
    }));
    setCountries(formattedCountries);
    setIsLoadingCountries(false);
  }, []);

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

    if (name === "country") {
      const selectedCountry = countries.find((c) => c.name === value);
      setFormData((prev) => ({
        ...prev,
        country: value,
        dialCode: selectedCountry?.dial_code || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Combine the name fields for EmailJS
    const emailJSFormData = {
      // ...formData,
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
      country: `${formData.country}`,
      email: formData.email,
      phone: `${formData?.dialCode}-${formData.phone}`,
      daysOfVisit: formData.daysOfVisit,
      message: formData.message,
    };

    const serviceID = "service_u2lgh5p";
    const templateID = "template_5c3xopd";
    const userID = "9b4zMUNAwosrIZdnM"; // public key from EmailJS

    emailjs
      .send(serviceID, templateID, emailJSFormData, userID)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          daysOfVisit: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error("Email failed to send:", err);
      });
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
              <div className="absolute inset-0 bg-[url('../../thimphu-dzong-Ben-Richards.jpg')] opacity-20 bg-cover bg-center"></div>
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
                      href="mailto:majestickingdomadventure@gmail.com"
                      className="text-muted-foreground hover:text-majestic-gold transition-colors block"
                    >
                      majestickingdomadventure@gmail.com{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-start transition-all hover:translate-x-2 duration-300">
                  <div className="bg-majestic-gold/10 p-4 rounded-full mr-5">
                    <Phone size={24} className="text-majestic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+975 17875602</p>
                  </div>
                </div>

                <div className="flex items-start transition-all hover:translate-x-2 duration-300">
                  <div className="bg-majestic-gold/10 p-4 rounded-full mr-5">
                    <MapPin size={24} className="text-majestic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">387 Zachoe Lam SW</p>
                    <p className="text-muted-foreground">
                      Chang Zamtok, Thimphu{" "}
                    </p>
                    <p className="text-muted-foreground">Bhutan </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-muted">
                <h4 className="font-medium mb-5">Connect With Us</h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: <Facebook size={18} />,
                      label: "Facebook",
                      url: "https://m.facebook.com/share/1C6zQeDAkU/?from_xma_click=xma_web_url&xma_click_id=DD47BF0F-F17E-4FDC-ABFC-96C86408FA48&tam_xma_content_type=0&is_fb_content=true&forward=false&ts=1743729198053&pl=1&wtsid=rdr_00d5dGknmtWaXTY0v",
                    },
                    {
                      icon: <Instagram size={18} />,
                      label: "Instagram",
                      url: "https://www.instagram.com/majestic.kingdom.adventures?igsh=MXY3bnMxcWtza2Q1Ng==",
                    },
                    {
                      icon: <MessageCircle size={18} />,
                      label: "WhatsApp",
                      url: "#", // Placeholder for WhatsApp link
                    },
                    {
                      icon: <Linkedin size={18} />,
                      label: "LinkedIn",
                      url: "https://www.linkedin.com/company/majestic-kingdom-adventure?trk=blended-typeahead",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
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
                {/* Name Fields - First, Middle, Last */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="middleName"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Middle Name
                    </label>
                    <input
                      type="text"
                      id="middleName"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Email Address*
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
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Phone Number*
                    </label>

                    <div className="flex items-center border rounded-lg overflow-hidden max-w-full sm:max-w-md focus-within:ring-2 focus-within:ring-majestic-gold/50 focus-within:border-majestic-gold transition-all">
                      {/* Country Selector with Flag + Dial Code */}
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="bg-muted/30 text-sm sm:text-base px-2 py-3 border-r focus:outline-none"
                        required
                      >
                        <option value="">🌍</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country?.flag} {country?.dial_code}
                          </option>
                        ))}
                      </select>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        className="flex-1 px-4 py-3 bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Country and Days of Visit */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Country of Residence*
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                      disabled={isLoadingCountries}
                    >
                      <option value="">Select your country</option>
                      {isLoadingCountries ? (
                        <option value="" disabled>
                          Loading countries...
                        </option>
                      ) : (
                        countries.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="daysOfVisit"
                      className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                    >
                      Number of Days for Visit*
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="daysOfVisit"
                        name="daysOfVisit"
                        value={formData.daysOfVisit}
                        onChange={handleChange}
                        min="1"
                        max="100"
                        className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Calendar size={18} className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1 transition-all group-focus-within:text-majestic-gold"
                  >
                    Your Message*
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
