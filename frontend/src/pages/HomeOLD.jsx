import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import ProductLine from "../components/ProductLine";

const Home = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  const { ref: productLineRef, inView: productLineInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <Hero />

      {/* Divider Section */}
      <Divider
        imageSrc={require("../assets/RRMascot.png")}
        altText="Mascot Divider"
        position="left"
        size="medium"
        mobileAdjust={{
          marginBottom: "5rem", // Add space below the divider
        }}
      />
      <Divider
        imageSrc={require("../assets/RR-ProductHeroImg.png")}
        altText="Product Divider"
        position="right"
        size="large"
        mobileAdjust={{
          maxWidth: "30%", // Shrink for mobile
          marginRight: "1rem", // Add spacing
          marginTop: "-7rem", // Adjust top margin
          marginBottom: "9rem", // Add spacing below
        }}
      />

      {/* Additional Layout Adjustments */}
      <style>
        {`
          @media (max-width: 640px) {
            .product-divider {
              margin-top: -10rem; /* Adjust top margin for smaller screens */
              margin-bottom: 12rem; /* Increase bottom margin */
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
            .product-divider {
              margin-top: -8rem; /* Adjust top margin for medium screens */
              margin-bottom: 10rem;
            }
          }
        `}
      </style>

      <div ref={productLineRef}>
        <ProductLine />
      </div>
    </div>
  );
};

export default Home;
