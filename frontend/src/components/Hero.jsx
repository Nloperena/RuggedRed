import React from "react";
import Stars from "./Stars"; // Import the Stars component
import heroBackground from "../assets/kitchen2.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 95%, rgba(255, 255, 255, 1)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Stars count={30} sizeRange={[5, 15]} durationRange={[3, 6]} opacityRange={[0.4, 0.9]} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-transparent">
          {/* Headline */}
          <h1
            className="
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-black 
              leading-snug 
              text-[#D3242A]
              mb-5
              drop-shadow-md
              whitespace-nowrap 
              sm:whitespace-normal
            "
          >
            A PROVEN POWERFUL CLEAN
          </h1>

          {/* Paragraph Container */}
          <div
            className="
              inline-block
              p-6
              sm:p-8
              md:p-10
              bg-white
              bg-opacity-70
              backdrop-filter
              backdrop-blur-md
              rounded-md
              mb-12
              drop-shadow-md
            "
          >
            <p
              className="
                text-sm 
                sm:text-lg 
                md:text-xl 
                lg:text-2xl 
                text-[#333333] 
                leading-relaxed
                font-medium
              "
            >
              Tough enough for industrial messes, safe enough for your home. Get the clean you can trust.
            </p>
          </div>

          {/* Button */}
          <a
            href="#products"
            className="
              inline-block
              px-6 
              py-3 
              sm:px-8 
              sm:py-4 
              rounded-full 
              text-sm 
              sm:text-base 
              md:text-lg 
              font-bold 
              text-white 
              bg-black
              hover:bg-gray-800
              transition-all duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-gray-600
            "
            aria-label="Start Cleaning Products"
          >
            Start Cleaning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
