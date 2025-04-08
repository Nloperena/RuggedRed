import React, { useRef, useEffect } from "react";

const Benefits = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video playback
    }
  }, []);

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
      {/* Hero section with a video background */}
      <section className="relative w-full overflow-hidden pt-12 pb-16 text-white">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.ctfassets.net/hdznx4p7ef81/3GxSnGUeKnaFJOpouL9MiZ/d1d6954667cf3022fef0e8ad4eab0740/RR-Brolldraft.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md pointer-events-none" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1
            className="text-5xl font-extrabold text-center mb-8"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            RuggedRed in Action
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Heavy-duty cleaning power for life's messiest moments.
          </p>

          {/* Scenarios grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  text-gray-900
                  rounded-3xl
                  shadow-lg
                  p-6
                  transition
                  transform
                  duration-300
                  hover:shadow-xl
                  hover:scale-105
                "
              >
                {/* Image */}
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                {/* Title */}
                <h3
                  className="text-2xl font-semibold text-red-600 mb-4 group-hover:underline"
                  style={{ fontFamily: "Geogrotesque, sans-serif" }}
                >
                  {scenario.title}
                </h3>
                {/* Description */}
                <p className="text-gray-700 text-lg">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
