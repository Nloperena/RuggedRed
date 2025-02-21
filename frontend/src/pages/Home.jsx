// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
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

import ParallaxSection from "../components/ParallaxSection";

const Home = () => {
  // Set up InView hooks for our two key markers:
  // • The end of the ProductLine section
  // • The top of the RichTextProductsSection
  const { ref: productLineEndInViewRef, inView: productLineEndInView } = useInView({
    threshold: 0,
  });
  const { ref: richTextInViewRef, inView: richTextInView } = useInView({
    threshold: 0,
  });
  // Observer for a footer sentinel so the sticky image is hidden when near the footer.
  const { ref: footerSentinelRef, inView: footerSentinelInView } = useInView({
    threshold: 0.1,
  });

  // Create refs to hold DOM nodes so we can measure their positions.
  const productLineEndElement = useRef(null);
  const richTextElement = useRef(null);

  // Combine the InView ref with our own ref so we can both observe and measure.
  const setProductLineEndRef = (node) => {
    productLineEndInViewRef(node);
    productLineEndElement.current = node;
  };
  const setRichTextRef = (node) => {
    richTextInViewRef(node);
    richTextElement.current = node;
  };

  // Get the scrollY value from Framer Motion.
  const { scrollY } = useViewportScroll();

  // Compute a fade zone.
  // Previously, fadeStart was at the end of the ProductLine.
  // Now, we delay the fade so that it starts only after 25% of the distance between
  // the ProductLine end and the top of the RichText section, and ends at 75% of that distance.
  const [fadeBounds, setFadeBounds] = useState({ fadeStart: 0, fadeEnd: 1 });
  useEffect(() => {
    const updateFadeBounds = () => {
      if (productLineEndElement.current && richTextElement.current) {
        const productLineEndY =
          productLineEndElement.current.getBoundingClientRect().top + window.scrollY;
        const richTextTopY =
          richTextElement.current.getBoundingClientRect().top + window.scrollY;
        // New fade boundaries:
        const fadeStart = productLineEndY + (richTextTopY - productLineEndY) * 0.95;
        const fadeEnd = productLineEndY + (richTextTopY - productLineEndY) * 0.95;
        setFadeBounds({ fadeStart, fadeEnd });
      }
    };
    updateFadeBounds();
    window.addEventListener("resize", updateFadeBounds);
    return () => window.removeEventListener("resize", updateFadeBounds);
  }, []);

  // Map the scrollY value over our fade zone into an opacity value (1 → 0).
  const fadeOpacity = useTransform(
    scrollY,
    [fadeBounds.fadeStart, fadeBounds.fadeEnd],
    [1, 0]
  );

  // We want the sticky image active only after the ProductLine has ended and before the footer comes into view.
  const stickyActive = productLineEndInView && !footerSentinelInView;

  return (
    <>
      {/* Sticky Image Section: Its opacity is controlled by fadeOpacity.
          When stickyActive is false (e.g. near the footer), opacity is forced to 0. */}
      <motion.section
        className="relative"
        style={{ opacity: stickyActive ? fadeOpacity : 0 }}
      >
        <StickyImage />
      </motion.section>

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* --------------------------------
             Product Divider Section
        -------------------------------- */}
        <div
          className="relative w-full"
          style={{ zIndex: 1001, position: "relative", marginTop: "-8rem" }}
        >
          <div
            className="block transform mx-auto float-right w-[240px] sm:w-[385px] md:w-[500px] lg:w-[615px]"
            style={{
              marginBottom: "0rem",
              marginRight: "0rem",
              marginTop: "-7rem",
            }}
          >
            <style>
              {`
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
        <div
          className="relative w-full"
          style={{ zIndex: 1001, position: "relative", marginTop: "-8rem" }}
        >
          <div
            className="block transform mx-auto float-left w-[240px] sm:w-[385px] md:w-[400px] lg:w-[615px]"
            style={{ marginBottom: "5rem" }}
          >
            <style>
              {`
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
                maskImage: "linear-gradient(to bottom, black 95%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 95%, transparent)",
              }}
            />
          </div>
        </div>

        {/* --------------------------------
             Product Line Section
        -------------------------------- */}
        <div>
          <ProductLine />
        </div>
        {/* Sentinel immediately after ProductLine for fade measurement */}
        <div ref={setProductLineEndRef} />

        {/* --------------------------------
             Animated Rich Text Products Section
        -------------------------------- */}
        <ParallaxSection />
        <motion.section
          ref={setRichTextRef}
          className="relative bg-white pt-20 pb-12 px-6 sm:px-10"
          style={{ marginTop: "" }}
          initial={{ opacity: 0, y: 20 }}
          animate={richTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
        >
          <RichTextProductsSection />
        </motion.section>

        {/* --------------------------------
             Comparison Table Section
        -------------------------------- */}
        <div>
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

      {/* Footer Sentinel: an invisible marker so the sticky image hides near the footer */}
      <div ref={footerSentinelRef} style={{ height: "1px" }}></div>
    </>
  );
};

export default Home;
