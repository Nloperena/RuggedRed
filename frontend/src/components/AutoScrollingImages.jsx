import React, { useRef, useState, useEffect } from "react";
import Countertop from "../assets/versatileSurfaces/Countertop.jpg";
import TileFloor from "../assets/versatileSurfaces/Tile Floor.jpg";
import Machinery from "../assets/versatileSurfaces/Machinery.jpg";
import Cookware from "../assets/versatileSurfaces/Cookware.jpg";
import PaintedSurfaces from "../assets/versatileSurfaces/Painted Surfaces.jpg";
import Appliances from "../assets/versatileSurfaces/Appliances.jpg";
import Glass from "../assets/versatileSurfaces/Glass.jpg";

export default function AutoScrollingImages() {
  const images = [
    { src: Countertop, label: "Countertop" },
    { src: TileFloor, label: "Tile Floor" },
    { src: Machinery, label: "Machinery" },
    { src: Cookware, label: "Cookware" },
    { src: PaintedSurfaces, label: "Painted Surfaces" },
    { src: Appliances, label: "Appliances" },
    { src: Glass, label: "Glass" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [imagesPerView, setImagesPerView] = useState(3);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % (images.length - imagesPerView + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images.length, imagesPerView]);

  // Adjust images per view based on screen size
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerView(3);
      } else if (window.innerWidth >= 640) {
        setImagesPerView(2);
      } else {
        setImagesPerView(1);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  // Scroll container to the active image
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollIndex * (scrollContainerRef.current.offsetWidth / imagesPerView);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollIndex, imagesPerView]);

  const goToPrevious = () => {
    setScrollIndex((prev) =>
      prev === 0 ? images.length - imagesPerView : prev - 1
    );
  };

  const goToNext = () => {
    setScrollIndex((prev) =>
      prev === images.length - imagesPerView ? 0 : prev + 1
    );
  };

  const visibleDots = images.length - imagesPerView + 1;

  return (
    <div className="relative w-full bg-white py-16" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
      {/* Headline */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-[#D3242A] uppercase mb-4">
          Everyday Solutions
        </h2>
        <p className="text-lg text-gray-600">
          From Heavy-Duty to Everyday – Built for All Your Needs.
        </p>
      </div>

      {/* Scrolling Images */}
      <div
        className="relative overflow-hidden w-full max-w-[90rem] mx-auto flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button
          className="absolute left-0 bg-[#D3242A] text-white w-10 h-10 rounded-full z-10 shadow-md hover:bg-[#B91D23] transition-transform duration-300"
          onClick={goToPrevious}
        >
          &#10094;
        </button>

        {/* Scroll Container */}
        <div
          className="flex overflow-x-hidden w-full"
          ref={scrollContainerRef}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 px-4 text-center"
              style={{ flex: "0 0 auto" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-2 text-base font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 bg-[#D3242A] text-white w-10 h-10 rounded-full z-10 shadow-md hover:bg-[#B91D23] transition-transform duration-300"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        {Array.from({ length: visibleDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setScrollIndex(index)}
            className={`w-4 h-4 rounded-full ${
              scrollIndex === index ? "bg-[#D3242A]" : "bg-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#D3242A]`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
