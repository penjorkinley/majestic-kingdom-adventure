// src/components/gallery/GalleryCopyright.tsx
import React from "react";

const GalleryCopyright: React.FC = () => {
  return (
    <div className="mt-16 p-8 bg-muted rounded-xl">
      <h3 className="text-xl font-bold mb-4">Photography Credits</h3>
      <p className="text-muted-foreground mb-4">
        All photographs are used with permission from the Department of Tourism,
        Bhutan. These images may not be reproduced, downloaded, or used in any
        manner without permission from the rightful copyright owners.
      </p>
      <p className="text-muted-foreground">
        For inquiries about using these images, please contact the Department of
        Tourism directly at{" "}
        <a
          href="https://bhutan.travel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-majestic-gold hover:text-majestic-amber transition-colors"
        >
          www.tourism.gov.bt
        </a>
        .
      </p>
    </div>
  );
};

export default GalleryCopyright;
