import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import ProductCard from "./ProductCard";

/**
 * A simple skeleton placeholder grid.
 * You can customize the number of items if desired.
 */
function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-[#F2F2F2] rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Image placeholder */}
          <div className="w-full h-64 bg-[#E5E5E5] rounded-lg mb-4 shimmer" />
          {/* Title placeholder */}
          <div className="h-5 w-3/4 bg-[#E5E5E5] rounded mb-2 shimmer" />
          {/* Subtitle placeholder */}
          <div className="h-4 w-1/2 bg-[#E5E5E5] rounded mb-4 shimmer" />
          {/* Button placeholder */}
          <div className="h-8 w-1/3 bg-[#E5E5E5] rounded-full shimmer" />
        </motion.div>
      ))}
    </div>
  );
}

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch your cleaning products from Contentful
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

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-bold text-center text-[#D3242A] mb-12"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          Our Products
        </h2>

        {/* If loading, show skeleton placeholders */}
        {isLoading ? (
          <SkeletonGrid count={6} />
        ) : products.length === 0 ? (
          // If there's no data at all
          <div className="text-center">
            <p className="text-black text-lg">No products found!</p>
          </div>
        ) : (
          // Otherwise, show the actual product cards
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
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
