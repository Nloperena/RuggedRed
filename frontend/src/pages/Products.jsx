import React from "react";
import ProductsSection from "../components/ProductsSection";
import ComparisonTable from "../components/ComparisonTable";
import Testimonials from "../components/Testimonials";

const Products = () => {
  return (
    <>
      <div id="our-products">
        <ProductsSection />
      </div>
      <ComparisonTable />
      <Testimonials />
    </>
  );
};

export default Products;
