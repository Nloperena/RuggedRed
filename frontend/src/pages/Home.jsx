// Home.jsx
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
  // State to control the visibility of the sticky decorative image
  const [stickyVisible, setStickyVisible] = useState(false);

  // Observe ProductLine, RichTextProductsSection, and ComparisonTable
  const { ref: productLineRef, inView: productLineInView } = useInView({
    threshold: 0.1, // Trigger when 10% of ProductLine is visible
  });
  const { ref: richTextRef, inView: richTextInView } = useInView({
    threshold: 0, // Trigger as soon as the top enters the viewport
    triggerOnce: true, // Animate only once
  });
  const { ref: comparisonTableRef, inView: comparisonInView } = useInView({
    threshold: 0.1, // Trigger when 10% of ComparisonTable is visible
  });

  // Add an extra observer near the bottom of the page (a “footer sentinel”)
  // so the decorative element is hidden when scrolling near your footer.
  const { ref: footerSentinelRef, inView: footerSentinelInView } = useInView({
    threshold: 0.1,
  });

  // Show StickyImage when neither the ComparisonTable nor the footer sentinel is in view.
  useEffect(() => {
    if (!comparisonInView && !footerSentinelInView) {
      setStickyVisible(true);
    } else {
      setStickyVisible(false);
    }
  }, [comparisonInView, footerSentinelInView]);

  return (
    <>
      {/* Sticky Image Section (only renders when stickyVisible is true) */}
      {stickyVisible && (
        <section className="relative">
          <StickyImage richTextRef={richTextRef} />
        </section>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* --------------------------------
             Product Divider Section
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
            className={`block transform mx-auto float-right w-[240px] sm:w-[385px] md:w-[500px] lg:w-[615px]`}
            style={{
              marginBottom: "0rem",
              marginRight: "0rem",
              marginTop: "-7rem",
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
                  margin-left: 0;
                  padding: 0;
                  max-width: 100%;
                }
                @media (max-width: 639px) {
                  .product-divider {
                    margin-top: 3rem;
                    margin-right: 0.5rem;
                    margin-bottom: 5rem;
                    margin-left: 4rem;
                    padding: 0.5rem;
                    max-width: 65%;
                  }
                }
                @media (min-width: 640px) and (max-width: 767px) {
                  .product-divider {
                    margin-top: -1rem;
                    margin-right: 0;
                    margin-bottom: 6rem;
                    margin-left: 6rem;
                    padding: 1rem;
                    max-width: 60%;
                  }
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                  .product-divider {
                    margin-top: -10rem;
                    margin-right: 5rem;
                    margin-bottom: 7rem;
                    margin-left: 7.5rem;
                    padding: 1.5rem;
                    max-width: 70%;
                  }
                }
                @media (min-width: 1024px) and (max-width: 1279px) {
                  .product-divider {
                    margin-top: -11rem;
                    margin-right: 5rem;
                    margin-bottom: 10rem;
                    margin-left: 10rem;
                    padding: 2rem;
                    max-width: 60%;
                  }
                }
                @media (min-width: 1280px) {
                  .product-divider {
                    margin-top: -13rem;
                    margin-right: 5rem;
                    margin-bottom: 12rem;
                    margin-left: 0;
                    padding: 2.5rem;
                    max-width: 86%;
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
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 95%, transparent)",
              }}
            />
          </div>
        </div>

        {/* --------------------------------
             Mascot Divider Section
        -------------------------------- */}
        {true && (
          <div
            className="relative w-full"
            style={{
              zIndex: 1001,
              position: "relative",
              marginTop: "-8rem",
            }}
          >
            <div
              className={`block transform mx-auto float-left w-[240px] sm:w-[385px] md:w-[400px] lg:w-[615px]`}
              style={{
                marginBottom: "5rem",
              }}
            >
              <style>
                {`
                  /* Catch-All Styles for Mascot Divider */
                  .mascot-divider {
                    margin-top: -7rem;
                    margin-left: 1rem;
                    margin-bottom: 9rem;
                    margin-right: 0;
                    padding: 0;
                    max-width: 100%;
                  }
                  @media (max-width: 639px) {
                    .mascot-divider {
                      margin-top: -4rem;
                      margin-left: 0.5rem;
                      margin-bottom: 0;
                      margin-right: 4rem;
                      padding: 0.5rem;
                      max-width: 135%;
                    }
                  }
                  @media (min-width: 640px) and (max-width: 767px) {
                    .mascot-divider {
                      margin-top: -13rem;
                      margin-left: 1rem;
                      margin-bottom: 0;
                      margin-right: 0;
                      padding: 1rem;
                      max-width: 83%;
                    }
                  }
                  @media (min-width: 768px) and (max-width: 1023px) {
                    .mascot-divider {
                      margin-top: -24rem;
                      margin-left: -1.5rem;
                      margin-bottom: -2rem;
                      margin-right: 5rem;
                      padding: 1.5rem;
                      max-width: 115%;
                    }
                  }
                  @media (min-width: 1024px) and (max-width: 1279px) {
                    .mascot-divider {
                      margin-top: -62rem;
                      margin-left: -14rem;
                      margin-bottom: 10rem;
                      margin-right: 5rem;
                      padding: 2rem;
                      max-width: 160%;
                    }
                  }
                  @media (min-width: 1280px) {
                    .mascot-divider {
                      margin-top: -60rem;
                      margin-left: -20rem;
                      margin-bottom: 0;
                      margin-right: 5rem;
                      padding: 2.5rem 2.5rem 2rem 10rem;
                      max-width: 215%;
                    }
                  }
                `}
              </style>
              <img
                src={require("../assets/RRMascot.png")}
                alt="Mascot Divider"
                className="block object-contain mascot-divider"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 95%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 95%, transparent)",
                }}
              />
            </div>
          </div>
        )}

        {/* --------------------------------
             Product Line Section
        -------------------------------- */}
        <div ref={productLineRef}>
          <ProductLine />
        </div>

        {/* --------------------------------
             Animated Rich Text Products Section
        -------------------------------- */}
        <motion.section
          ref={richTextRef}
          className="relative bg-white pt-20 pb-12 px-6 sm:px-10"
          style={{ marginTop: "40rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={richTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, 0.2, 0.9],
          }}
        >
          <RichTextProductsSection />
        </motion.section>

        {/* --------------------------------
             Comparison Table Section
        -------------------------------- */}
        <div ref={comparisonTableRef}>
          <ComparisonTable />
        </div>

        {/* --------------------------------
             Testimonials Section
        -------------------------------- */}
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

        {/* --------------------------------
             Additional Content Sections
        -------------------------------- */}
        <AutoScrollingImages />
        <AboutRed />
        <BlogSection />
      </div>

      {/* Invisible Footer Sentinel Element */}
      <div ref={footerSentinelRef} style={{ height: "1px" }}></div>
    </>
  );
};

export default Home;
