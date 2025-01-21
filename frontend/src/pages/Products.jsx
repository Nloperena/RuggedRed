import React from "react";
import ProductsSection from "../components/ProductsSection";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Our Products</h1>

      {/* Show a main products section */}
      <ProductsSection />

      {/* Example: four product cards in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Products;
