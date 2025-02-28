import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ComparisonTable from "../components/ComparisonTable";
import Testimonials from "../components/Testimonials";
import ProductImageSection from "../components/ProductImageSection"; // new child component
import ProductTextSection from "../components/ProductTextSection";   // new child component

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Logging for debugging
    console.log("Products array received in ProductDetail:", products);
    console.log("Product ID from URL:", productId);

    // Find product by productId
    const foundProduct = products.find((p) => p.sys.id === productId);
    console.log("Found product matching ID:", foundProduct);

    if (foundProduct) {
      setProduct(foundProduct);
      setNotFound(false);
    } else {
      setProduct(null);
      setNotFound(true);
    }
  }, [productId, products]);

  if (!product && !notFound) {
    return <div>Loading..</div>;
  }

  if (notFound) {
    return <div>Product not found for ID: {productId}</div>;
  }

  // Now that we have a valid product, split out to child components
  return (
    <div className="container mx-auto p-8">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProductImageSection product={product} />
        <ProductTextSection product={product} />
      </motion.div>
      <ComparisonTable />
      <Testimonials />
    </div>
  );
};

export default ProductDetail;