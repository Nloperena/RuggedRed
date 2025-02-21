import React from "react";
import ProductsSection from "../components/ProductsSection";
import ProductCard from "../components/ProductCard";
import PagePrelude from "../components/PagePrelude";

const Products = () => {
  return (
    <>
      <PagePrelude
        heading="Our Product Line"
        subheading="Rugged, Reliable, and Ready to Clean"
        description="Explore a variety of professional-grade cleaning products designed with sustainability and safety in mind. Perfect for any tough job you throw at it."
        imageSrc="/path/to/your/image.jpg"
        imageAlt="Preview of product"
        buttonLabel="Shop Now"
        // onButtonClick={handleButtonClick}
        reverse={false}
      />

      {/* Main products section (e.g. a hero or top-level content) */}
      <ProductsSection />

      
    </>
  );
};

export default Products;
