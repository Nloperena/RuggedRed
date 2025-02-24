import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Hand from "./Hand";
import BlogData from "../data/blogs"; // Use the external blog data

const BlogSectionExtended = () => {
  // Determine number of columns based on window width
  const getColumns = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // large screens
    else if (width >= 640) return 2; // medium screens
    else return 1; // small screens
  };

  const [columns, setColumns] = useState(getColumns());
  // currentPage here represents the number of rows loaded (starting with 1)
  const [currentPage, setCurrentPage] = useState(1);

  // Update column count on window resize
  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total number of rows (pages) available
  const totalRows = Math.ceil(BlogData.length / columns);
  // Visible posts are those within the first (currentPage * columns) posts
  const visiblePosts = BlogData.slice(0, currentPage * columns);

  // "Load More" increases the current page (row) count by one, if available
  const loadMore = () => {
    if (currentPage < totalRows) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Pagination: jump directly to a row/page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-red-600 mb-8 uppercase"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          LEARN SOMETHING NEW
        </motion.h2>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visiblePosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination & Load More Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          {/* Pagination Buttons */}
          <motion.div className="flex space-x-2 mb-4 sm:mb-0">
            {Array.from({ length: totalRows }, (_, i) => {
              const page = i + 1;
              return (
                <motion.button
                  key={page}
                  onClick={() => goToPage(page)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center transition-colors duration-300 ${
                    currentPage === page
                      ? "bg-red-600 text-white"
                      : "bg-white text-red-600"
                  }`}
                >
                  {page}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Load More Button */}
          {currentPage < totalRows && (
            <motion.button
              onClick={loadMore}
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 uppercase"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
              whileHover={{ scale: 1.05 }}
            >
              Load More Posts
            </motion.button>
          )}
        </div>
      </div>

      {/* Animated Hand at Bottom */}
      {/* <motion.div
        className="absolute bottom-[-80px] left-0 w-full z-50 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <Hand />
      </motion.div> */}
    </motion.section>
  );
};

export default BlogSectionExtended;
