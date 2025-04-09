import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ComparisonTable from "../components/ComparisonTable";
import MadeInAmerica from "../components/MadeInAmerica";
import Button from "../components/Button";
import "../index.css"; 
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SparkleIcon from "../assets/icons/Sparkle.svg";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!products || products.length === 0) {
      setIsLoading(true);
      return;
    }

    const foundProduct = products.find((p) => p.sys.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setNotFound(false);
    } else {
      setProduct(null);
      setNotFound(true);
    }
    setIsLoading(false);
  }, [productId, products]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl mb-4">Product not found</div>
        <Button
          onClick={() => navigate('/products')}
          variant="primary"
          size="medium"
        >
          Back to Products
        </Button>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const {
    productTitle = "",
    productHeroImage = {},
    price = 0,
    buyNowButtonUrl = "",
    shortProductDescription = "",
    keyFeatures = [],
    keyBenefits = [],
    productInUseImages = [],
    detailedProductDescription = null,
  } = product.fields || {};

  const imageUrl = productHeroImage?.fields?.file?.url || null;

  // Add rich text options for documentToReactComponents
  const richTextOptions = {
    renderNode: {
      paragraph: (node, children) => <p className="mb-4">{children}</p>,
      heading1: (node, children) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
      heading2: (node, children) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
      heading3: (node, children) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
      listItem: (node, children) => <li className="ml-4 mb-2">{children}</li>,
      orderedList: (node, children) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
      unorderedList: (node, children) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    },
  };

  // Helper function to safely render rich text
  const renderRichText = (content) => {
    if (!content || !content.content) return null;
    try {
      return documentToReactComponents(content, richTextOptions);
    } catch (error) {
      console.error('Error rendering rich text:', error);
      return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Product Info - Spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-first lg:col-span-5 flex flex-col justify-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] mb-6 uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
              {productTitle}
            </h1>
            {shortProductDescription && (
              <p className="text-lg md:text-xl text-gray-700 mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {shortProductDescription}
              </p>
            )}
            {price && (
              <p className="text-3xl font-bold text-[#D3242A] mb-8" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                ${price.toFixed(2)}
              </p>
            )}
            {buyNowButtonUrl && (
              <Button
                href={buyNowButtonUrl}
                variant="primary"
                size="large"
              >
                Buy Now
              </Button>
            )}
          </motion.div>

          {/* Product Image - Spans 7 columns */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-last lg:col-span-7 flex items-center justify-center"
            >
              <img
                src={imageUrl}
                alt={productTitle || "Product Image"}
                className="w-2/3 h-auto object-contain rounded-3xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* In Action - Full Width Row */}
      {productInUseImages && productInUseImages.length > 0 && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <img src={SparkleIcon} alt="Sparkle Icon" className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                In Action
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productInUseImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
                >
                  <img
                    src={image.fields.file.url}
                    alt={`${productTitle} in use ${index + 1}`}
                    className="w-full h-auto object-contain transition-transform hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bento Grid Layout */}
      {(keyFeatures?.length > 0 || keyBenefits?.length > 0 || detailedProductDescription) && (
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Features - Square Card */}
            {keyFeatures?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow min-h-[400px] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <img src={SparkleIcon} alt="Sparkle Icon" className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                    Key Features
                  </h2>
                </div>
                <ul className="space-y-4 flex-grow">
                  {keyFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      whileHover={{ x: 5 }}
                      className="flex items-start p-4 rounded-xl bg-white/50 hover:bg-white transition-colors border border-gray-100"
                    >
                      <span className="text-red-600 mr-3">•</span>
                      <span style={{ fontFamily: "Geogrotesque, sans-serif" }}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Benefits - Square Card */}
            {keyBenefits?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow min-h-[400px] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <img src={SparkleIcon} alt="Sparkle Icon" className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                    Benefits
                  </h2>
                </div>
                <ul className="space-y-4 flex-grow">
                  {keyBenefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      whileHover={{ x: 5 }}
                      className="flex items-start p-4 rounded-xl bg-white/50 hover:bg-white transition-colors border border-gray-100"
                    >
                      <span className="text-red-600 mr-3">•</span>
                      <span style={{ fontFamily: "Geogrotesque, sans-serif" }}>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Detailed Description - Full Width Card */}
            {detailedProductDescription && detailedProductDescription.content && detailedProductDescription.content.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="col-span-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mt-8"
              >
                <h2 className="text-2xl font-bold text-[#D3242A] mb-6 uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                  Detailed Description
                </h2>
                <div className="prose prose-lg max-w-none" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {renderRichText(detailedProductDescription)}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Made in America Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <MadeInAmerica />
      </section>

      {/* Comparison Table - Full Width */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <ComparisonTable />
        </motion.div>
      </section>
    </div>
  );
};

export default ProductDetail;
