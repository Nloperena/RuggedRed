import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFading(true), 2000); // Delay before fade-out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#D3242A] flex items-center justify-center z-50 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-white text-2xl font-bold animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
