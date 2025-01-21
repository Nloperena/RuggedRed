import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import RichTextProductCard from "./RichTextProductCard";

/**
 * Simple skeleton "vertical list" for loading placeholders.
 */
function SkeletonList() {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-[#F2F2F2] rounded-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-full h-64 bg-[#E5E5E5] rounded-md shimmer mb-4" />
          <div className="h-5 w-3/4 bg-[#E5E5E5] rounded-md mb-2 shimmer" />
          <div className="h-4 w-1/2 bg-[#E5E5E5] rounded-md mb-2 shimmer" />
          <div className="h-4 w-1/3 bg-[#E5E5E5] rounded-md mb-4 shimmer" />
          <div className="h-8 w-40 bg-[#E5E5E5] rounded-full shimmer" />
        </motion.div>
      ))}
    </div>
  );
}

/**
 * RichTextProductsSection
 *
 * - Fetches all "cleaningProduct" entries.
 * - Renders a vertical list of horizontal product cards.
 * - Alternates "flip" based on index (0 => no flip, 1 => flip, etc.).
 */
const RichTextProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "cleaningProduct" })
      .then((response) => {
        setProducts(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("[RichTextProductsSection] Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Show skeleton while loading
  if (isLoading) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-bold text-center text-black mb-12 uppercase"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Our Products
          </h2>
          <SkeletonList />
        </div>
      </section>
    );
  }

  // If no products found, show a fallback message
  if (!products.length) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-black text-lg">No products found!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-center text-[#D3242A] uppercase text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Products
        </motion.h2>

        {/* Products List */}
        <motion.div
          className="flex flex-col gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {products.map((product, index) => (
            <RichTextProductCard
              key={product.sys.id || index}
              product={product}
              flip={index % 2 === 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RichTextProductsSection;
