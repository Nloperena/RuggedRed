import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";
import MascotImg from "../../assets/RRMascot+Type-smaller.png";
import AmericanFlag from "../../assets/American-Flag.png";
import NewsletterModal from "../NewsletterModal";

const StorySection = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <section className="relative py-12 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D3242A] uppercase leading-tight"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              Meet RuggedRed
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              A man carved from a dying steel town, hands rough as the mill floors he scrubbed clean. His dad, a line worker, left him one rule: "If it's yours, make it tough." Store-bought cleaners—weak, imported, useless—lit a fuse in him.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              In a shed, he fought back, brewing a cleaner that hit grime hard and didn't flinch. It wasn't just soap—it was his rebellion, his proof that American grit still mattered. Now, every bottle with his name carries that fight: relentless, real, ready for the mess.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/about">
                <Button
                  variant="primary"
                  size="large"
                >
                  Our Story
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="large"
                onClick={() => setIsNewsletterOpen(true)}
              >
                Subscribe to Newsletter
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={MascotImg}
              alt="RuggedRed Mascot"
              className="w-full max-w-md rounded-2xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
            />
          </motion.div>
        </div>
      </section>
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </>
  );
};

export default StorySection;