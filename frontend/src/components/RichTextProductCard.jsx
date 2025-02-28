import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background: "linear-gradient(to right, #e0e0e0 8%, #f0f0f0 18%, #e0e0e0 33%)",
  backgroundSize: "1000px 100%",
};

function SkeletonBlock({ className, style }) {
  return (
    <div
      className={`${className} relative overflow-hidden bg-[#A9AAAC] rounded-lg`}
      style={{ ...shimmerStyle, ...style }}
    />
  );
}

const RichTextProductCard = ({ product, flip = false, delay = 0 }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  const hasProduct = !!product?.fields;

  useEffect(() => {
    if (hasProduct) {
      setIsTextLoaded(true);
    }
  }, [hasProduct]);

  const {
    productTitle,
    productHeroImage,
    price,
    buyNowButtonUrl,
    shortProductDescription,
  } = product?.fields || {};

  const imageUrl = productHeroImage?.fields?.file?.url || null;

  return (
    <div className="relative w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <AnimatePresence>
        {(!isImageLoaded || !isTextLoaded) && (
          <motion.div
            key="skeleton"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#F9FAFB] rounded-xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{ zIndex: 10 }}
          >
            {!isImageLoaded && (
              <SkeletonBlock className="w-full h-[400px] rounded-lg mb-4" />
            )}
            {!isTextLoaded && (
              <>
                <SkeletonBlock className="w-1/2 h-6 rounded-md mb-2" />
                <SkeletonBlock className="w-3/4 h-5 rounded-md mb-2" />
                <SkeletonBlock className="w-24 h-5 rounded-md mb-4" />
                <SkeletonBlock className="w-32 h-10 rounded-full" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
          flip ? "md:flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, x: flip ? 50 : -50 }}
        animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0, x: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center items-center">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={productTitle || "Product Image"}
              className="w-full max-w-lg h-[400px] object-cover rounded-lg shadow-md"
              onLoad={() => setIsImageLoaded(true)}
            />
          )}
        </div>

        {/* TEXT SECTION */}
        <div className="md:w-1/2 text-left">
          {isTextLoaded && productTitle && (
            <h3
              className="text-3xl font-bold text-[#D3242A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              {productTitle}
            </h3>
          )}

          {isTextLoaded && shortProductDescription && (
            <p className="text-lg italic text-gray-600 mb-4 leading-relaxed">
              {shortProductDescription}
            </p>
          )}

          {isTextLoaded && typeof price === "number" && (
            <p className="text-2xl font-semibold text-gray-900 mb-6">
              ${price.toFixed(2)}
            </p>
          )}

          {/* Buttons */}
          <div className="flex space-x-4">
            {isTextLoaded && buyNowButtonUrl && (
              <a
                href={buyNowButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#B91D23] transition-transform transform hover:scale-105"
              >
                Buy Now
              </a>
            )}
            <Link
              to={`/product/${product?.sys?.id}`}
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105"
            >
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RichTextProductCard;
