// src/components/FeaturesShowcase.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hand from "../assets/blueragtransparent.png";
// Removed GlassTexture import as per previous instructions

/*
  Helper: EdgeStars
  (Unchanged) - places sparkly stars on the container edges.
*/
function EdgeStars() {
  // Example implementation; replace with your actual star generation logic
  const starCount = 30;
  const stars = Array.from({ length: starCount }, (_, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      }}
      className="absolute bg-yellow-300 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
      }}
    />
  ));
  return <>{stars}</>;
}

/*
  BlogCard Component
  Handles individual blog card with expandable content.
*/
function BlogCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExcerpt = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <motion.img
        src={post.image}
        alt={`Image for ${post.title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[#D3242A] text-xl font-bold mb-2">
          {post.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {isExpanded ? post.excerpt : `${post.excerpt.substring(0, 100)}...`}
        </p>
        <div>
          <a
            href={post.link}
            className="text-[#D3242A] font-semibold hover:underline"
            aria-label={`Read more about ${post.title}`}
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Component: FeaturesShowcase (Now BlogSection)
export default function FeaturesShowcase() {
  // Check if Font Awesome is loaded (optional)
  useEffect(() => {
    if (!window.FontAwesome) {
      console.warn("Font Awesome is NOT detected. Icons may not be visible.");
    }
  }, []);

  // Sample blog posts data with placeholder carousel links
  const blogPosts = [
    {
      id: 1,
      // Use external URL directly as a string
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "5 Essential Cleaning Tips",
      excerpt:
        "Discover the top five cleaning tips that will transform your home into a spotless sanctuary. From tackling stubborn stains to maintaining a clutter-free environment, these strategies are designed to make your cleaning routine efficient and effective.",
      link: "#carousel1", // Placeholder link from carousel section
    },
    {
      id: 2,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Benefits of Non-Toxic Cleaners",
      excerpt:
        "Learn why non-toxic cleaners are better for your health and the environment. Explore the advantages of using eco-friendly products that effectively clean your space without harmful chemicals.",
      link: "#carousel2", // Placeholder link from carousel section
    },
    {
      id: 3,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Tackling Tough Stains",
      excerpt:
        "Struggling with stubborn stains? Here’s how to remove them effortlessly. From coffee spills to ink marks, these tips will help you maintain pristine surfaces with ease.",
      link: "#carousel3", // Placeholder link from carousel section
    },
    {
      id: 4,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Eco-Friendly Cleaning Practices",
      excerpt:
        "Embrace eco-friendly cleaning practices with these simple and effective strategies. Reduce your carbon footprint while keeping your home spotless and safe for your family.",
      link: "#carousel4", // Placeholder link from carousel section
    },
  ];

  return (
    // This section is our big container with white background
    <section
      className="relative py-16 px-6 overflow-hidden bg-white"
      style={{
        /* 
          1) Set background to white.
          2) Removed glass texture background.
          3) Removed gradient overlays.
        */
      }}
    >
      {/* Decorative Hand Animation */}
      <motion.img
        src={Hand}
        alt="Decorative Hand"
        className="absolute right-0 bottom-0 max-w-[500px] md:max-w-[600px] z-0"
        style={{ pointerEvents: "none", transformOrigin: "top left" }}
        animate={{
          x: [0, 25, -20, 15, -15, 0],
          y: [0, 10, 20, 40, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1], // "easeInOut" cubic-bezier
        }}
      />

      {/* Main content container, relative so edges stars can appear inside */}
      <div className="relative max-w-screen-xl mx-auto z-10">
        {/* Random star sparkles along the edges */}
        <EdgeStars />

        {/* 
          Header: Headline, Subheading, and CTA
        */}
        <div className="text-center mb-12 z-10">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Welcome to Our Blog
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Stay updated with the latest tips and insights to keep your home clean and
            eco-friendly.
          </p>
          <a
            href="#tips-and-blogs"
            className="inline-block bg-[#D3242A] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
            aria-label="Visit our Tips and Blogs"
          >
            Visit our Tips and Blogs
          </a>
        </div>

        {/* 
          Blog Posts Grid:
          Responsive grid with 1 column on small screens and up to 4 on larger screens
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
