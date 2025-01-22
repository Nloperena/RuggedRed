// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading
  const [isFading, setIsFading] = useState(false); // Controls fade-out animation
  const location = useLocation(); // Get current route location

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const loadingTimer = setTimeout(() => {
      setIsFading(true); // Start fade-out
    }, 2000); // 2 seconds

    // After fade-out duration (e.g., 0.5 seconds), hide LoadingScreen
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Total 2.5 seconds (2s loading + 0.5s fade-out)

    // Cleanup timers on unmount
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen isFading={isFading} />}

      {/* Main App Content */}
      {!isLoading && (
        <div className={`${isLoading ? "hidden" : "block"}`}>
          <Nav className="z-40" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer className="z-39" />
        </div>
      )}
    </>
  );
};

export default App;
