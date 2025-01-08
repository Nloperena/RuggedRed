// FeaturesShowcase.jsx
import React from "react";

const FeaturesShowcase = () => {
  const features = [
    { icon: "fa-solid fa-bolt", label: "Powerful" },
    { icon: "fa-solid fa-leaf", label: "Non-Toxic" },
    { icon: "fa-solid fa-flag", label: "Made in USA" }, 
    { icon: "fa-solid fa-check-circle", label: "Proven" },
    { icon: "fa-solid fa-hand-sparkles", label: "Squeaky Clean" },
  ];

  return (
    <section className="bg-[#F2F2F2] py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#D3242A] mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center">
              <i className={`${feature.icon} text-4xl mb-2 text-black`} />
              <span className="text-black font-semibold text-sm uppercase">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
