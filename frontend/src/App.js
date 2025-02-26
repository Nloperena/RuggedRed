import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Create a ref for the footer
  const footerRef = useRef(null);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home footerRef={footerRef} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* Pass the ref to the Footer */}
          <div ref={footerRef}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;