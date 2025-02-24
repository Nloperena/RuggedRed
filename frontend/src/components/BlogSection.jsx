import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import BlogData from "../data/blogs";

// Ensure blogPosts is always an array. If BlogData is an object with a "blogs" property, use that.
const blogPosts =
  (BlogData && (Array.isArray(BlogData) ? BlogData : BlogData.blogs)) || [];

// Slide animation variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    position: "absolute",
  }),
};

export default function FeaturesShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // +1 = next, -1 = prev
  const [itemsPerPage, setItemsPerPage] = useState(1); // default

  // Dynamically compute items per page based on viewport width
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(4);
    } else if (width >= 768) {
      setItemsPerPage(3);
    } else if (width >= 640) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  // On mount + resize
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Ensure totalPages is at least 1 to avoid division/modulo by zero
  const totalPages =
    blogPosts.length > 0 ? Math.ceil(blogPosts.length / itemsPerPage) : 1;
  const startIndex = currentPage * itemsPerPage;
  const visiblePosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  // Next / Prev navigation
  const goToNextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Jump to specific page
  const jumpToPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  return (
    <section className="relative py-16 px-6 bg-red-600">
      <div className="relative max-w-screen-xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white uppercase mb-4"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            LEARN SOMETHING NEW!
          </h2>
          <p className="text-white text-lg mb-6">
            Stay updated with the latest tips and insights to keep your home clean and eco-friendly.
          </p>
          <a
            href="#tips-and-blogs"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Visit our Tips and Blogs
          </a>
        </div>

        {/* Slider container */}
        <div className="relative w-full min-h-[400px] overflow-visible">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentPage}
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid gap-8 justify-items-center"
              style={{
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                minHeight: "300px",
              }}
            >
              {visiblePosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={goToPrevPage}
            style={{
              left: "-2rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="absolute bg-white text-[#D3242A] border-2 border-[#D3242A] w-12 h-12 rounded-full z-20 shadow-sm hover:shadow-md hover:bg-gray-200 transition-transform duration-300"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNextPage}
            style={{
              right: "-2rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="absolute bg-white text-[#D3242A] border-2 border-[#D3242A] w-12 h-12 rounded-full z-20 shadow-sm hover:shadow-md hover:bg-gray-200 transition-transform duration-300"
          >
            &#10095;
          </button>
        </div>

        {/* Circle pagination */}
        <div className="mt-3 sm:mt-6 flex items-center justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const isActive = i === currentPage;
            return (
              <button
                key={i}
                onClick={() => jumpToPage(i)}
                className={`w-4 h-4 rounded-full border-2 border-[#D3242A] shadow-sm transition-colors duration-300 ${
                  isActive ? "bg-white" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
