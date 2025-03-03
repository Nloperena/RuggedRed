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
    <motion.div 
      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
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

      <div className={`flex flex-col md:flex-row ${flip ? "md:flex-row-reverse" : ""}`}>
        {/* IMAGE SECTION */}
        {imageUrl && (
          <div className="md:w-1/2">
            <div className="h-full flex items-center justify-center p-6">
              <img
                src={imageUrl}
                alt={productTitle || "Product Image"}
                className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-sm"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        )}

        {/* TEXT SECTION */}
        <div className="md:w-1/2 flex flex-col justify-between p-8">
          <div>
            {isTextLoaded && productTitle && (
              <h3
                className="text-4xl sm:text-5xl font-bold text-[#D3242A] mb-6 uppercase tracking-wide leading-tight"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                {productTitle}
              </h3>
            )}

            {isTextLoaded && shortProductDescription && (
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {shortProductDescription}
              </p>
            )}
          </div>

          <div className="mt-auto">
            {isTextLoaded && typeof price === "number" && (
              <p className="text-3xl font-bold text-gray-900 mb-6">
                ${price.toFixed(2)}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {isTextLoaded && buyNowButtonUrl && (
                <a
                  href={buyNowButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D3242A] text-white font-bold py-4 px-8 rounded-full shadow-md hover:bg-[#B91D23] transition-all hover:scale-105 text-center text-lg flex-1"
                >
                  Buy Now
                </a>
              )}
              <Link
                to={`/product/${product?.sys?.id}`}
                className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-md hover:bg-gray-900 transition-all hover:scale-105 text-center text-lg flex-1"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RichTextProductCard;