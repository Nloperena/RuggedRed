import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RichTextProductsSection from "./RichTextProductsSection";

const OurProductsSection = () => {
  // Return margin‑top values based on viewport width.
  const getMarginTop = (width) => {
    if (width >= 2560) return "-50px";    // 4K displays (2560px and above)
    else if (width >= 1536) return "-100px"; // Large desktops
    else if (width >= 1280) return "-240px"; // Standard desktops
    else if (width >= 1024) return "-200px"; // Smaller desktops / large tablets
    else if (width >= 768) return "-240px";   // Tablets
    else return "-300px";                     // Mobile devices
  };

  const [marginTop, setMarginTop] = useState(getMarginTop(window.innerWidth));

  useEffect(() => {
    const updateMargin = () => {
      setMarginTop(getMarginTop(window.innerWidth));
    };
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
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
      // You can also add your scroll-driven animation props here if needed.
    >
      <RichTextProductsSection />
    </motion.section>
  );
};

export default OurProductsSection;
