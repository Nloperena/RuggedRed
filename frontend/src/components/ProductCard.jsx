import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Inline styles for our "shimmer" effect.
 * Mimics a shine moving across the skeleton.
 */
const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background:
    "linear-gradient(to right, #A9AAAC 8%, #CCCCCC 18%, #A9AAAC 33%)",
  backgroundSize: "1000px 100%",
};

/**
 * A small helper component for skeleton placeholders with shimmer effect.
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
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image loading
  const [isTextLoaded, setIsTextLoaded] = useState(false); // Track text loading

  const hasProduct = !!product?.fields; // Check if product exists

  useEffect(() => {
    if (hasProduct) {
      setIsTextLoaded(true); // Mark text as loaded if product data exists
    }
  }, [hasProduct]);

  const { name, slogan, price, amazonUrl, images } = product?.fields || {};
  const imageUrl =
    Array.isArray(images) && images.length > 0
      ? images[0].fields.file.url
      : null;

  return (
    <div
      className="
        relative
        bg-white
        rounded-xl
        p-6
        text-center
        overflow-hidden
        transition
        duration-200
        hover:-translate-y-1
        shadow-[8px_8px_0_rgba(0,0,0,1)]
        hover:shadow-[12px_12px_0_rgba(0,0,0,1)]
      "
      style={{ minHeight: "360px" }}
    >
      {/* Skeleton Loading State */}
      <AnimatePresence>
        {(!isImageLoaded || !isTextLoaded) && (
          <motion.div
            key="skeleton"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out
          >
            {/* Skeleton for the image */}
            {!isImageLoaded && (
              <SkeletonBlock className="w-48 h-48 rounded-lg mb-4" />
            )}

            {/* Skeleton for the text */}
            {!isTextLoaded && (
              <>
                <SkeletonBlock className="w-32 h-5 rounded-md mb-2" />
                <SkeletonBlock className="w-48 h-4 rounded-md mb-2" />
                <SkeletonBlock className="w-20 h-4 rounded-md mb-4" />
                <SkeletonBlock className="w-32 h-8 rounded-full" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content: Fades in when loading is complete */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }} // Fade in
      >
        {/* Product Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "Product Image"}
            className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
            onLoad={() => setIsImageLoaded(true)} // Mark image as loaded
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        )}

        {/* Product Name */}
        {isTextLoaded && name && (
          <h3 className="text-2xl font-bold mb-2 text-[#D3242A]">{name}</h3>
        )}

        {/* Product Slogan */}
        {isTextLoaded && slogan && (
          <p className="text-black italic mb-2">{slogan}</p>
        )}

        {/* Product Price */}
        {isTextLoaded && price && (
          <p className="text-black font-semibold mb-4">${price}</p>
        )}

        {/* Amazon Link Button */}
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
              py-2
              px-6
              rounded-full
              hover:bg-[#333333]
              transition
              duration-200
            "
          >
            Buy on Amazon
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProductCard;
