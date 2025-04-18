import React, { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import NewsletterModal from "./NewsletterModal";

const ComingSoonModal = ({ isOpen, onClose }) => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
          
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Coming Soon!
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-lg mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're working hard to bring you these amazing products. Stay tuned for their arrival at RuggedRed!
          </motion.p>
          
          <div className="flex flex-col gap-4">
            <motion.button
              onClick={onClose}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Got it!
            </motion.button>
            
            <motion.button
              onClick={() => {
                onClose();
                setIsNewsletterOpen(true);
              }}
              className="bg-white text-red-600 px-6 py-3 rounded-full font-bold border-2 border-red-600 hover:bg-red-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </div>
        </div>
      </Modal>
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </>
  );
};

export default ComingSoonModal; 