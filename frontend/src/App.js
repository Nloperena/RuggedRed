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
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state
  const [isFading, setIsFading] = useState(false); // Tracks fade-out animation
  const location = useLocation(); // Get current route location


  return (
    <>
 
      <div className={`${isLoading ? "hidden" : "block"}`}>
        <Nav className = 'z-40'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer className = 'z-39'/>
      </div>
    </>
  );
};

export default App;