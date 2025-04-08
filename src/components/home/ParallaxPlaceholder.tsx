import React from "react";

const ParallaxPlaceholder = () => {
  return (
    <section
      className="section-padding relative overflow-hidden h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/home/trashiyangtse-amp-sripimanwat.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h2 text-white mb-4">
            Experience <span className="text-majestic-gold">Bhutan</span> With
            Us
          </h2>
          <p className="text-xl text-white/80 mb-6">
            Your Portal to the Realm of the Thunder Dragon
          </p>
          <p className="text-lg text-white/90 mb-8">
            We craft authentic experiences that connect you with Bhutan's rich
            cultural heritage, breathtaking landscapes, and spiritual
            traditions. Our locally-guided tours ensure you experience the
            genuine warmth and wonder of this Himalayan kingdom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxPlaceholder;
