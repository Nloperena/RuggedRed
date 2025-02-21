import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Shimmer style for the skeleton loader
 */
const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background: "linear-gradient(to right, #e0e0e0 8%, #f0f0f0 18%, #e0e0e0 33%)",
  backgroundSize: "1000px 100%",
};

/**
 * Skeleton loader block for loading states
 * The sizing here should match the final elements
 */
function SkeletonBlock({ className, style }) {
  return (
    <div
      className={`${className} relative overflow-hidden bg-[#A9AAAC] rounded-md`}
      style={{ ...shimmerStyle, ...style }}
    />
  );
}

/**
 * Mock product data to simulate loaded content
 * In real usage, you'd fetch from your API / CMS
 */
const mockProductData = {
  fields: {
    name: "Mock Product",
    slogan: "Your #1 cleaning solution",
    price: 12.99,
    images: [
      {
        fields: {
          file: {
            url: "https://via.placeholder.com/400",
          },
        },
      },
    ],
    amazonUrl: "https://www.amazon.com/example",
    productPageUrl: "https://example.com/product-page",
  },
};

const ProductCard = ({ product, delay = 0 }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  // Simulate fetching product data if none is passed in
  // If you already pass real product data, remove this and rely on the real prop
  const hasProduct = product?.fields;
  const [localProduct, setLocalProduct] = useState(null);

  useEffect(() => {
    let timer;
    if (!hasProduct) {
      // Simulate an async fetch
      timer = setTimeout(() => {
        setLocalProduct(mockProductData);
      }, 1200); // e.g. 1.2s fetch time
    } else {
      setLocalProduct(product);
    }
    return () => clearTimeout(timer);
  }, [hasProduct, product]);

  useEffect(() => {
    if (localProduct?.fields) {
      setIsTextLoaded(true);
    }
  }, [localProduct]);

  // Extract data from local or real product
  const { name, slogan, price, amazonUrl, productPageUrl, images } =
    localProduct?.fields || {};

  // First image URL
  const imageUrl =
    Array.isArray(images) && images.length > 0 ? images[0].fields.file.url : null;

  return (
    <div
      className="
        relative
        bg-white
        rounded-3xl
        p-6
        text-center
        transition
        duration-300
        hover:-translate-y-1
        shadow-sm
        hover:shadow-md
        overflow-hidden
      "
      style={{ minHeight: "550px" }} // Slightly shorter than 600-700
    >
      {/* SKELETON LOADER */}
      <AnimatePresence>
        {(!isImageLoaded || !isTextLoaded) && (
          <motion.div
            key="skeleton"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {/* Image skeleton matches final w-64 h-64 shape */}
            {!isImageLoaded && (
              <SkeletonBlock className="w-64 h-64 mb-4" />
            )}

            {/* Text skeletons match the final text arrangement */}
            {!isTextLoaded && (
              <>
                <SkeletonBlock className="w-48 h-6 mb-3" /> {/* Name skeleton */}
                <SkeletonBlock className="w-56 h-4 mb-3" /> {/* Slogan skeleton */}
                <SkeletonBlock className="w-20 h-5 mb-4" /> {/* Price skeleton */}

                {/* Button skeleton(s) */}
                <SkeletonBlock className="w-32 h-8 mb-2" />
                <SkeletonBlock className="w-32 h-8" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT (fades in once loaded) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product image with mild drop shadow */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "Product Image"}
            className="mx-auto mb-4 w-64 h-64 object-cover rounded-lg shadow-sm"
            onLoad={() => setIsImageLoaded(true)}
          />
        )}

        {/* Product name */}
        {isTextLoaded && name && (
          <h3
            className="text-2xl font-semibold text-gray-900 mb-2"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {name}
          </h3>
        )}

        {/* Product slogan */}
        {isTextLoaded && slogan && (
          <p className="text-gray-700 italic mb-4">{slogan}</p>
        )}

        {/* Product price */}
        {isTextLoaded && price != null && (
          <p
            className="text-xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            ${price}
          </p>
        )}

        {/* Buy on Amazon button */}
        {isTextLoaded && amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-2
              bg-[#D3242A]
              text-white
              py-2
              px-6
              rounded-full
              hover:bg-[#B91D23]
              transition
              duration-200
              mr-4
            "
          >
            Buy on Amazon
          </a>
        )}

        {/* View product details button */}
        {isTextLoaded && productPageUrl && (
          <a
            href={productPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-2
              bg-black
              text-white
              py-2
              px-6
              rounded-full
              hover:bg-gray-800
              transition
              duration-200
            "
          >
            View Product Page
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProductCard;
