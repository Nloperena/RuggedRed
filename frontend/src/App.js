import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import LoadingScreen from "./components/LoadingScreen";
import { fetchProducts } from "./data/contentful";
import ScrollToTop from "./components/ScrollToTop";
import ScrollLock from "./components/ScrollLock";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Page fully loaded, setting isLoading to false");
      setIsLoading(false);
    };

    console.log("Document readyState:", document.readyState);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      console.log("Starting to load products...");
      try {
        const fetchedProducts = await fetchProducts();
        console.log("Fetched Products:", fetchedProducts);
        setProducts(fetchedProducts);
        console.log("Products state updated:", fetchedProducts);
      } catch (error) {
        console.error("Error in loadProducts:", error);
      }
    };

    loadProducts();
  }, []);

  const footerRef = useRef(null);

  console.log("Current products in state:", products);

  return (
    <ScrollLock>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Nav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home footerRef={footerRef} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/product/:productId"
              element={<ProductDetail products={products} />}
            />
          </Routes>
          <div ref={footerRef}>
            <Footer />
          </div>
        </>
      )}
      <Analytics />
    </ScrollLock>
  );
};

export default App;