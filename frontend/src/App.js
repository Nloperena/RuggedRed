// App.jsx
import React, { useState, useEffect } from "react";
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
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); // Hide after 3 seconds (example)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 
         Only render <LoadingScreen /> while isLoading is true.
         Once isLoading is set to false, LoadingScreen will fade out 
         and unmount cleanly.
      */}
      <LoadingScreen className='z-1000000'isLoading={isLoading} />

      {/* Main Content */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
