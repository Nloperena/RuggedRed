import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import RichTextProductCard from "./RichTextProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * A skeleton list to show while fetching data
 */
function SkeletonList() {
  return (
    <div className="flex flex-col gap-12">
      {Array.from({ length: 2 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-[#F2F2F2] rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
        >
          <div className="w-full h-72 bg-[#E5E5E5] rounded-lg mb-4" />
          <div className="h-5 w-3/4 bg-[#E5E5E5] rounded-md mb-2" />
          <div className="h-4 w-1/2 bg-[#E5E5E5] rounded-md mb-2" />
          <div className="h-4 w-1/3 bg-[#E5E5E5] rounded-md mb-4" />
          <div className="h-8 w-40 bg-[#E5E5E5] rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}

const RichTextProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!client) {
      setError("Contentful client not found!");
      setIsLoading(false);
      return;
    }

    client
      .getEntries({ content_type: "cleaningProductData" })
      .then((response) => {
        if (!response.items.length) {
          setError("No products found in Contentful.");
        } else {
          setProducts(response.items);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("[RichTextProductsSection] Error fetching products:", err);
        setError("Failed to fetch products.");
        setIsLoading(false);
      });
  }, []);

  // If on mobile/tablet, don't render this component at all
  if (isMobile) {
    return null;
  }

  // Display skeleton while loading.
  if (isLoading) {
    return (
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center text-[#D3242A] uppercase text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Products
          </motion.h2>
          <SkeletonList />
        </div>
      </section>
    );
  }

  // Display error state if needed.
  if (error) {
    return (
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-red-600 text-lg font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ⚠️ {error}
          </motion.p>
        </div>
      </section>
    );
  }

  // Only show the first two products
  const visibleProducts = products.slice(0, 2);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 p-2 rounded-full ${
            currentPage === i ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
          } transition`}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-[#D3242A] uppercase text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Products
        </motion.h2>

        {/* Mobile View */}
        <div className="md:hidden">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={`mobile-${product.sys.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  {product.fields?.productImage?.fields?.file?.url && (
                    <img
                      src={product.fields.productImage.fields.file.url}
                      alt={product.fields.productImage.fields.title || 'Product image'}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#D3242A] mb-2" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                    {product.fields?.productName || 'Product Name'}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                    {product.fields?.productDescription || 'Product description coming soon.'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#D3242A]">${product.fields?.price || '0.00'}</span>
                    {product.fields?.productLink && (
                      <button
                        onClick={() => window.location.href = product.fields.productLink}
                        className="bg-[#D3242A] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#B31E24] transition-colors"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={`desktop-${product.sys.id}`}
                  initial={{ 
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: index % 2 === 0 ? -10 : 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <RichTextProductCard
                    product={product}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichTextProductsSection;