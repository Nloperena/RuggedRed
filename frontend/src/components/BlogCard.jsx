import React from "react";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  if (!post) return null;

  return (
    <div className="relative group w-full aspect-square overflow-hidden rounded-lg shadow-lg">
      {/* Background image with subtle scale on hover */}
      <motion.img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
      />

      {/* White wrapper slides up over the image on hover (90% opacity) */}
      <div
        className="absolute bottom-0 left-0 w-full bg-white/90 px-4 py-4 transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
        style={{ backdropFilter: "blur(2px)" }}
      >
        {/* Headline forced to Geogrotesque */}
        <h3
          className="text-xl font-extrabold uppercase mb-2"
          style={{
            fontFamily: "Geogrotesque, sans-serif",
            color: "#D3242A",
          }}
        >
          {post.title}
        </h3>

        {/* Snippet text: black */}
        <p className="text-black text-sm mb-3">
          {post.excerpt.substring(0, 100)}...
        </p>

        {/* READ MORE: uppercase, red */}
        <a
          href={post.link}
          className="inline-block font-semibold border-b border-[#D3242A] uppercase"
          style={{
            fontFamily: "Geogrotesque, sans-serif",
            color: "#D3242A",
          }}
        >
          READ MORE &rarr;
        </a>
      </div>
    </div>
  );
}
