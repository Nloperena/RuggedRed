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
        heading="Our Products"
        subheading="Powerful & Sustainable"
        description="Professional-grade cleaning solutions for any challenge."
      />
      <div id="our-products">
        <ProductsSection />
      </div>
      <ComparisonTable />
      <Testimonials />
    </>
  );
};

export default Products;
