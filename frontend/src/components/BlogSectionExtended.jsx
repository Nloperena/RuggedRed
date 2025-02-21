import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Hand from "./Hand";

const BlogSectionExtended = () => {
  // Suppose we have 6 total blog post objects
  const allPosts = [
    {
      id: 1,
      image:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-clean-kitchen-appliances-2022-step-3.jpg",
      title: "5 Essential Cleaning Tips",
      excerpt:
        "Discover the top five cleaning tips that will transform your home into a spotless sanctuary. From tackling stubborn stains to maintaining a clutter-free environment, these strategies make your cleaning routine efficient and effective.",
      link: "#carousel1",
    },
    {
      id: 2,
      image:
        "https://www.sustainablejungle.com/wp-content/uploads/2022/09/Image-by-ozgurkeser-Getty-Images-Canva-Pro.jpg",
      title: "Benefits of Non-Toxic Cleaners",
      excerpt:
        "Learn why non-toxic cleaners are better for your health and the environment. Explore advantages of eco-friendly products without harmful chemicals.",
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
        "https://images.squarespace-cdn.com/content/v1/5f60cebfa8258e3d29185127/1605463054877-1EV5NPHK2YBYWVG4F22Z/AdobeStock_183172504.jpeg",
      title: "DIY Cleaning Solutions",
      excerpt:
        "Make your own cleaning solutions with common household items. Cut costs and go green with these quick recipes and tips.",
      link: "#carousel5",
    },
    {
      id: 6,
      image:
        "https://www.myzen.tv/wp-content/uploads/2024/03/handcraft-handmade-diy-skills-drawing-3-scaled.jpg",
      title: "Organization Hacks",
      excerpt:
        "Discover clever organization hacks to keep your living space neat and clutter-free, making your cleaning routine faster than ever before.",
      link: "#carousel6",
    },
  ];

  // Start by showing 3
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allPosts.length));
  };

  const visiblePosts = allPosts.slice(0, visibleCount);

  return (
    <motion.section
      className="relative py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-center text-red-600 mb-8 uppercase"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          LEARN SOMETHING NEW
        </h2>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {visiblePosts.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCount < allPosts.length && (
          <div className="flex justify-center mb-32">
            <button
              onClick={loadMore}
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 uppercase"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>

      {/* Animated Hand at bottom */}
      <motion.div
        className="absolute bottom-[-80px] left-0 w-full z-50 pointer-events-none"
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