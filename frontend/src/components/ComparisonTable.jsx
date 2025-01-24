// ComparisonTable.jsx
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

  // Function to render checkmarks and crosses
  const renderSymbol = (symbol, color) => {
    return (
      <span className={`font-bold text-center ${color}`}>
        {symbol}
      </span>
    );
  };

  return (
    <section className="py-12 bg-gray-100 relative z-0">
      {/* Headline and Subheading */}
      <motion.div
        className="text-center mb-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D3242A] uppercase"
          style={{
            fontFamily: "Geogrotesque, sans-serif",
            letterSpacing: "1px",
          }}
          variants={childVariants}
        >
          COMPARE OUR CLEANERS
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto"
          variants={childVariants}
        >
          See how our products outperform national brands with natural and
          powerful cleaning solutions.
        </motion.p>
      </motion.div>

      {/* Comparison Tables */}
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              variants={childVariants}
            >
              {/* Header */}
              <motion.div
                className={`${item.color} text-white text-lg font-bold p-4 text-center uppercase`}
                style={{
                  fontFamily: "Geogrotesque, sans-serif",
                  letterSpacing: "1px",
                }}
                variants={childVariants}
              >
                {item.title}
              </motion.div>
              {/* Table Container */}
              <motion.div
                className="p-4 overflow-x-auto"
                variants={childVariants}
              >
                <table className="w-full min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-gray-700 text-left text-sm uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-4 py-2 text-gray-700 text-center text-sm uppercase tracking-wider">
                        Rugged Red
                      </th>
                      <th className="px-4 py-2 text-gray-700 text-center text-sm uppercase tracking-wider">
                        National Brand
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={`${
                          rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-800 text-left text-sm">
                          {row[0]}
                        </td>
                        <td className="px-4 py-2 text-[#009E00] font-bold text-center text-sm">
                          {renderSymbol(row[1], "text-[#009E00]")}
                        </td>
                        <td className="px-4 py-2 text-[#D3242A] font-bold text-center text-sm">
                          {renderSymbol(row[2], "text-[#D3242A]")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
