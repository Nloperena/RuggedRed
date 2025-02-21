import React from "react";
import { motion } from "framer-motion";

const ComparisonTable = () => {
  const comparisonData = [
    {
      title: "Multi-Surface Cleaner",
      color: "bg-[#009E00]", // Green
      rows: [
        ["Safe on Surfaces", "✔", "✔"],
        ["Cleans More Dirt & Germs*", "✔", "✘"],
        ["Destroys Odor at Source", "✔", "✘"],
        ["100% Derived from Nature", "✔", "✘"],
      ],
    },
    {
      title: "Heavy Duty Degreaser",
      color: "bg-[#D3242A]", // Red
      rows: [
        ["Safe on Industrial Surfaces", "✔", "✔"],
        ["100% Biodegradable", "✔", "✔"],
        ["More Grease Fighting Power", "✔", "✘"],
        ["Cuts Grease Faster", "✔", "✘"],
      ],
    },
    {
      title: "Glass Cleaner",
      color: "bg-[#22A7AD]", // Blue
      rows: [
        ["Streak-Free Shine", "✔", "✔"],
        ["Ammonia-Free Formula", "✔", "✘"],
        ["Zero Toxicity", "✔", "✘"],
        ["100% Derived from Nature", "✔", "✘"],
        ["100% Biodegradable", "✔", "✘"],
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Render checkmarks & crosses
  const renderSymbol = (symbol, color) => (
    <span className={`font-extrabold text-base sm:text-lg ${color}`}>{symbol}</span>
  );

  return (
    <section className="py-14 bg-gray-100 relative z-0">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D3242A] uppercase leading-tight"
          style={{ fontFamily: "Geogrotesque, sans-serif", letterSpacing: "1px" }}
          variants={childVariants}
        >
          Compare Our Cleaners
        </motion.h2>
        <motion.p
          className="text-gray-700 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          variants={childVariants}
        >
          See how our products outperform national brands with natural and powerful cleaning solutions.
        </motion.p>
      </motion.div>

      {/* Single Grid: 1 col on mobile, 2 cols at sm, 3 cols at xl */}
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] w-full"
              variants={childVariants}
            >
              {/* Header */}
              <motion.div
                className={`${item.color} text-white text-lg sm:text-xl font-bold py-4 text-center uppercase`}
                style={{ fontFamily: "Geogrotesque, sans-serif", letterSpacing: "1px" }}
                variants={childVariants}
              >
                {item.title}
              </motion.div>

              {/* Table Container */}
              <motion.div className="p-5" variants={childVariants}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-gray-800 text-left text-xs sm:text-sm uppercase tracking-wide">
                        Feature
                      </th>
                      <th className="px-4 py-2 text-gray-800 text-center text-xs sm:text-sm uppercase tracking-wide">
                        Rugged Red
                      </th>
                      <th className="px-4 py-2 text-gray-800 text-center text-xs sm:text-sm uppercase tracking-wide">
                        National Brand
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-4 py-3 text-gray-900 text-xs sm:text-sm">{row[0]}</td>
                        <td className="px-4 py-3 text-center">
                          {renderSymbol(row[1], "text-[#009E00]")}
                        </td>
                        <td className="px-4 py-3 text-center">
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
