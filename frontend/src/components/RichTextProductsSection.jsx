import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client from "../contentful";
import RichTextProductCard from "./RichTextProductCard";

/**
 * A skeleton list to show while fetching data
 */
function SkeletonList() {
  // Example: 3 skeleton cards
  return (
    <div className="flex flex-col gap-12">
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-[#F2F2F2] rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
        >
          <div className="w-full h-72 bg-[#E5E5E5] rounded-lg mb-4" />
          <div className="h-5 w-3/4 bg-[#E5E5E5] rounded-md mb-2" />
          <div className="h-4 w-1/2 bg-[#E5E5E5] rounded-md mb-2" />
          <div className="h-4 w-1/3 bg-[#E5E5E5] rounded-md mb-4" />
          <div className="h-8 w-40 bg-[#E5E5E5] rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Fetches and displays products in a vertical column layout.
 */
const RichTextProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!client) {
      setError("Contentful client not found!");
      setIsLoading(false);
      return;
    }

    client
      .getEntries({ content_type: "cleaningProduct" })
      .then((response) => {
        if (!response.items.length) {
          setError("No products found in Contentful.");
        } else {
          setProducts(response.items);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("[RichTextProductsSection] Error fetching products:", err);
        setError("Failed to fetch products.");
        setIsLoading(false);
      });
  }, []);

  // Display skeleton while loading.
  if (isLoading) {
    return (
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold text-center text-black mb-12 uppercase"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Products
          </motion.h2>
          <SkeletonList />
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-red-600 text-lg font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ⚠️ {error}
          </motion.p>
        </div>
      </section>
    );
  }

  // Actual products display
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-center text-[#D3242A] uppercase text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Products
        </motion.h2>

        {/* Map over products in a vertical list (flex-col). */}
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {products.map((product, index) => (
            <RichTextProductCard
              key={product.sys.id || index}
              product={product}
              flip={index % 2 !== 0} // Alternate flipping if desired
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RichTextProductsSection;
