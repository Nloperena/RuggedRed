import React, { useEffect, useState } from "react";

const StickyImage = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png",
  ];

  const [isPortrait, setIsPortrait] = useState(true); // Default to portrait

  // Detect screen orientation using matchMedia
  useEffect(() => {
    const updateOrientation = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(portrait);
    };

    // Check orientation on mount
    updateOrientation();

    // Add event listener for orientation change
    window.addEventListener("resize", updateOrientation);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {isPortrait ? (
        // Top/Bottom Layout for Mobile and Portrait
        <div className="flex flex-col h-full">
          {/* Top Image */}
          <div className="flex-1 relative">
            <img
              src={images[0]}
              alt="Top Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Bottom Image */}
          <div className="flex-1 relative">
            <img
              src={images[1]}
              alt="Bottom Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        // Left/Right Layout for Square and Landscape
        <div className="flex w-full h-full">
          {/* Left Image */}
          <div className="w-1/2 relative h-full">
            <img
              src={images[0]}
              alt="Left Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Right Image */}
          <div className="w-1/2 relative h-full">
            <img
              src={images[1]}
              alt="Right Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyImage;
