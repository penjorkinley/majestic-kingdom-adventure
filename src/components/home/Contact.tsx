import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

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

  // Fetch countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoadingCountries(true);

      try {
        // First try the REST Countries API
        const response = await fetch("https://restcountries.com/v3.1/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Set a timeout to avoid hanging requests
          signal: AbortSignal.timeout(10000),
        });

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const formattedCountries = data
            .filter((country) => country.name && country.name.common)
            .map((country: any) => ({
              name: country.name.common,
              code:
                country.cca2 ||
                country.name.common.substring(0, 2).toUpperCase(),
            }))
            .sort((a: any, b: any) => a.name.localeCompare(b.name));

          if (formattedCountries.length > 0) {
            setCountries(formattedCountries);
            setIsLoadingCountries(false);
            return;
          }
        }

        // If we get here, the API didn't return useful data, so use fallback
        throw new Error("API returned invalid data format");
      } catch (error) {
        console.error("Error fetching countries from API:", error);
        // Fallback with a comprehensive list of countries
        setCountries([
          { name: "Afghanistan", code: "AF" },
          { name: "Albania", code: "AL" },
          { name: "Algeria", code: "DZ" },
          { name: "Andorra", code: "AD" },
          { name: "Angola", code: "AO" },
          { name: "Antigua and Barbuda", code: "AG" },
          { name: "Argentina", code: "AR" },
          { name: "Armenia", code: "AM" },
          { name: "Australia", code: "AU" },
          { name: "Austria", code: "AT" },
          { name: "Azerbaijan", code: "AZ" },
          { name: "Bahamas", code: "BS" },
          { name: "Bahrain", code: "BH" },
          { name: "Bangladesh", code: "BD" },
          { name: "Barbados", code: "BB" },
          { name: "Belarus", code: "BY" },
          { name: "Belgium", code: "BE" },
          { name: "Belize", code: "BZ" },
          { name: "Benin", code: "BJ" },
          { name: "Bhutan", code: "BT" },
          { name: "Bolivia", code: "BO" },
          { name: "Bosnia and Herzegovina", code: "BA" },
          { name: "Botswana", code: "BW" },
          { name: "Brazil", code: "BR" },
          { name: "Brunei", code: "BN" },
          { name: "Bulgaria", code: "BG" },
          { name: "Burkina Faso", code: "BF" },
          { name: "Burundi", code: "BI" },
          { name: "Cabo Verde", code: "CV" },
          { name: "Cambodia", code: "KH" },
          { name: "Cameroon", code: "CM" },
          { name: "Canada", code: "CA" },
          { name: "Central African Republic", code: "CF" },
          { name: "Chad", code: "TD" },
          { name: "Chile", code: "CL" },
          { name: "China", code: "CN" },
          { name: "Colombia", code: "CO" },
          { name: "Comoros", code: "KM" },
          { name: "Congo", code: "CG" },
          { name: "Costa Rica", code: "CR" },
          { name: "Croatia", code: "HR" },
          { name: "Cuba", code: "CU" },
          { name: "Cyprus", code: "CY" },
          { name: "Czech Republic", code: "CZ" },
          { name: "Denmark", code: "DK" },
          { name: "Djibouti", code: "DJ" },
          { name: "Dominica", code: "DM" },
          { name: "Dominican Republic", code: "DO" },
          { name: "Ecuador", code: "EC" },
          { name: "Egypt", code: "EG" },
          { name: "El Salvador", code: "SV" },
          { name: "Equatorial Guinea", code: "GQ" },
          { name: "Eritrea", code: "ER" },
          { name: "Estonia", code: "EE" },
          { name: "Eswatini", code: "SZ" },
          { name: "Ethiopia", code: "ET" },
          { name: "Fiji", code: "FJ" },
          { name: "Finland", code: "FI" },
          { name: "France", code: "FR" },
          { name: "Gabon", code: "GA" },
          { name: "Gambia", code: "GM" },
          { name: "Georgia", code: "GE" },
          { name: "Germany", code: "DE" },
          { name: "Ghana", code: "GH" },
          { name: "Greece", code: "GR" },
          { name: "Grenada", code: "GD" },
          { name: "Guatemala", code: "GT" },
          { name: "Guinea", code: "GN" },
          { name: "Guinea-Bissau", code: "GW" },
          { name: "Guyana", code: "GY" },
          { name: "Haiti", code: "HT" },
          { name: "Honduras", code: "HN" },
          { name: "Hungary", code: "HU" },
          { name: "Iceland", code: "IS" },
          { name: "India", code: "IN" },
          { name: "Indonesia", code: "ID" },
          { name: "Iran", code: "IR" },
          { name: "Iraq", code: "IQ" },
          { name: "Ireland", code: "IE" },
          { name: "Israel", code: "IL" },
          { name: "Italy", code: "IT" },
          { name: "Jamaica", code: "JM" },
          { name: "Japan", code: "JP" },
          { name: "Jordan", code: "JO" },
          { name: "Kazakhstan", code: "KZ" },
          { name: "Kenya", code: "KE" },
          { name: "Kiribati", code: "KI" },
          { name: "Korea, North", code: "KP" },
          { name: "Korea, South", code: "KR" },
          { name: "Kuwait", code: "KW" },
          { name: "Kyrgyzstan", code: "KG" },
          { name: "Laos", code: "LA" },
          { name: "Latvia", code: "LV" },
          { name: "Lebanon", code: "LB" },
          { name: "Lesotho", code: "LS" },
          { name: "Liberia", code: "LR" },
          { name: "Libya", code: "LY" },
          { name: "Liechtenstein", code: "LI" },
          { name: "Lithuania", code: "LT" },
          { name: "Luxembourg", code: "LU" },
          { name: "Madagascar", code: "MG" },
          { name: "Malawi", code: "MW" },
          { name: "Malaysia", code: "MY" },
          { name: "Maldives", code: "MV" },
          { name: "Mali", code: "ML" },
          { name: "Malta", code: "MT" },
          { name: "Marshall Islands", code: "MH" },
          { name: "Mauritania", code: "MR" },
          { name: "Mauritius", code: "MU" },
          { name: "Mexico", code: "MX" },
          { name: "Micronesia", code: "FM" },
          { name: "Moldova", code: "MD" },
          { name: "Monaco", code: "MC" },
          { name: "Mongolia", code: "MN" },
          { name: "Montenegro", code: "ME" },
          { name: "Morocco", code: "MA" },
          { name: "Mozambique", code: "MZ" },
          { name: "Myanmar", code: "MM" },
          { name: "Namibia", code: "NA" },
          { name: "Nauru", code: "NR" },
          { name: "Nepal", code: "NP" },
          { name: "Netherlands", code: "NL" },
          { name: "New Zealand", code: "NZ" },
          { name: "Nicaragua", code: "NI" },
          { name: "Niger", code: "NE" },
          { name: "Nigeria", code: "NG" },
          { name: "North Macedonia", code: "MK" },
          { name: "Norway", code: "NO" },
          { name: "Oman", code: "OM" },
          { name: "Pakistan", code: "PK" },
          { name: "Palau", code: "PW" },
          { name: "Palestine", code: "PS" },
          { name: "Panama", code: "PA" },
          { name: "Papua New Guinea", code: "PG" },
          { name: "Paraguay", code: "PY" },
          { name: "Peru", code: "PE" },
          { name: "Philippines", code: "PH" },
          { name: "Poland", code: "PL" },
          { name: "Portugal", code: "PT" },
          { name: "Qatar", code: "QA" },
          { name: "Romania", code: "RO" },
          { name: "Russia", code: "RU" },
          { name: "Rwanda", code: "RW" },
          { name: "Saint Kitts and Nevis", code: "KN" },
          { name: "Saint Lucia", code: "LC" },
          { name: "Saint Vincent and the Grenadines", code: "VC" },
          { name: "Samoa", code: "WS" },
          { name: "San Marino", code: "SM" },
          { name: "Sao Tome and Principe", code: "ST" },
          { name: "Saudi Arabia", code: "SA" },
          { name: "Senegal", code: "SN" },
          { name: "Serbia", code: "RS" },
          { name: "Seychelles", code: "SC" },
          { name: "Sierra Leone", code: "SL" },
          { name: "Singapore", code: "SG" },
          { name: "Slovakia", code: "SK" },
          { name: "Slovenia", code: "SI" },
          { name: "Solomon Islands", code: "SB" },
          { name: "Somalia", code: "SO" },
          { name: "South Africa", code: "ZA" },
          { name: "South Sudan", code: "SS" },
          { name: "Spain", code: "ES" },
          { name: "Sri Lanka", code: "LK" },
          { name: "Sudan", code: "SD" },
          { name: "Suriname", code: "SR" },
          { name: "Sweden", code: "SE" },
          { name: "Switzerland", code: "CH" },
          { name: "Syria", code: "SY" },
          { name: "Taiwan", code: "TW" },
          { name: "Tajikistan", code: "TJ" },
          { name: "Tanzania", code: "TZ" },
          { name: "Thailand", code: "TH" },
          { name: "Timor-Leste", code: "TL" },
          { name: "Togo", code: "TG" },
          { name: "Tonga", code: "TO" },
          { name: "Trinidad and Tobago", code: "TT" },
          { name: "Tunisia", code: "TN" },
          { name: "Turkey", code: "TR" },
          { name: "Turkmenistan", code: "TM" },
          { name: "Tuvalu", code: "TV" },
          { name: "Uganda", code: "UG" },
          { name: "Ukraine", code: "UA" },
          { name: "United Arab Emirates", code: "AE" },
          { name: "United Kingdom", code: "GB" },
          { name: "United States", code: "US" },
          { name: "Uruguay", code: "UY" },
          { name: "Uzbekistan", code: "UZ" },
          { name: "Vanuatu", code: "VU" },
          { name: "Vatican City", code: "VA" },
          { name: "Venezuela", code: "VE" },
          { name: "Vietnam", code: "VN" },
          { name: "Yemen", code: "YE" },
          { name: "Zambia", code: "ZM" },
          { name: "Zimbabwe", code: "ZW" },
        ]);
      } finally {
        setIsLoadingCountries(false);
      }
    };

    fetchCountries();
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Combine the name fields for EmailJS
    const emailJSFormData = {
      ...formData,
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
    };

    const serviceID = "service_30z1zmm";
    const templateID = "template_kk1owgq";
    const userID = "3TPLPpS-bFLrTghaO"; // public key from EmailJS

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
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-majestic-gold/50 focus:border-majestic-gold transition-all outline-none"
                      required
                    />
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
