import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const ResponsiveCarousel = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
    "https://images.ctfassets.net/hdznx4p7ef81/4yTxFngCbpckNsPqUzBuWz/b3ff8703448712df81577b93ff277a5d/6._APC_Proudly_Made_in_the_USA.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6jB5xUuhgI5RerYTNV6HMe/2db7e3c3fe916c054165eb43adee06ba/7._APC_Easy_to_Use_2.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
    "https://images.ctfassets.net/hdznx4p7ef81/4yTxFngCbpckNsPqUzBuWz/b3ff8703448712df81577b93ff277a5d/6._APC_Proudly_Made_in_the_USA.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6jB5xUuhgI5RerYTNV6HMe/2db7e3c3fe916c054165eb43adee06ba/7._APC_Easy_to_Use_2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);

  const visibleImages = [
    images[(currentIndex - 1 + totalImages) % totalImages], // Previous
    images[currentIndex], // Current
    images[(currentIndex + 1) % totalImages], // Next
  ];

  const imageAnimation = {
    initial: { x: 300, opacity: 0 }, // Slide in from the right
    animate: { x: 0, opacity: 1 }, // Center
    exit: { x: -300, opacity: 0 }, // Slide out to the left
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto px-4 py-12">
      {/* Headline */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl font-bold text-[#D3242A]"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          Works Great in Every Scenario
        </h2>
        <p className="text-lg text-gray-600">
          From Heavy-Duty to Everyday – Built for All Your Needs.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-center">
        {/* Arrow Block (Left) */}
        <div className="absolute left-0 -translate-x-[3rem] flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="bg-[#D3242A] text-white p-4 rounded-full shadow-md hover:bg-[#B91D23] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B91D23] transition-transform duration-300"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
        </div>

        {/* Carousel Container */}
        <div
          className="relative flex overflow-hidden justify-between space-x-4"
          {...handlers}
        >
          <AnimatePresence>
            {visibleImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-1"
                initial={imageAnimation.initial}
                animate={imageAnimation.animate}
                exit={imageAnimation.exit}
                transition={imageAnimation.transition}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-80 object-contain rounded-md shadow-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Arrow Block (Right) */}
        <div className="absolute right-0 translate-x-[3rem] flex items-center justify-center">
          <button
            onClick={goToNext}
            className="bg-[#D3242A] text-white p-4 rounded-full shadow-md hover:bg-[#B91D23] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B91D23] transition-transform duration-300"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Pagination Block */}
      <div className="mt-8 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-[#D3242A]" : "bg-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#D3242A]`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
