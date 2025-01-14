import React, { useRef, useEffect } from "react";

const Benefits = () => {
  // Make a ref for the video
  const videoRef = useRef(null);

  // Slow the video once it's loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // half speed
    }
  }, []);

  // Scenario data
  const scenarios = [
    {
      title: "Conquer Greasy Kitchens",
      description:
        "After cooking a hearty meal, tackle greasy countertops and stoves with ease.",
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/49UH3IIpznLvX89QNkxk8x/ce301c49a30405fd0a1d4a07a0adc038/dirtystove.webp",
    },
    {
      title: "Tidy Up After Oil Spills",
      description:
        "Clean up motor oil in the garage or cooking oil from kitchen mishaps quickly.",
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/1S1xmSMka8rKH0IEmV3LDt/7a5c8a3936abed8054d52e305abce203/dirtyengine.jpg",
    },
    {
      title: "Handle Paint Projects",
      description:
        "Remove accidental paint drips on floors or furniture without damage.",
      image:
        "https://images.ctfassets.net/hdznx4p7ef81/3swF5hVszVT9oMa0vdelxm/bb95913754e6e5b3e9e23ea8ac498820/redpaint.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/*
        Hero Section:
        1) Video is the background.
        2) We use absolute positioning for the video + overlay,
           and place our heading and scenarios on top.
      */}
      <section className="relative h-[700px] flex flex-col justify-center items-center text-center text-white">
        {/* Video behind everything */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.ctfassets.net/hdznx4p7ef81/3GxSnGUeKnaFJOpouL9MiZ/d1d6954667cf3022fef0e8ad4eab0740/RR-Brolldraft.mp4"
            type="video/mp4"
          />
        </video>

        {/* Optional: A subtle overlay to darken or blur the video so text is readable */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 pointer-events-none"></div>

        {/* Hero Content (heading + subtext) */}
        <div className="relative z-20 px-4 mb-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Rugged Red in Action
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Heavy-duty cleaning power for life’s messiest moments.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="relative z-20 grid gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 text-gray-900"
            >
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                {scenario.title}
              </h3>
              <p className="text-gray-700">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
