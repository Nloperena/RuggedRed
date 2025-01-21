// We import React for building our component
import React, { useState, useEffect } from "react";
// We import motion and AnimatePresence to animate things
import { motion, AnimatePresence } from "framer-motion";
// We import useSwipeable to detect swipes
import { useSwipeable } from "react-swipeable";

const ResponsiveCarousel = () => {
  // Here are the image URLs we want to show
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
    "https://images.ctfassets.net/hdznx4p7ef81/4yTxFngCbpckNsPqUzBuWz/b3ff8703448712df81577b93ff277a5d/6._APC_Proudly_Made_in_the_USA.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6jB5xUuhgI5RerYTNV6HMe/2db7e3c3fe916c054165eb43adee06ba/7._APC_Easy_to_Use_2.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
    "https://images.ctfassets.net/hdznx4p7ef81/4yTxFngCbpckNsPqUzBuWz/b3ff8703448712df81577b93ff277a5d/6._APC_Proudly_Made_in_the_USA.png",
  ];

  // currentIndex tells us which "position" the carousel is on
  const [currentIndex, setCurrentIndex] = useState(0);
  // imagesPerView tells us how many images to show at once
  const [imagesPerView, setImagesPerView] = useState(3);
  // direction helps us know if we're moving left or right
  const [direction, setDirection] = useState(0);

  // We watch the window size and update how many images to show
  useEffect(() => {
    const updateViewCount = () => {
      if (window.innerWidth >= 1024) {
        // Big screens show 3 images
        setImagesPerView(3);
      } else if (window.innerWidth >= 640) {
        // Medium screens show 2 images
        setImagesPerView(2);
      } else {
        // Small screens show 1 image
        setImagesPerView(1);
      }
    };

    // We run this when the page loads
    updateViewCount();
    // Then we run it again if the window size changes
    window.addEventListener("resize", updateViewCount);
    // Clean up the event listener when the component goes away
    return () => window.removeEventListener("resize", updateViewCount);
  }, []);

  // totalImages is how many images we have
  const totalImages = images.length;

  // This helps us detect swipes on touch or mouse
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // This function moves the carousel to the next set of images
  const goToNext = () => {
    setDirection(1); // We set direction to 1 (moving forward)
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  // This function moves the carousel to the previous set of images
  const goToPrevious = () => {
    setDirection(-1); // We set direction to -1 (moving backward)
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  // We figure out which images should be shown right now
  const visibleImages = [
    ...images.slice(currentIndex, currentIndex + imagesPerView),
    ...images.slice(0, Math.max(0, currentIndex + imagesPerView - totalImages)),
  ];

  // Our animation "variants" to slide in or out
  const variants = {
    // enter is how the new images start off-screen
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300, // If dir > 0, they come from right, else left
      opacity: 0,
    }),
    // center is how the images look once they're in the middle
    center: {
      x: 0,
      opacity: 1,
    },
    // exit is how the old images leave
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300, // If dir < 0, exit to the right, else left
      opacity: 0,
    }),
  };

  return (
    // Our main wrapper that has everything
    <div className="w-full relative overflow-hidden bg-white">
      {/* Carousel Headline */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl font-bold text-[#D3242A]"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          EVERYDAY SOLUTIONS
        </h2>
        <p className="text-lg text-gray-600">
          From Heavy-Duty to Everyday – Built for All Your Needs.
        </p>
      </div>

      {/* We wrap the images in a swipeable area */}
      <div className="relative flex items-center justify-center w-full" {...handlers}>
        <div className="flex overflow-hidden w-full max-w-[90rem]">
          {/* AnimatePresence will let us show enter/exit animations */}
          <AnimatePresence initial={false} custom={direction}>
            {/* We wrap the entire set of images in ONE motion div */}
            <motion.div
              // Key must change when currentIndex changes, so we use currentIndex as the key
              key={currentIndex}
              // We pass direction to tell variants which way to slide
              custom={direction}
              // The variants are what define the animations
              variants={variants}
              // We start with "enter"
              initial="enter"
              // Then go to "center"
              animate="center"
              // When unmounting, use "exit"
              exit="exit"
              // The transition sets how fast or slow the movement is
              transition={{ duration: 0.5 }}
              // We make it flex so images can be in a row
              className="flex w-full"
            >
              {/* Map over visibleImages to show them in this row */}
              {visibleImages.map((image, index) => (
                // We combine image+index for a unique key
                <div key={image + index} className={`flex-1 w-1/${imagesPerView} h-auto`}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* This is our bottom area with arrows and dots */}
      <div className="mt-6 flex items-center justify-center">
        {/* Left arrow button */}
        <button
          onClick={goToPrevious}
          className="bg-[#D3242A] text-white w-10 h-10 rounded-full shadow-md hover:bg-[#B91D23] focus:ring-2 focus:ring-[#B91D23] transition-transform duration-300"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* Pagination dots */}
        <div className="flex items-center mx-4 space-x-2">
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

        {/* Right arrow button */}
        <button
          onClick={goToNext}
          className="bg-[#D3242A] text-white w-10 h-10 rounded-full shadow-md hover:bg-[#B91D23] focus:ring-2 focus:ring-[#B91D23] transition-transform duration-300"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
