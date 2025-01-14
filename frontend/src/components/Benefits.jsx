import React from 'react';

const Benefits = () => {
  const scenarios = [
    {
      title: "Conquer Greasy Kitchens",
      description: "After cooking a hearty meal, tackle greasy countertops and stoves with ease.",
      image: "https://images.ctfassets.net/hdznx4p7ef81/49UH3IIpznLvX89QNkxk8x/ce301c49a30405fd0a1d4a07a0adc038/dirtystove.webp",
    },
    {
      title: "Tidy Up After Oil Spills",
      description: "Clean up motor oil in the garage or cooking oil from kitchen mishaps quickly.",
      image: "https://images.ctfassets.net/hdznx4p7ef81/1S1xmSMka8rKH0IEmV3LDt/7a5c8a3936abed8054d52e305abce203/dirtyengine.jpg",
    },
    {
      title: "Handle Paint Projects",
      description: "Remove accidental paint drips on floors or furniture without damage.",
      image: "https://images.ctfassets.net/hdznx4p7ef81/3swF5hVszVT9oMa0vdelxm/bb95913754e6e5b3e9e23ea8ac498820/redpaint.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Rugged Red in Action
        </h2>

        {/* Scenarios grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 transition-transform hover:scale-105"
            >
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600 mb-4">{scenario.title}</h3>
              <p className="text-gray-700">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
