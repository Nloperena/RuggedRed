import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import SkeletonGrid from './SkeletonGrid';
import SkeletonBlock from './SkeletonBlock';

const OurProductsSection = () => {
  const router = useRouter();
  const { products, isLoading, currentProducts, totalPages, currentPage, fetchProducts } = useProducts();

  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Create refs for scroll animations
  const titleRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  // Use useInView hook for each section
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const paginationInView = useInView(paginationRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchData();
  }, [fetchProducts]);

  const handlePageChange = (newPage) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <motion.section
      id="our-products"
      className="relative bg-white pt-12 pb-12 px-6 sm:px-10"
      style={{
        marginTop: marginTop,
        position: "relative",
        zIndex: 2,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px -20px 30px",
      }}
      // You can also add your scroll-driven animation props here if needed.
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-5xl font-bold text-[#D3242A] mb-12 uppercase tracking-wide text-center"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            OUR PRODUCTS
          </h2>
        </motion.div>

        <div className="flex justify-center w-full">
          {isLoadingProducts ? (
            <SkeletonGrid count={6} />
          ) : products.length === 0 ? (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-black text-lg">No products found!</p>
            </motion.div>
          ) : (
            <div className="w-full max-w-[1400px] mx-auto px-4">
              <motion.div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
                initial={{ opacity: 0 }}
                animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.sys.id || index}
                    initial={{ 
                      opacity: 0,
                      y: 50,
                      scale: 0.95,
                      x: index % 2 === 0 ? -50 : 50
                    }}
                    animate={gridInView ? { 
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      x: 0
                    } : {
                      opacity: 0,
                      y: 50,
                      scale: 0.95,
                      x: index % 2 === 0 ? -50 : 50
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.15
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { 
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                  >
                    {product ? (
                      <ProductCard 
                        product={product}
                        delay={index * 0.1}
                      />
                    ) : (
                      <div className="relative w-full max-w-sm" style={{ height: "500px" }}>
                        <div className="w-full h-full bg-white rounded-3xl shadow-md p-3">
                          <SkeletonBlock className="w-full h-72 mb-2" />
                          <SkeletonBlock className="w-48 h-6 mb-2" />
                          <SkeletonBlock className="w-56 h-4 mb-2" />
                          <SkeletonBlock className="w-24 h-5 mb-2" />
                          <SkeletonBlock className="w-32 h-8 mb-1" />
                          <SkeletonBlock className="w-32 h-8" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div 
                  ref={paginationRef}
                  className="mt-12 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={paginationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3
                  }}
                >
                  <motion.button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                  </motion.button>
                  
                  {renderPageNumbers().map((page, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={paginationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.3 + (index * 0.1)
                      }}
                    >
                      {page}
                    </motion.div>
                  ))}
                  
                  <motion.button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages}
                    className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProductsSection; 