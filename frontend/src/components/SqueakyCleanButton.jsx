import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SqueakyCleanButton() {
  const [isClean, setIsClean] = useState(false);

  const handleClick = () => {
    setIsClean(true);
    setTimeout(() => setIsClean(false), 1000); // Reset after 1 sec
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      className="relative overflow-hidden bg-[#D3242A] text-white font-bold py-3 px-6 sm:px-8 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#B91D23] border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"
    >
      <span className={isClean ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        Clean Me!
      </span>
      
      {/* Dirt Effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isClean ? 0 : 1 }}
        className="absolute inset-0 bg-[url('https://orionmagazine.org/wp-content/uploads/2020/11/dirtbanner1.jpg')] bg-cover bg-center transition-opacity duration-500"
      />
      
      {/* Wipe Effect */}
      {isClean && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-white bg-opacity-50 w-full h-full"
        />
      )}
      
      {/* Sparkle Effect */}
      {isClean && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="absolute top-2 right-2 text-yellow-300"
        >
          <Sparkles size={24} />
        </motion.div>
      )}
    </motion.button>
  );
}