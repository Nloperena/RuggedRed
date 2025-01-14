import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import ProductCard from "./ProductCard";

/**
 * Skeleton placeholder for the products grid.
 */
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray-700 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-full h-64 bg-gray-600 rounded-lg mb-4 shimmer" />
          <div className="h-5 w-3/4 bg-gray-600 rounded mb-2 shimmer" />
          <div className="h-4 w-1/2 bg-gray-600 rounded mb-4 shimmer" />
          <div className="h-8 w-1/3 bg-gray-600 rounded-full shimmer" />
        </motion.div>
      ))}
    </div>
  );
}

const ProductsSection = () => {
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
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Products
          </h2>
          <SkeletonGrid />
        </div>
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg">No products found!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Products
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.sys.id || index} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
