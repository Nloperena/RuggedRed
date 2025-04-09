import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const buttonRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { stiffness: 300, damping: 15 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Update spring values when mouse position changes
  React.useEffect(() => {
    const unsubscribeX = mouseX.onChange((latest) => {
      x.set(latest * 0.5);
    });
    const unsubscribeY = mouseY.onChange((latest) => {
      y.set(latest * 0.5);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, x, y]);

  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-[#D3242A] text-white hover:bg-[#9B1218] hover:text-white focus:ring-[#D3242A] hover:shadow-lg cursor-pointer",
    secondary: "bg-white text-[#D3242A] hover:bg-gray-50 hover:text-[#9B1218] focus:ring-[#D3242A] border-2 border-[#D3242A] hover:border-[#9B1218] hover:shadow-lg cursor-pointer",
    tertiary: "bg-transparent text-[#D3242A] hover:bg-gray-50 hover:text-[#9B1218] focus:ring-[#D3242A] hover:shadow-lg cursor-pointer",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      style={{ x, y, cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="select-none cursor-pointer"
      >
        {children}
      </motion.span>
    </motion.div>
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