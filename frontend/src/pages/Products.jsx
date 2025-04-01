import React from "react";
import ProductsSection from "../components/ProductsSection";
import CustomHeader from "../components/CustomHeader";
import kitchen3 from "../assets/kitchen3.png";
import ComparisonTable from "../components/ComparisonTable";
import Testimonials from "../components/Testimonials";

const Products = () => {
  return (
    <>
      <CustomHeader
        backgroundImg={kitchen3}
        layeredImage={kitchen3}
        heading="Count on Us for a Real Clean."
        subheading="Rugged, Reliable, and Ready to Clean"
        description="Explore a variety of professional-grade cleaning products designed with sustainability and safety in mind. Perfect for any tough job you throw at it."
        highlightLine="Discover innovative solutions for every cleaning challenge."
        buttonLabel="Shop Now"
      />
      <ProductsSection />
      <ComparisonTable />
      <Testimonials />
    </>
  );
};

export default Products;
