import React, { useState, useEffect } from "react";
// useInView lets us monitor if elements are visible in the viewport
import { useInView } from "react-intersection-observer";

// Importing all necessary components
import Hero from "../components/Hero";
import MascotDivider from "../components/MascotDivider";
import ProductDivider from "../components/ProductDivider";
import ProductLine from "../components/ProductLine";
import StickyImage from "../components/StickyImage"; // The pinned background
import RichTextProductsSection from "../components/RichTextProductsSection";
import Testimonials from "../components/Testimonials";
import ImageCarousel from "../components/ImageCarousel";
import AboutRed from "../components/AboutRed";
import BlogSection from "../components/BlogSection";
import ComparisonTable from "../components/ComparisonTable";
import AutoScrollingImages from "../components/AutoScrollingImages";

const Home = () => {
  // 1) State to control the visibility of StickyImage
  const [stickyVisible, setStickyVisible] = useState(false);

  // 2) Watch the ProductLine section
  const { ref: productLineRef, inView: productLineInView } = useInView({
    threshold: 0.1, // Trigger if 10% or more of ProductLine is visible
  });

  // 3) Watch the RichTextProductsSection ("Our Products") with multiple thresholds
  const {
    ref: richTextRef,
    inView: richTextInView,
    entry: richTextEntry,
  } = useInView({
    threshold: [0.1, 0.5], // Trigger at 10% and 50% visibility
  });

  // 4) Watch the ComparisonTable section
  const { ref: comparisonTableRef, inView: comparisonInView } = useInView({
    threshold: 0.01, // Trigger as soon as 1% of ComparisonTable is visible
  });

  // 5) State to store how much of RichText is visible (0 to 1)
  const [richTextRatio, setRichTextRatio] = useState(0);

  // 6) Update richTextRatio whenever RichText's visibility changes
  useEffect(() => {
    if (richTextEntry) {
      setRichTextRatio(richTextEntry.intersectionRatio);
    }
  }, [richTextEntry]);

  // 7) Effect to determine when to show or hide StickyImage
  useEffect(() => {
    if (comparisonInView) {
      // If ComparisonTable is at least 1% visible, hide StickyImage
      setStickyVisible(false);
    } else if (productLineInView) {
      // If ProductLine is at least 10% visible, show StickyImage
      setStickyVisible(true);
    } else if (richTextInView && richTextRatio < 0.5) {
      // If RichText is at least 10% visible but less than 50%, show StickyImage
      setStickyVisible(true);
    } else {
      // Otherwise, hide StickyImage
      setStickyVisible(false);
    }
  }, [comparisonInView, productLineInView, richTextInView, richTextRatio]);

  return (
    <>
      {/* 8) Conditionally render StickyImage if stickyVisible is true */}
      {stickyVisible && (
        <section className="relative">
          <StickyImage />
        </section>
      )}

      {/* 9) Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        <MascotDivider />
        <ProductDivider />

        {/* Product Line Section observed by productLineRef */}
        <div ref={productLineRef}>
          <ProductLine />
        </div>

        {/* Products Section ("Our Products") with 45rem top margin */}
        <section
          ref={richTextRef} // Observing RichText section
          className="relative bg-white py-20 px-6 sm:px-10"
          style={{ marginTop: "40rem" }} // Maintaining the large top margin
        >
          <RichTextProductsSection />
        </section>

        {/* Comparison Table Section observed by comparisonTableRef */}
        <div ref={comparisonTableRef}>
          <ComparisonTable />
        </div>

        {/* Testimonials Section with Blurred Background and White Overlay */}
        <section className="relative z-30 text-white py-20 px-6 overflow-hidden">
          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm"
            style={{
              backgroundImage: `url('https://images.ctfassets.net/hdznx4p7ef81/4bmH8LUErm4lVMKisci0EQ/afe5be750a53f06d5c46903aafd010e5/CD_Cleaning_Grease_on_Table.jpg')`,
              backgroundPosition: "center top", // Positioning the image
              transform: "translateY(-2rem)", // Slightly shifting the image for cropping effect
              backgroundSize: "cover",
              opacity: 0.7, // Adjusting opacity for a washed-out look
            }}
          ></div>

          {/* White Overlay for Enhanced Readability */}
          <div className="absolute inset-0 -z-10 bg-white opacity-40"></div>

          {/* Testimonials Content */}
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
