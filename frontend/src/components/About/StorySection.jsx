import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";
import AmericanFlag from "../../assets/American-Flag.png";
import NewsletterModal from "../NewsletterModal";

export default function StorySection() {
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
              className="font-bold text-[#D3242A] uppercase leading-tight whitespace-nowrap"
              style={{ 
                fontFamily: "Geogrotesque, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3rem)"
              }}
            >
              MEET RUGGED RED
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Rugged Red isn't a mascot—he's the real deal. A seasoned pro who's led industrial and commercial cleaning crews for decades. From greasy kitchen hoods to construction trailers, office carpets to factory floors—he's seen it all, and cleaned it all.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Over the years, he's tested hundreds of cleaners. Most didn't cut it. So, he got to work—refining, mixing, and field-testing until he landed on something better. A formula tough enough for the job, safe enough to trust around people, and made entirely from natural ingredients.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Now, his proven formulas are available to the public. No gimmicks. Just powerful, professional-grade cleaners that work—backed by a lifetime of experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Introducing Rugged Red Cleaners.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              A Proven Powerful Clean
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
              
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/images/Rugged Red Logo Mr. Rugged Red Small- Interlock Dynamic.png"
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
}