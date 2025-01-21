import React from "react";
import Stars from "./Stars"; // Import the Stars component
import heroBackground from "../assets/kitchen1.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-[550px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[850px] xl:min-h-[950px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
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
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent">
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
              mb-4
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
              p-4
              sm:p-5
              md:p-6
              bg-white
              bg-opacity-70
              backdrop-filter
              backdrop-blur-md
              rounded-md
              mb-6
              drop-shadow-md
            "
          >
            <p
              className="
                text-base 
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
              px-5 
              py-2 
              sm:px-6 
              sm:py-3 
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
