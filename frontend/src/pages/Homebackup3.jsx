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
import OurProductsSection from "../components/OurProductSection";

const Home = () => {
  // InView hooks for key markers.
  const { ref: productLineEndInViewRef, inView: productLineEndInView } = useInView({
    threshold: 0,
  });
  const { ref: richTextInViewRef, inView: richTextInView } = useInView({
    threshold: 0,
  });
  const { ref: footerSentinelRef, inView: footerSentinelInView } = useInView({
    threshold: 0.1,
  });

  // Create refs.
  const productLineEndElement = useRef(null);
  const richTextElement = useRef(null);
  const setProductLineEndRef = (node) => {
    productLineEndInViewRef(node);
    productLineEndElement.current = node;
  };
  const setRichTextRef = (node) => {
    richTextInViewRef(node);
    richTextElement.current = node;
  };

  const { scrollY } = useViewportScroll();

  // Compute fade zone for the sticky image.
  const [fadeBounds, setFadeBounds] = useState({ fadeStart: 0, fadeEnd: 1 });
  useEffect(() => {
    const updateFadeBounds = () => {
      if (productLineEndElement.current && richTextElement.current) {
        const productLineEndY =
          productLineEndElement.current.getBoundingClientRect().top + window.scrollY;
        const richTextTopY =
          richTextElement.current.getBoundingClientRect().top + window.scrollY;
        const fadeStart = productLineEndY + (richTextTopY - productLineEndY) * 0.95;
        setFadeBounds({ fadeStart, fadeEnd: fadeStart });
      }
    };
    updateFadeBounds();
    window.addEventListener("resize", updateFadeBounds);
    return () => window.removeEventListener("resize", updateFadeBounds);
  }, []);

  const fadeOpacity = useTransform(
    scrollY,
    [fadeBounds.fadeStart, fadeBounds.fadeEnd],
    [1, 0]
  );

  // Scroll-driven animation for the Rich Text section.
  // Adjusted the range to be slightly more noticeable.
  const sectionOpacity = useTransform(scrollY, [200, 300], [0, 1]);
  // For a more noticeable parallax effect, we map scrollY from 200px to 300px onto a translation of 40px downward to 0.
  const sectionY = useTransform(scrollY, [200, 300], [40, 0]);

  const stickyActive = productLineEndInView && !footerSentinelInView;

  // Responsive margin-top for the overlay Our Products section.
  const getMarginTop = (width) => {
    if (width >= 2560) return "-100px";    // 4K displays
    else if (width >= 1536) return "-150px"; // Large desktops
    else if (width >= 1280) return "-190px"; // Standard desktops
    else if (width >= 1024) return "-250px"; // Smaller desktops / large tablets
    else if (width >= 768) return "-300px";   // Tablets
    else return "-350px";                     // Mobile devices
  };

  const [sectionMarginTop, setSectionMarginTop] = useState(getMarginTop(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setSectionMarginTop(getMarginTop(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sticky Image Section */}
      <motion.section
        className="relative"
        style={{ opacity: stickyActive ? fadeOpacity : 0 }}
      >
        <StickyImage />
      </motion.section>

      <div className="relative z-10">
        <Hero />

        {/* Product Divider Section */}
        <div
          className="relative w-full"
          style={{ zIndex: 1001, position: "relative", marginTop: "-8rem" }}
        >
          <div
            className="block transform mx-auto float-right w-[240px] sm:w-[385px] md:w-[500px] lg:w-[615px]"
            style={{ marginBottom: "0rem", marginRight: "0rem", marginTop: "-7rem" }}
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
                    margin-top: -20rem;
                    margin-right: 5rem;
                    margin-bottom: 10rem;
                    margin-left: 8rem;
                    padding: 2rem;
                    max-width: 80%;
                  }
                }
                @media (min-width: 1280px) {
                  .product-divider {
                    margin-top: -30rem;
                    margin-right: -74rem;
                    margin-bottom: 12rem;
                    margin-left: -38rem;
                    padding: 2.5rem;
                    max-width: 130%;
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

        {/* Mascot Divider Section */}
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
                    margin-top: -72rem;
                    margin-left: -24rem;
                    margin-bottom: 10rem;
                    margin-right: 5rem;
                    padding: 2rem;
                    max-width: 180%;
                  }
                }
                @media (min-width: 1280px) {
                  .mascot-divider {
                    margin-top: -66rem;
                    margin-left: -0rem;
                    margin-bottom: 0;
                    margin-right: 5rem;
                    padding: 6.5rem 2.5rem 2rem 10rem;
                    max-width: 215%;
                  }
                }
              `}
            </style>
            <img
              src={require("../assets/RRMascot-smaller.png")}
              alt="Mascot Divider"
              className="block object-contain mascot-divider"
              style={{
                maskImage: "linear-gradient(to bottom, black 95%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
              }}
            />
          </div>
        </div>

        {/* Product Line Section (layered above ParallaxSection) */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            boxShadow: "0px 20px 30px rgba(0,0,0,0.3)",
          }}
        >
          <ProductLine />
        </div>
        <div ref={setProductLineEndRef} />

        {/* Parallax Section (background layer) with OurProductsSection inside */}
        <div style={{ position: "relative", zIndex: 1, marginTop: "0rem", paddingBottom: "" }}>
          <ParallaxSection />
          
          <OurProductsSection />
        </div>

        {/* Animated Rich Text Production Section with its own parallax effect */}
        {/* <motion.section
          ref={setRichTextRef}
          className="relative bg-white pt-12 pb-12 px-6 sm:px-10"
          style={{
            marginTop: sectionMarginTop,
            position: "relative",
            zIndex: 2,
            boxShadow: "0px -20px 30px rgba(0,0,0,0.3)",
            opacity: sectionOpacity,
            // Increase the vertical translation range for a more pronounced parallax effect:
            y: sectionY,
          }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
        >
          <RichTextProductsSection />
        </motion.section> */}

        {/* Comparison Table Section */}
        <div>
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

      {/* Footer Sentinel */}
      <div ref={footerSentinelRef} style={{ height: "1px" }}></div>
    </>
  );
};

export default Home;
