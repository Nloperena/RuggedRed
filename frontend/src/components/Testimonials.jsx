// We import React and motion for our animations
import React from "react";
import { motion, useAnimation } from "framer-motion";
// We import the icons for the stars from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// We import an intersection observer hook to animate on scroll
import { useInView } from "react-intersection-observer";

// Here are our three testimonials: Mom, Mechanic, and CNC Factory Guy
const testimonials = [
  {
    name: "Jennifer Brady",
    role: "Mom Extraordinaire",
    text: "With two kiddos at home, Rugged Red is my lifesaver! It makes sticky spills vanish in seconds. I won't use anything else!",
    // Using the provided mom image
    photo: "https://i.insider.com/6631073210dfcda40964d50f?width=700",
  },
  {
    name: "Alicia Rivera",
    role: "Auto Mechanic",
    text: "Oil stains, grease, you name it. Rugged Red wipes it all away, saving me so much time in the shop. It's my go-to every day!",
    // Using the provided mechanic image
    photo: "https://www.sheboygan.k12.wi.us/perch/resources/abigail-tagel-red-raider-manufacturing-1-600x400.jpg",
  },
  {
    name: "Marcus Klein",
    role: "CNC Factory Operator",
    text: "We rely on Rugged Red to keep our machines and metal parts clean. It's the best industrial cleaner I've come across—hands down!",
    // Using the provided CNC factory image
    photo: "https://i.redd.it/72udgqzbsljb1.jpg",
  },
];

// This is our main Testimonials component
export default function Testimonials() {
  // We set up an intersection observer for when the section enters the viewport
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  // If we see the section, start the animation
  if (inView) {
    controls.start("visible");
  }

  // Variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Each card's animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // A helper that returns 5 stars
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
    // We set a red background and some padding
    <section
      ref={ref}
      className="relative bg-[#D3242A] py-16 px-6"
      style={{ fontFamily: "Geogrotesque, sans-serif" }}
    >
      {/* Main container with a heading */}
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-12">
          See Why They Love Rugged Red
        </h2>

        {/* Our 3 "ID-like" testimonial cards in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              custom={index}
              variants={cardVariants}
              className="bg-white rounded-[2rem] shadow-2xl p-8 flex flex-col items-center text-center"
            >
              {/* Round image at the top */}
              <div className="w-28 h-28 mb-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Person's name and role */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.role}</p>

              {/* 5 Star Rating */}
              <FiveStars />

              {/* Testimonial text */}
              <p className="text-gray-700 text-sm leading-relaxed px-3">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
