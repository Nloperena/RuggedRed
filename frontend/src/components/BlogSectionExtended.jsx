import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard"; // Adjust path if necessary
import Hand from "./Hand"; // Adjust path if necessary

const BlogSectionExtended = () => {
  const blogIds = [1, 2, 3]; // IDs for the blog posts to be displayed

  return (
    <motion.section
      className="relative py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 1.2 }} // Slower load-in animation for the section
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the section is visible
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-center text-red-600 mb-8 uppercase"
          style={{ fontFamily: "Geogrotesque, sans-serif"}}
        >
          LEARN SOMETHING NEW
        </h2>
        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32" // Added extra bottom margin for hand space
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5, // Slower animation for cards
                staggerChildren: 0.4, // Slower stagger between cards
              },
            },
          }}
        >
          {blogIds.map((id) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group"
            >
              {/* Blog Card */}
              <BlogCard id={id} />
              {/* Image Fade */}
              <div
                className="absolute bottom-0 right-0 left-0 h-5% pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.05))," +
                    "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.05))",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Animated Hand */}
      <motion.div
        className="absolute bottom-[-50px] left-0 w-full z-50 pointer-events-none" // Adjusted position to bring Hand lower
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Hand />
      </motion.div>
    </motion.section>
  );
};

export default BlogSectionExtended;
