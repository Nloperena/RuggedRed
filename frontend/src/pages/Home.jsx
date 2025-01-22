import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
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
  const [stickyVisible, setStickyVisible] = useState(false); // Control StickyImage visibility

  // Observe Hero section
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5, // Trigger when 50% of Hero is visible
    onChange: (inView) => {
      if (inView) setStickyVisible(true); // Show StickyImage
    },
  });

  // Observe ComparisonTable
  const { ref: comparisonTableRef, inView: comparisonInView } = useInView({
    threshold: 0.5, // Trigger when 50% of ComparisonTable is visible
    onChange: (inView) => {
      if (inView) setStickyVisible(false); // Hide StickyImage
    },
  });

  return (
    <>
      {/* Sticky Image Section */}
      {stickyVisible && (
        <section className="relative">
          <StickyImage />
        </section>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div ref={heroRef}> {/* Observe Hero section */}
          <Hero />
        </div>

        <MascotDivider />
        <ProductDivider />

        {/* Product Line Section */}
        <ProductLine />

        {/* Products Section */}
        <section
          className="relative bg-white py-20 px-6 sm:px-10"
          style={{ marginTop: "45rem" }} // Add 45rem top margin
        >
          <RichTextProductsSection />
        </section>

        {/* Comparison Table Section */}
        <div ref={comparisonTableRef}> {/* Observe ComparisonTable */}
          <ComparisonTable />
        </div>

        {/* Testimonials Section with Cropped Background */}
        <section className="relative z-30 text-white py-20 px-6 overflow-hidden">
          {/* Background Container */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm"
            style={{
              backgroundImage: `url('https://images.ctfassets.net/hdznx4p7ef81/4bmH8LUErm4lVMKisci0EQ/afe5be750a53f06d5c46903aafd010e5/CD_Cleaning_Grease_on_Table.jpg')`,
              backgroundPosition: "center top", // Move the image to the top
              transform: "translateY(-2rem)", // Crop the top by 2rem
              backgroundSize: "cover",
              opacity: 0.7, // Adjust opacity for washed-out effect
            }}
          ></div>

          {/* White Overlay */}
          <div className="absolute inset-0 -z-10 bg-white opacity-40"></div>

          <Testimonials />
        </section>

        {/* Carousel and Other Sections */}
        <AutoScrollingImages />

        <AboutRed />
        <BlogSection />
      </div>
    </>
  );
};

export default Home;
