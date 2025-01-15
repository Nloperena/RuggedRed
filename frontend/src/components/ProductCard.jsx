import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Shimmer style for the skeleton loader.
 */
const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background: "linear-gradient(to right, #e0e0e0 8%, #f0f0f0 18%, #e0e0e0 33%)",
  backgroundSize: "1000px 100%",
};

/**
 * Skeleton loader block for loading states.
 */
function SkeletonBlock({ className, style }) {
  return (
    <div
      className={`${className} relative overflow-hidden bg-[#A9AAAC]`}
      style={{ ...shimmerStyle, ...style }}
    />
  );
}

const ProductCard = ({ product, delay = 0 }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  const hasProduct = !!product?.fields;

  useEffect(() => {
    if (hasProduct) {
      setIsTextLoaded(true);
    }
  }, [hasProduct]);

  const { name, slogan, price, amazonUrl, productPageUrl, images } =
    product?.fields || {};

  const imageUrl =
    Array.isArray(images) && images.length > 0
      ? images[0].fields.file.url
      : null;

  return (
    <div
      className="
        relative
        bg-[#D3242A]
        rounded-3xl /* More rounded corners */
        p-6
        text-center
        overflow-hidden
        transition
        duration-300
        hover:-translate-y-1
        shadow-lg
        hover:shadow-xl
      "
      style={{
        minHeight: "700px", // Increased height for balance
        boxShadow: "inset 0 6px 12px rgba(0, 0, 0, 0.6)", // Harsher inlet shadow
      }}
    >
      {/* Loading skeleton */}
      <AnimatePresence>
        {(!isImageLoaded || !isTextLoaded) && (
          <motion.div
            key="skeleton"
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {!isImageLoaded && (
              <SkeletonBlock className="w-96 h-96 rounded-lg mb-4" />
            )}
            {!isTextLoaded && (
              <>
                <SkeletonBlock className="w-48 h-5 rounded-md mb-2" />
                <SkeletonBlock className="w-64 h-4 rounded-md mb-2" />
                <SkeletonBlock className="w-24 h-4 rounded-md mb-4" />
                <SkeletonBlock className="w-40 h-8 rounded-full" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "Product Image"}
            className="mx-auto mb-6 w-96 h-96 object-cover rounded-lg" // Increased size
            onLoad={() => setIsImageLoaded(true)}
          />
        )}

        {/* Product name */}
        {isTextLoaded && name && (
          <h3
            className="text-3xl font-semibold text-white mb-4"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {name}
          </h3>
        )}

        {/* Product slogan */}
        {isTextLoaded && slogan && (
          <p className="text-white italic mb-4">{slogan}</p>
        )}

        {/* Product price */}
        {isTextLoaded && price && (
          <p
            className="text-2xl font-bold text-white mb-6"
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
              bg-black
              text-white
              py-3
              px-8
              rounded-full
              hover:bg-[#000000e6]
              transition
              duration-200
              mr-4 /* Add spacing between buttons */
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
              bg-white
              text-black
              py-3
              px-8
              rounded-full
              hover:bg-[#A9AAAC]
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
