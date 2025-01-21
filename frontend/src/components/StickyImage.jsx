import React from "react";

const StickyImages = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
    "https://images.ctfassets.net/hdznx4p7ef81/4yTxFngCbpckNsPqUzBuWz/b3ff8703448712df81577b93ff277a5d/6._APC_Proudly_Made_in_the_USA.png",
  ];

  return (
    <section className="relative">
      {/* Sticky Section */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* Full-Width Image Container */}
          <div className="flex items-center justify-center w-full h-full">
            {/* Left Image */}
            <div className="w-1/2 h-auto max-h-full flex items-center justify-center">
              <img
                src={images[0]}
                alt="Product 1"
                className="w-auto h-[90%] max-w-full object-contain"
              />
            </div>

            {/* Right Image */}
            <div className="w-1/2 h-auto max-h-full flex items-center justify-center">
              <img
                src={images[1]}
                alt="Product 2"
                className="w-auto h-[90%] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyImages;
