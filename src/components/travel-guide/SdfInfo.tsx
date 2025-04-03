import React from "react";

const SdfInfo = () => {
  return (
    <div className="mt-24 bg-gradient-to-br from-majestic-gold/20 to-transparent p-8 rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          About the Sustainable Development Fee
        </h2>
        <p className="text-lg mb-6">
          The Sustainable Development Fee (SDF) of US$100 per adult per day is a
          direct contribution to Bhutan's sustainable development, environmental
          conservation, and preservation of cultural heritage. This fee:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 dark:bg-card/80 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-majestic-gold">
              Supports Local Communities
            </h3>
            <p>
              Funds infrastructure, healthcare, and education for Bhutanese
              citizens, ensuring tourism benefits everyone.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-card/80 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-majestic-gold">
              Preserves Environment
            </h3>
            <p>
              Maintains Bhutan's commitment to being carbon negative, protecting
              forests and biodiversity.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-card/80 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-majestic-gold">
              Ensures Quality Tourism
            </h3>
            <p>
              Promotes high-value, low-impact tourism that preserves the
              authentic Bhutanese experience.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-card/80 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-majestic-gold">
              Safeguards Culture
            </h3>
            <p>
              Helps maintain Bhutan's rich cultural heritage, ancient
              traditions, and sacred sites.
            </p>
          </div>
        </div>
        <p className="text-center mt-8">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-majestic-gold hover:bg-majestic-amber text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Ask Us About Visa & SDF
          </a>
        </p>
      </div>
    </div>
  );
};

export default SdfInfo;
