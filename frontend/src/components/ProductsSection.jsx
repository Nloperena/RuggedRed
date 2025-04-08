import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../contentful";
import ProductCard from "./ProductCard";
// Replace Heroicons import with FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

/**
 * A simple skeleton placeholder grid.
 * You can customize the number of items if desired.
 */
function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-[#F2F2F2] rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Image placeholder */}
          <div className="w-full h-64 bg-[#E5E5E5] rounded-lg mb-4 shimmer" />
          {/* Title placeholder */}
          <div className="h-5 w-3/4 bg-[#E5E5E5] rounded mb-2 shimmer" />
          {/* Subtitle placeholder */}
          <div className="h-4 w-1/2 bg-[#E5E5E5] rounded mb-4 shimmer" />
          {/* Button placeholder */}
          <div className="h-8 w-1/3 bg-[#E5E5E5] rounded-full shimmer" />
        </motion.div>
      ))}
    </div>
  );
}

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    // Fetch from the updated Contentful model
    client
      .getEntries({ content_type: "cleaningProductData" })
      .then((response) => {
        setProducts(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded-full ${
            currentPage === i 
              ? "bg-[#D3242A] text-white" 
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-[#D3242A] mb-12 uppercase tracking-wide text-center"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          OUR PRODUCTS
        </motion.h2>

        <div className="flex justify-center w-full">
          {isLoading ? (
            <SkeletonGrid count={6} />
          ) : products.length === 0 ? (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-black text-lg">No products found!</p>
            </motion.div>
          ) : (
            <div className="w-full max-w-[1400px] mx-auto px-4">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.sys.id || index}
                    initial={{ 
                      opacity: 0,
                      y: 50,
                      scale: 0.95
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { 
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                  >
                    <ProductCard 
                      product={product}
                      delay={index * 0.1}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div 
                  className="mt-12 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3
                  }}
                >
                  <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                  </button>
                  
                  {renderPageNumbers()}
                  
                  <button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages}
                    className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;