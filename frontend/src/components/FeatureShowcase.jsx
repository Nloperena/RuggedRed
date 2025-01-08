import React, { useEffect } from "react";

export default function FeaturesShowcase() {
  useEffect(() => {
    console.log("FeaturesShowcase: Checking if Font Awesome is loaded ->", window.FontAwesome);
    if (!window.FontAwesome) {
      console.warn("FeaturesShowcase: Font Awesome is NOT detected. Icons may not be visible.");
    }
  }, []);

  const features = [
    { icon: "fa-solid fa-bolt", label: "Powerful" },
    { icon: "fa-solid fa-leaf", label: "Non-Toxic" },
    { icon: "fa-solid fa-flag", label: "Proudly Made in USA" },
    { icon: "fa-solid fa-check-circle", label: "Proven" },
    { icon: "fa-solid fa-hand-sparkles", label: "Squeaky Clean" },
  ];

  const stats = [
    { value: "+12k", label: "HAPPY CUSTOMERS" },
    { value: "84", label: "BOTTLES RECYCLED" },
    { value: "3,057", label: "MINUTES YOU GET BACK" },
    { value: "24h", label: "TOTAL CLEAN" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Icon Row */}
        <div className="flex justify-center items-center mb-12 space-x-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <i className={`${feature.icon} text-3xl text-black mb-2`} />
              <p className="text-black font-bold">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Stats + Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-red-600 text-white rounded-lg shadow-md flex flex-col items-center justify-center p-6"
              >
                <p className="text-3xl font-extrabold">{stat.value}</p>
                <p className="text-sm font-semibold uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Image Box */}
          <div className="flex items-center justify-center">
            <img
              src="/path/to/image.jpg" // Replace with your actual image path
              alt="Hand with Bottle Image"
              className="w-full max-w-sm shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
