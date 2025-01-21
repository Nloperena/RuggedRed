import React from "react";

const StickyImages = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/c9472b7fa1d98e00ca3ddb5e38f952c4/Home_Cleaning_Tips_Blog.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/41b60bf86327ee7d5cb8a447c59239f5/The_Formulation_is_Built_to_Work_Hard_Blog.png",
  ];

  return (
    <section className="relative">
      {/* Sticky Image Section */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex">
          {/* Left Image */}
          <div className="w-1/2 h-full relative">
            <img
              src={images[0]}
              alt="Home Cleaning Tips"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="text-center text-white px-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{ fontFamily: "Geogrotesque, sans-serif" }}
                >
                  Keep Your Home Spotless
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed font-medium"
                  style={{ fontFamily: "inherit" }}
                >
                  Explore the best tips for maintaining a clean and fresh home.
                </p>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-1/2 h-full relative">
            <img
              src={images[1]}
              alt="The Formulation is Built to Work Hard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="text-center text-white px-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{ fontFamily: "Geogrotesque, sans-serif" }}
                >
                  Built for Tough Jobs
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed font-medium"
                  style={{ fontFamily: "inherit" }}
                >
                  Rugged Red products handle the messes that others can’t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </section>
  );
};

export default StickyImages;
