// ProductsSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import ProductCard from "./ProductCard"; // <-- Import our new card

const ProductsSection = () => {
  // We keep a list of products in state
  const [products, setProducts] = useState([]);
  // We keep track of loading to show skeleton or spinner while fetching
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We ask for entries with content type ID "cleaningProduct"
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

  // If still fetching from Contentful, show a placeholder
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <p>Loading products...</p>
      </div>
    );
  }

  // If no products came back, show a message
  if (!products.length) {
    return (
      <div className="p-8 text-center">
        <p>No products found!</p>
      </div>
    );
  }

  // Otherwise, display the product cards
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.sys.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* We pass each product into our ProductCard */}
            <ProductCard product={product} delay={index * 0.1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
