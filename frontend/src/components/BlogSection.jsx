// We import React so we can build our component
import React, { useEffect, useState } from "react";
// We import motion from Framer Motion to animate things
import { motion } from "framer-motion";
// We import our hand image for decoration
import Hand from "../assets/blueragtransparent.png";

// This function creates little "stars" that appear around the edges
function EdgeStars() {
  // We choose how many stars we want
  const starCount = 30;

  // We build an array of starCount size and create a little motion div for each star
  const stars = Array.from({ length: starCount }, (_, index) => (
    <motion.div
      key={index}
      // Each star starts invisible and small, then appears and disappears
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration: Math.random() * 2 + 1, // Random durations
        delay: Math.random() * 2,        // Random delays
      }}
      className="absolute bg-yellow-300 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,   // Random top position
        left: `${Math.random() * 100}%`,  // Random left position
        width: `${Math.random() * 4 + 1}px`,  // Random width
        height: `${Math.random() * 4 + 1}px`, // Random height
      }}
    />
  ));

  // Return all the stars
  return <>{stars}</>;
}

// This component shows a single blog card with an image, title, excerpt, and link
function BlogCard({ post }) {
  // isExpanded controls if we show the full text or just a snippet
  const [isExpanded, setIsExpanded] = useState(false);

  // This toggles between full excerpt and short snippet
  const toggleExcerpt = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // A white card with round corners, shadow, and a column layout
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Blog image with slight zoom on hover */}
      <motion.img
        src={post.image}
        alt={`Image for ${post.title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      {/* Card text content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-black text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {isExpanded ? post.excerpt : `${post.excerpt.substring(0, 100)}...`}
        </p>
        <div>
          <a
            href={post.link}
            className="text-[#D3242A] font-semibold hover:underline"
            aria-label={`Read more about ${post.title}`}
            onClick={toggleExcerpt}
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

// This is our main component for the blog section
export default function FeaturesShowcase() {
  // Check if Font Awesome is loaded
  useEffect(() => {
    if (!window.FontAwesome) {
      console.warn("Font Awesome is NOT detected. Icons may not be visible.");
    }
  }, []);

  // We set up our example blog posts
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "5 Essential Cleaning Tips",
      excerpt:
        "Discover the top five cleaning tips that will transform your home into a spotless sanctuary. From tackling stubborn stains to maintaining a clutter-free environment, these strategies are designed to make your cleaning routine efficient and effective.",
      link: "#carousel1",
    },
    {
      id: 2,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Benefits of Non-Toxic Cleaners",
      excerpt:
        "Learn why non-toxic cleaners are better for your health and the environment. Explore the advantages of using eco-friendly products that effectively clean your space without harmful chemicals.",
      link: "#carousel2",
    },
    {
      id: 3,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Tackling Tough Stains",
      excerpt:
        "Struggling with stubborn stains? Here’s how to remove them effortlessly. From coffee spills to ink marks, these tips will help you maintain pristine surfaces with ease.",
      link: "#carousel3",
    },
    {
      id: 4,
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
      title: "Eco-Friendly Cleaning Practices",
      excerpt:
        "Embrace eco-friendly cleaning practices with these simple and effective strategies. Reduce your carbon footprint while keeping your home spotless and safe for your family.",
      link: "#carousel4",
    },
  ];

  return (
    // A red background for the entire blog section
    <section className="relative py-16 px-6 overflow-hidden bg-red-600">
      {/* We have an animated hand in the bottom-right corner */}
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
          ease: [0.42, 0, 0.58, 1],
        }}
      />

      {/* Main content is above the hand (z-10) */}
      <div className="relative max-w-screen-xl mx-auto z-10">
        {/* Sparkly stars along the edges */}
        <EdgeStars />

        {/* Header / title for the blog section (centered, in all caps, in white) */}
        <div className="text-center mb-12 z-10">
          <h2
            // Make heading uppercase and white
            className="text-4xl sm:text-5xl font-extrabold text-white uppercase mb-4"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Welcome to Our Blog
          </h2>
          {/* Paragraph text also in white */}
          <p className="text-white text-lg mb-6">
            Stay updated with the latest tips and insights to keep your home
            clean and eco-friendly.
          </p>
          {/* "Visit our Tips and Blogs" button in black now */}
          <a
            href="#tips-and-blogs"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            aria-label="Visit our Tips and Blogs"
          >
            Visit our Tips and Blogs
          </a>
        </div>

        {/* Display our blog posts in a grid (1 column on small, up to 4 columns on large) */}
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
