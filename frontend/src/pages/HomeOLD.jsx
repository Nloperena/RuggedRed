import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import framer-motion
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import ProductLine from "../components/ProductLine";
import StickyImage from "../components/StickyImage";
import RichTextProductsSection from "../components/RichTextProductsSection";
import Testimonials from "../components/Testimonials";
import AutoScrollingImages from "../components/AutoScrollingImages";
import AboutRed from "../components/AboutRed";
import BlogSection from "../components/BlogSection";
import ComparisonTable from "../components/ComparisonTable";

const Home = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  // Observe ProductLine, RichTextProductsSection, and ComparisonTable
  const { ref: productLineRef, inView: productLineInView } = useInView({
    threshold: 0.1, // Trigger when 10% of ProductLine is visible
  });
  const { ref: richTextRef, inView: richTextInView } = useInView({
    threshold: 0, // Trigger when the very top of RichTextProductsSection enters the viewport
    triggerOnce: true, // Animate only once when in view
  });
  const { ref: comparisonTableRef, inView: comparisonInView } = useInView({
    threshold: 0.1, // Trigger when 10% of ComparisonTable is visible
  });

  // Visibility Logic for StickyImage
  useEffect(() => {
    // StickyImage is visible:
    // - While ProductLine is in view
    // - Or until ComparisonTable becomes visible
    if (!comparisonInView) {
      setStickyVisible(true);
    } else {
      setStickyVisible(false);
    }
  }, [comparisonInView]);

  return (
    <>
      {/* Sticky Image Section */}
      {stickyVisible && (
        <section className="relative">
          <StickyImage />
        </section>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Mascot Divider */}
        <Divider
          imageSrc={require("../assets/RRMascot.png")}
          altText="Mascot Divider"
          position="left"
          size="medium"
          mobileAdjust={{
            marginBottom: "5rem", // Add extra space below the divider
          }}
        />

        {/* Product Divider */}
        <Divider
          imageSrc={require("../assets/RR-ProductHeroImg.png")}
          altText="Product Divider"
          position="right"
          size="large"
          mobileAdjust={{
            maxWidth: "30%", // Shrink to 30% width for mobile
            marginRight: "1rem", // Add right margin for spacing
            marginTop: "-7rem", // Lower image on mobile
            marginBottom: "9rem", // Add extra space below the divider
          }}
        />

        {/* Product Line Section */}
        <div ref={productLineRef}>
          <ProductLine />
        </div>

        {/* Animated Rich Text Products Section */}
        <motion.section
          ref={richTextRef}
          className="relative bg-white pt-20 pb-12 px-6 sm:px-10"
          style={{ marginTop: "40rem" }}
          initial={{ opacity: 0, y: 20 }} // Start faded out and shifted down
          animate={richTextInView ? { opacity: 1, y: 0 } : {}} // Animate into view
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, 0.2, 0.9], // Smooth easing
          }}
        >
          <RichTextProductsSection />
        </motion.section>

        {/* Comparison Table Section */}
        <div ref={comparisonTableRef}>
          <ComparisonTable />
        </div>

        {/* Testimonials Section */}
        <section className="relative z-30 text-white py-20 px-6 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm"
            style={{
              backgroundImage: `url('https://images.ctfassets.net/hdznx4p7ef81/4bmH8LUErm4lVMKisci0EQ/afe5be750a53f06d5c46903aafd010e5/CD_Cleaning_Grease_on_Table.jpg')`,
              backgroundPosition: "center top",
              transform: "translateY(-2rem)",
              backgroundSize: "cover",
              opacity: 0.7,
            }}
          ></div>
          <div className="absolute inset-0 -z-10 bg-white opacity-40"></div>
          <Testimonials />
        </section>

        {/* Additional Content Sections */}
        <AutoScrollingImages />
        <AboutRed />
        <BlogSection />
      </div>
    </>
  );
};

export default Home;
