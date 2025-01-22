import React from "react";
import { motion } from "framer-motion";

const ComparisonTable = () => {
  const comparisonData = [
    {
      title: "Multi-Surface Cleaner",
      color: "bg-[#009E00]", // Updated Green
      rows: [
        ["Safe on Surfaces", "✔", "✔"],
        ["Cleans Away More Dirt & Germs*", "✔", "✘"],
        ["Destroys Odor at Source", "✔", "✘"],
        ["100% Derived from Nature", "✔", "✘"],
      ],
    },
    {
      title: "Glass Cleaner",
      color: "bg-[#22A7AD]", // Updated Blue
      rows: [
        ["Streak Free", "✔", "✔"],
        ["Ammonia Free", "✔", "✘"],
        ["Zero Toxicity", "✔", "✘"],
        ["100% Derived from Nature", "✔", "✘"],
        ["100% Biodegradable", "✔", "✘"],
      ],
    },
    {
      title: "Heavy Duty Degreaser",
      color: "bg-[#D3242A]", // Updated Red
      rows: [
        ["Safe on all Industrial Surfaces", "✔", "✔"],
        ["100% Biodegradable", "✔", "✔"],
        ["More Grease Fighting Power", "✔", "✘"],
        ["Cuts Grease Faster from Surfaces", "✔", "✘"],
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-12 bg-gray-100 relative z-0" // Add `z-0` for layering control
      style={{ zIndex: 0 }}
    >
      {/* Headline and Subheading */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#D3242A] uppercase"
          style={{
            fontFamily: "Geogrotesque, sans-serif", // Main font applied
            letterSpacing: "1px", // Slight spacing for a polished look
          }}
          variants={childVariants}
        >
          COMPARE OUR CLEANERS
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mt-2"
          variants={childVariants}
        >
          See how our products outperform national brands with natural and
          powerful cleaning solutions.
        </motion.p>
      </motion.div>

      {/* Comparison Tables */}
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden transition-transform hover:scale-105"
              variants={childVariants}
            >
              {/* Header */}
              <motion.div
                className={`${item.color} text-white text-lg font-bold p-4 text-center uppercase`}
                style={{
                  fontFamily: "Geogrotesque, sans-serif", // Main font applied to table headers
                  letterSpacing: "1px",
                }}
                variants={childVariants}
              >
                {item.title}
              </motion.div>
              {/* Table */}
              <motion.table
                className="w-full text-left border-collapse"
                variants={childVariants}
              >
                <thead>
                  <motion.tr variants={childVariants}>
                    <th className="px-4 py-3 text-gray-700 text-center uppercase">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-gray-700 text-center uppercase">
                      Rugged Red
                    </th>
                    <th className="px-4 py-3 text-gray-700 text-center uppercase">
                      National Brand
                    </th>
                  </motion.tr>
                </thead>
                <motion.tbody>
                  {item.rows.map((row, rowIndex) => (
                    <motion.tr
                      key={rowIndex}
                      className="border-b border-gray-200"
                      variants={childVariants}
                    >
                      <td className="px-4 py-3 text-gray-800 text-center">
                        {row[0]}
                      </td>
                      <td className="px-4 py-3 text-[#009E00] font-bold text-center">
                        {row[1]}
                      </td>
                      <td className="px-4 py-3 text-[#D3242A] font-bold text-center">
                        {row[2]}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </motion.table>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
