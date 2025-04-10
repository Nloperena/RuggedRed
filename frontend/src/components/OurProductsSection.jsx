import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import client from '../contentful';
import RichTextProductsSection from "./RichTextProductsSection";
import ProductsSection from "./ProductsSection";

const OurProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return margin‑top values based on viewport width.
  const getMarginTop = (width) => {
    if (width >= 2560) return "-25vh";    // 4K displays (2560px and above)
    else if (width >= 1536) return "-25vh"; // Large desktops
    else if (width >= 1280) return "-25vh"; // Standard desktops
    else if (width >= 1024) return "-25vh"; // Smaller desktops / large tablets
    else if (width >= 768) return "-25vh";   // Tablets
    else return "-25vh";                     // Mobile devices
  };

  const [marginTop, setMarginTop] = useState(getMarginTop(window.innerWidth));

  useEffect(() => {
    const updateMargin = () => {
      setMarginTop(getMarginTop(window.innerWidth));
    };
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  useEffect(() => {
    // Fetch from Contentful directly
    client
      .getEntries({ content_type: "cleaningProductData" })
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
    <motion.section
      className="relative bg-white pt-12 pb-12 px-6 sm:px-10"
      style={{
        marginTop: marginTop,
        position: "relative",
        zIndex: 2,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px -20px 30px",
      }}
    >
      {isDesktop && <RichTextProductsSection />}
      <ProductsSection />
    </motion.section>
  );
};

export default OurProductsSection; 