import React, { useRef, useState, useEffect } from "react";
import Countertop from "../assets/versatileSurfaces/Countertop.jpg";
import TileFloor from "../assets/versatileSurfaces/Tile Floor.jpg";
import Machinery from "../assets/versatileSurfaces/Machinery.jpg";
import Cookware from "../assets/versatileSurfaces/Cookware.jpg";
import PaintedSurfaces from "../assets/versatileSurfaces/Painted Surfaces.jpg";
import Appliances from "../assets/versatileSurfaces/Appliances.jpg";
import Glass from "../assets/versatileSurfaces/Glass.jpg";
import Carpet from "../assets/versatileSurfaces/Carpet.jpg";
import Fabric from "../assets/versatileSurfaces/Fabric.jpg";
import Upholstery from "../assets/versatileSurfaces/Upholstery.jpg";

export default function AutoScrollingImages() {
  const images = [
    { src: Countertop, label: "Countertop" },
    { src: TileFloor, label: "Tile Floor" },
    { src: Machinery, label: "Machinery" },
    { src: Cookware, label: "Cookware" },
    { src: PaintedSurfaces, label: "Painted Surfaces" },
    { src: Appliances, label: "Appliances" },
    { src: Glass, label: "Glass" },
    { src: Carpet, label: "Carpet" },
    { src: Fabric, label: "Fabric" },
    { src: Upholstery, label: "Upholstery" },
  ];

  const [imagesPerView, setImagesPerView] = useState(() => {
    if (window.innerWidth >= 1024) return 3;
    else if (window.innerWidth >= 640) return 2;
    else return 1;
  });

  useEffect(() => {
    const updateImagesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setImagesPerView(3);
      } else if (width >= 640) {
        setImagesPerView(2);
      } else {
        setImagesPerView(1);
      }
    };
    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setScrollIndex((prev) => {
        const maxIndex = images.length - imagesPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images.length, imagesPerView]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth / imagesPerView;
      scrollContainerRef.current.scrollTo({
        left: scrollIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [scrollIndex, imagesPerView]);

  const goToPrevious = () => {
    setScrollIndex((prev) => {
      const maxIndex = images.length - imagesPerView;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setScrollIndex((prev) => {
      const maxIndex = images.length - imagesPerView;
      return prev === maxIndex ? 0 : prev + 1;
    });
  };

  const showPagination = window.innerWidth >= 640;
  const visibleDots = images.length - imagesPerView + 1;

  return (
    <div
      className="relative w-full bg-white py-16"
      style={{ fontFamily: "Geogrotesque, sans-serif" }}
    >
      {/* Headline */}
      <div className="text-center mb-8 px-4">
        <h2
          className="text-4xl font-extrabold text-[#D3242A] uppercase mb-4"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          Everyday Solutions
        </h2>
        <p
          className="text-lg text-gray-600"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          From Heavy-Duty to Everyday – Built for All Your Needs.
        </p>
      </div>

      {/* Slider View */}
      <div
        className="relative overflow-hidden w-full max-w-6xl mx-auto flex items-center"
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
        <div className="flex overflow-x-hidden w-full" ref={scrollContainerRef}>
          {images.map((item, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 px-4 text-center ${
                imagesPerView === 1
                  ? "w-full"
                  : imagesPerView === 2
                  ? "w-1/2"
                  : "w-1/3"
              }`}
              style={{ flex: "0 0 auto" }}
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                  style={{ boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)" }} // Subtle drop shadow
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 py-4">
                  <p
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: "Geogrotesque, sans-serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
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
      {showPagination && (
        <div className="mt-6 flex items-center justify-center space-x-2">
          {Array.from({ length: visibleDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setScrollIndex(index)}
              className={`w-3 h-3 rounded-full ${
                scrollIndex === index ? "bg-[#D3242A]" : "bg-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#D3242A]`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
