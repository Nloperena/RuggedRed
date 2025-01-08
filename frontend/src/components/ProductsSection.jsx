import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import ProductCard from "./ProductCard";

/**
 * Skeleton placeholder for the entire products grid.
 * Animated shimmer effect for placeholders.
 */
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {/* Render placeholders for 6 skeleton cards */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray-300 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-full h-48 bg-gray-400 rounded-lg mb-4 shimmer" />
          <div className="h-5 w-3/4 bg-gray-400 rounded mb-2 shimmer" />
          <div className="h-4 w-1/2 bg-gray-400 rounded mb-4 shimmer" />
          <div className="h-8 w-1/3 bg-gray-400 rounded-full shimmer" />
        </motion.div>
      ))}
    </div>
  );
}

const ProductsSection = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data from Contentful
    client
      .getEntries({ content_type: "cleaningProduct" })
      .then((response) => {
        setProducts(response.items); // Store fetched products
        setIsLoading(false); // Mark loading as complete
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Show skeleton while loading
  if (isLoading) {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <SkeletonGrid />
      </section>
    );
  }

  // If no products are found
  if (!products.length) {
    return (
      <div className="p-8 text-center">
        <p>No products found!</p>
      </div>
    );
  }

  // Show products once data is loaded
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {products.map((product, index) => (
          <ProductCard key={product.sys.id || index} product={product} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProductsSection;
