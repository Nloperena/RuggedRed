import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Jennifer Brady",
    role: "Mom Extraordinaire",
    text: "With two kiddos at home, Rugged Red is my lifesaver! It makes sticky spills vanish in seconds. I won't use anything else!",
    photo: "https://i.insider.com/6631073210dfcda40964d50f?width=700",
  },
  {
    name: "Alicia Rivera",
    role: "Auto Mechanic",
    text: "Oil stains, grease, you name it. Rugged Red wipes it all away, saving me so much time in the shop. It's my go-to every day!",
    photo: "https://www.sheboygan.k12.wi.us/perch/resources/abigail-tagel-red-raider-manufacturing-1-600x400.jpg",
  },
  {
    name: "Marcus Klein",
    role: "CNC Factory Operator",
    text: "We rely on Rugged Red to keep our machines and metal parts clean. It's the best industrial cleaner I've come across—hands down!",
    photo: "https://i.redd.it/72udgqzbsljb1.jpg",
  },
  {
    name: "Ella Johnson",
    role: "Chef",
    text: "Rugged Red cuts through kitchen grease like magic. I can’t imagine running my kitchen without it!",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jake Sullivan",
    role: "Car Enthusiast",
    text: "This product keeps my car looking spotless, even after a long road trip. Highly recommend it!",
    photo: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    currentIndex * testimonialsPerPage + testimonialsPerPage
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  function FiveStars() {
    return (
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-400 w-5 h-5 mx-0.5"
          />
        ))}
      </div>
    );
  }

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold text-[#D3242A] mb-8"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          See Why They Love Rugged Red
        </h2>
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#D3242A] text-white p-4 rounded-full shadow-md hover:bg-[#B91D23] focus:outline-none focus:ring-2 focus:ring-[#B91D23] transition"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#D3242A] text-white p-4 rounded-full shadow-md hover:bg-[#B91D23] focus:outline-none focus:ring-2 focus:ring-[#B91D23] transition"
          >
            &#10095;
          </button>

          {/* Testimonials */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.6 }}
            >
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-[2rem] shadow-2xl p-8 flex flex-col items-center text-center"
                  variants={cardVariants}
                >
                  <div className="w-28 h-28 mb-4">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.role}</p>
                  <FiveStars />
                  <p className="text-gray-700 text-sm leading-relaxed px-3">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  currentIndex === index
                    ? "bg-[#D3242A]"
                    : "bg-gray-300 hover:bg-gray-400"
                } focus:outline-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
