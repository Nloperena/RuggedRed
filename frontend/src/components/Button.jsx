import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ComingSoonModal from "./ComingSoonModal";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  as: Component = "button",
  to,
  onClick,
  className = "",
  ...props
}) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const isComingSoon = to === "Coming soon!" || to === "Coming%20Soon!" || children === "Coming Soon!";

  const handleClick = (e) => {
    e.stopPropagation();
    if (isComingSoon) {
      e.preventDefault();
      setShowComingSoon(true);
    } else if (onClick) {
      onClick(e);
    }
  };

  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-[#D3242A] text-white hover:bg-[#9B1218] hover:text-white focus:ring-[#D3242A] cursor-pointer",
    secondary: "bg-white text-[#D3242A] hover:bg-gray-50 hover:text-[#9B1218] focus:ring-[#D3242A] border-2 border-[#D3242A] hover:border-[#9B1218] cursor-pointer",
    tertiary: "bg-transparent text-[#D3242A] hover:bg-gray-50 hover:text-[#9B1218] focus:ring-[#D3242A] cursor-pointer",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonContent = (
    <div
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="select-none cursor-pointer">
        {children}
      </span>
    </div>
  );

  return (
    <>
      {to && !isComingSoon ? (
        <Link to={to} className={`${widthClass} cursor-pointer select-none`} style={{ cursor: 'pointer' }}>
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
      {isComingSoon && (
        <ComingSoonModal 
          isOpen={showComingSoon} 
          onClose={() => setShowComingSoon(false)} 
        />
      )}
    </>
  );
};

export default Button; 