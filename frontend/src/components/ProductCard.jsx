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
      className={`${className} relative overflow-hidden bg-[#A9AAAC] rounded-md`}
      style={{ ...shimmerStyle, ...style }}
    />
  );
}

const ProductCard = ({ product, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  const hasProduct = product && product.fields;
  const [localProduct, setLocalProduct] = useState(null);

  useEffect(() => {
    if (hasProduct) {
      setLocalProduct(product);
    }
  }, [hasProduct, product]);

  useEffect(() => {
    if (localProduct && localProduct.fields) {
      setIsTextLoaded(true);
    }
  }, [localProduct]);

  const { sys } = localProduct || {};
  const {
    productTitle,
    slogan,
    productHeroImage,
    price,
    buyNowButtonUrl,
    shortProductDescription,
    detailedProductDescription,
  } = (localProduct && localProduct.fields) || {};

  const imageUrl = productHeroImage?.fields?.file?.url || null;

  return (
    <div
      className="relative w-full max-w-sm cursor-pointer"
      style={{
        perspective: "1000px", // 3D perspective
        height: "500px",       // Card height
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute w-full h-full bg-white rounded-3xl shadow-md p-3"
          style={{ backfaceVisibility: "hidden" }}
        >
          <AnimatePresence>
            {(!isImageLoaded || !isTextLoaded) && (
              <motion.div
                key="skeleton"
                className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                {!isImageLoaded && (
                  <SkeletonBlock className="w-full h-72 mb-2" />
                )}
                {!isTextLoaded && (
                  <>
                    <SkeletonBlock className="w-48 h-6 mb-2" />
                    <SkeletonBlock className="w-56 h-4 mb-2" />
                    <SkeletonBlock className="w-24 h-5 mb-2" />
                    <SkeletonBlock className="w-32 h-8 mb-1" />
                    <SkeletonBlock className="w-32 h-8" />
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-2 w-full h-full"
          >
            {/* IMAGE + TITLE + SLOGAN */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={productTitle || "Product Image"}
                className="w-48 h-48 object-cover rounded-lg drop-shadow-xl"
                onLoad={() => setIsImageLoaded(true)}
              />
            )}

            {/* Product Title */}
            {isTextLoaded && productTitle && (
              <h3
                className="text-[1.4rem] font-bold text-gray-900 tracking-wide leading-tight"
                style={{
                  fontFamily: "Geogrotesque, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {productTitle}
              </h3>
            )}

            {/* Slogan */}
            {isTextLoaded && slogan && (
              <p
                className="text-base italic text-gray-700"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {slogan}
              </p>
            )}

            {/* Price */}
            {isTextLoaded && typeof price === "number" && (
              <p
                className="text-lg font-bold text-gray-900"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                ${price.toFixed(2)}
              </p>
            )}

            {/* Buttons column */}
            <div className="flex flex-col gap-4 mx-auto mt-4">
              {isTextLoaded && buyNowButtonUrl && (
                <a
                  href={buyNowButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-[#D3242A]
                    text-white
                    py-4
                    px-8
                    rounded-full
                    hover:bg-[#B91D23]
                    transition
                    whitespace-nowrap
                    text-center
                  "
                >
                  Buy Now
                </a>
              )}
              {isTextLoaded && sys?.id && (
                <Link
                  to={`/product/${sys.id}`}
                  className="
                    bg-black
                    text-white
                    py-4
                    px-8
                    rounded-full
                    hover:bg-gray-800
                    transition
                    whitespace-nowrap
                    text-center
                  "
                >
                  More Details
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute w-full h-full bg-white rounded-3xl shadow-md p-3 flex flex-col justify-center items-center text-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {detailedProductDescription ? (
            <>
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                Product Details
              </h3>
              <p
                className="text-gray-700 leading-relaxed text-sm overflow-auto px-2"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                {detailedProductDescription}
              </p>
            </>
          ) : (
            <div className="flex-grow flex justify-center items-center text-gray-500 text-sm">
              No detailed description available.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;