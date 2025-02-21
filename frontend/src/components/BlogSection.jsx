import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";

// Sample data
const blogPostsData = [
  {
    id: 1,
    image:
      "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-clean-kitchen-appliances-2022-step-3.jpg",
    title: "5 Essential Cleaning Tips",
    excerpt:
      "Discover the top five cleaning tips that will transform your home into a spotless sanctuary. These strategies make your cleaning routine efficient and effective.",
    link: "#carousel1",
  },
  {
    id: 2,
    image:
      "https://www.sustainablejungle.com/wp-content/uploads/2022/09/Image-by-ozgurkeser-Getty-Images-Canva-Pro.jpg",
    title: "Benefits of Non-Toxic Cleaners",
    excerpt:
      "Learn why non-toxic cleaners are better for your health and the environment. Explore advantages of using eco-friendly products without harmful chemicals.",
    link: "#carousel2",
  },
  {
    id: 3,
    image:
      "https://www.mcsclean.co.uk/wp-content/uploads/2021/05/shutterstock_738900295-425x319.jpg",
    title: "Tackling Tough Stains",
    excerpt:
      "Struggling with stubborn stains? Here’s how to remove them effortlessly. From coffee spills to ink marks, maintain pristine surfaces with ease.",
    link: "#carousel3",
  },
  {
    id: 4,
    image:
      "https://images.squarespace-cdn.com/content/v1/5f60cebfa8258e3d29185127/1628286912273-FBGPWA1REO6C27A0EW6O/AdobeStock_417842646.jpeg",
    title: "Eco-Friendly Cleaning Practices",
    excerpt:
      "Embrace eco-friendly cleaning practices with these simple strategies. Reduce your carbon footprint while keeping your home spotless and safe.",
    link: "#carousel4",
  },
  {
    id: 5,
    image:
      "https://www.myzen.tv/wp-content/uploads/2024/03/handcraft-handmade-diy-skills-drawing-3-scaled.jpg",
    title: "DIY Cleaning Solutions",
    excerpt:
      "Make your own cleaning solutions with common household items. Cut costs and go green with these quick recipes and tips.",
    link: "#carousel5",
  },
  {
    id: 6,
    image: "https://placeimg.com/640/480/nature",
    title: "Upcycling Cleaning Tools",
    excerpt:
      "Repurpose household items for more sustainable cleaning. Embrace upcycling as part of your eco-friendly routine!",
    link: "#carousel6",
  },
];

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

  // Dynamically compute items per page
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

  const totalPages = Math.ceil(blogPostsData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visiblePosts = blogPostsData.slice(startIndex, startIndex + itemsPerPage);

  // Next / Prev
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
            Stay updated with the latest tips and insights to keep your home
            clean and eco-friendly.
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

        {/* Circle pagination, with smaller margin on mobile, bigger on desktop */}
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
