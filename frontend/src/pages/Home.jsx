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
  
      {/* --------------------------------
           (Optional) Mascot Divider - COMMENTED OUT
           Uncomment if you want to display the Mascot Divider.
      --------------------------------
      <div
        className="relative w-full"
        style={{
          zIndex: 1001,
          position: "relative",
          marginTop: "-8rem", // Default margin-top
        }}
      >
        <div
          className={\`
            block transform mx-auto float-left w-[240px] sm:w-[385px] md:w-[400px] lg:w-[615px]
          \`}
          style={{
            marginBottom: "5rem", // Add extra space below the divider
          }}
        >
          <img
            src={require("../assets/RRMascot.png")}
            alt="Mascot Divider"
            className="block object-contain mascot-divider"
            style={{
              maskImage: "linear-gradient(to bottom, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
            }}
          />
        </div>
      </div>
      */}

      {/* --------------------------------
           Product Divider
      -------------------------------- */}
      <div
        className="relative w-full"
        style={{
          zIndex: 1001,
          position: "relative",
          marginTop: "-8rem", // Default margin-top
        }}
      >
        <div
          className={`
            block transform mx-auto float-right w-[240px] sm:w-[385px] md:w-[500px] lg:w-[615px]
          `}
          style={{
            marginBottom: "0rem",  // Extra space below the divider
            marginRight: "0rem",   // Adjust spacing to the right
            marginTop: "-7rem",    // Adjust top margin for smaller screens
            maxWidth: "",          // Shrink the width for smaller screens
          }}
        >
          {/* All media queries for the .product-divider */}
          <style>
            {`
              /* Catch-All Styles for Product Divider */
              .product-divider {
                margin-top: -7rem;
                margin-right: 1rem;
                margin-bottom: 9rem;
                margin-left: 0rem;
                padding-top: 0rem;
                padding-right: 0rem;
                padding-bottom: 0rem;
                padding-left: 0rem;
                max-width: 100%;
              }

              /* Below Small Screens */
              @media (max-width: 639px) {
                .product-divider {
                  margin-top: 3rem;
                  margin-right: 0.5rem;
                  margin-bottom: 5rem;
                  margin-left: 4rem;
                  padding-top: 0.5rem;
                  padding-right: 0.5rem;
                  padding-bottom: 0.5rem;
                  padding-left: 0.5rem;
                  max-width: 65%;
                }
              }

              /* Small Screens */
              @media (min-width: 640px) and (max-width: 767px) {
                .product-divider {
                  margin-top: -1rem;
                  margin-right: 0rem;
                  margin-bottom: 6rem;
                  margin-left: 6rem;
                  padding-top: 1rem;
                  padding-right: 1rem;
                  padding-bottom: 0.5rem;
                  padding-left: 0.5rem;
                  max-width: 60%;
                }
              }

              /* Medium Screens */
              @media (min-width: 768px) and (max-width: 1023px) {
                .product-divider {
                  margin-top: -10rem;
                  margin-right: 5rem;
                  margin-bottom: 7rem;
                  margin-left: 7.5rem;
                  padding-top: 1.5rem;
                  padding-right: 1.5rem;
                  padding-bottom: 1rem;
                  padding-left: 1rem;
                  max-width: 70%;
                }
              }

              /* Large Screens */
              @media (min-width: 1024px) and (max-width: 1279px) {
                .product-divider {
                  margin-top: -11rem;
                  margin-right: 5rem;
                  margin-bottom: 10rem;
                  margin-left: 10rem;
                  padding-top: 2rem;
                  padding-right: 2rem;
                  padding-bottom: 1.5rem;
                  padding-left: 1.5rem;
                  max-width: 60%;
                }
              }

              /* Extra Large Screens */
              @media (min-width: 1280px) {
                .product-divider {
                  margin-top: -18rem;
                  margin-right: 5rem;
                  margin-bottom: 12rem;
                  margin-left: 3rem;
                  padding-top: 2.5rem;
                  padding-right: 2.5rem;
                  padding-bottom: 2rem;
                  padding-left: 2rem;
                  max-width: 80%;
                }
              }
            `}
          </style>

          <img
            src={require("../assets/RR-ProductHeroImg.png")}
            alt="Product Divider"
            className="block object-contain product-divider"
            style={{
              maskImage: "linear-gradient(to bottom, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
            }}
          />
        </div>
      </div>

      {/* --------------------------------
           Product Line Section
      -------------------------------- */}
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
