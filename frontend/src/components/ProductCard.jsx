// ProductCard.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Inline styles for our "shimmer" effect.
 * In a real project, you might move this into a CSS or Tailwind config.
 */
const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background:
    "linear-gradient(to right, #A9AAAC 8%, #CCCCCC 18%, #A9AAAC 33%)",
  backgroundSize: "1000px 100%",
};

/**
 * A small helper component for skeleton placeholders.
 * We use a <div> with our shimmer style to mimic a "shine" moving across.
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
  // Track if the image is done loading
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  // Track if text fields (name, slogan, price, etc.) are ready
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  // If product exists, we have real data
  const hasProduct = !!product?.fields;

  // Once we have data, mark text as loaded (optionally add a small timeout)
  useEffect(() => {
    if (hasProduct) {
      setIsTextLoaded(true);
    }
  }, [hasProduct]);

  // Extract fields from product
  const { name, slogan, price, amazonUrl, images } = product?.fields || {};
  // If there are images, pick the first one
  const imageUrl =
    Array.isArray(images) && images.length > 0
      ? images[0].fields.file.url
      : null;

  return (
    <div
      className="
        relative
        bg-white               /* White card background (swap for bg-[#F2F2F2] if you want light gray) */
        rounded-xl
        p-6
        text-center
        overflow-hidden
        transition
        duration-200
        hover:-translate-y-1
        
        /* HARSH SHADOWS */
        shadow-[8px_8px_0_rgba(0,0,0,1)]   /* Big offset black shadow */
        hover:shadow-[12px_12px_0_rgba(0,0,0,1)]
      "
      style={{ minHeight: "360px" }} // ensures enough space for skeleton placeholders
    >
      {/** 1) Spinner Overlay for the Image **/}
      <AnimatePresence>
        {!isImageLoaded && imageUrl && (
          <motion.div
            key="spinner"
            className="absolute inset-0 flex items-center justify-center bg-transparent"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Spinner in brand red (#D3242A) or black/white if you prefer */}
            <div className="w-8 h-8 border-4 border-[#D3242A] border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/** 2) Main Card Content (fade in once text & image are loaded) **/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTextLoaded && isImageLoaded ? 1 : 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        {/* IMAGE */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name || "Product Image"}
            className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
            onLoad={() => setIsImageLoaded(true)}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        )}

        {/* NAME (brand red for pop, or black if you prefer) */}
        {isTextLoaded && name && (
          <h3 className="text-2xl font-bold mb-2 text-[#D3242A]">
            {name}
          </h3>
        )}

        {/* SLOGAN */}
        {isTextLoaded && slogan && (
          <p className="text-black italic mb-2">{slogan}</p>
        )}

        {/* PRICE */}
        {isTextLoaded && price && (
          <p className="text-black font-semibold mb-4">${price}</p>
        )}

        {/* Black, round button for Amazon link */}
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

      {/** 3) Skeleton Loading for text & image (shimmer effect) **/}
      {(!isTextLoaded || !isImageLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
          {/* Image skeleton */}
          {!isImageLoaded && (
            <SkeletonBlock className="w-48 h-48 rounded-lg mb-4" />
          )}

          {/* Text skeletons */}
          {!isTextLoaded && (
            <>
              <SkeletonBlock className="w-32 h-5 rounded-md mb-2" />
              <SkeletonBlock className="w-48 h-4 rounded-md mb-2" />
              <SkeletonBlock className="w-20 h-4 rounded-md mb-4" />
              <SkeletonBlock className="w-32 h-8 rounded-full" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
