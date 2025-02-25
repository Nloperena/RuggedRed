import React from "react";
import Stars from "./Stars";
import heroBackground from "../assets/kitchen3.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(255, 255, 255, 1)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <style>
        {`
          /* ----------------------------------
             MIN-HEIGHT RULES ON #hero
          ---------------------------------- */
          #hero {
            min-height: 600px;
          }

          @media (min-width: 640px) {
            #hero {
              min-height: 600px;
            }
          }

          @media (min-width: 768px) {
            #hero {
              min-height: 850px;
            }
          }

          @media (min-width: 1024px) {
            #hero {
              min-height: 1065px;
            }
          }

          @media (min-width: 1280px) {
            #hero {
              min-height: 1230px;
            }
          }

          /* ----------------------------------
             WRAPPER MARGIN/PADDING IN EACH BREAKPOINT
          ---------------------------------- */
          #hero .hero-content {
            /* Mobile (default) */
            margin: -8rem 3rem 2rem;
            padding: 2rem 0;
          }

          @media (min-width: 640px) {
            #hero .hero-content {
              margin: -8rem 2rem 2rem;
              padding: 3rem 0;
            }
          }

          @media (min-width: 768px) {
            #hero .hero-content {
              margin: -18rem 6rem 2rem;
              padding: 4rem 0;
            }
          }

          @media (min-width: 1024px) {
            #hero .hero-content {
              margin: -28rem 6rem 2rem;
              padding: 4rem 0;
            }
          }

          /* 
            On the largest displays,
            center the container horizontally,
            and remove the strong negative top margin
          */
          @media (min-width: 1280px) {
            #hero .hero-content {
              margin: -35rem auto 2rem;
              max-width: 1600px;
              padding: 5rem 0;
            }
          }

          /* ----------------------------------
             FONT-SIZE FOR HEADLINE AND PARAGRAPH
          ---------------------------------- */
          #hero h1 {
            font-size: 2.8rem; /* Mobile default */
          }

          #hero p {
            font-size: 1rem; /* Mobile default */
          }

          @media (min-width: 640px) {
            #hero h1 {
              font-size: 3rem; /* Small screens */
            }
            #hero p {
              font-size: 1.25rem; /* Small screens */
            }
          }

          @media (min-width: 768px) {
            #hero h1 {
              font-size: 4rem; /* Medium screens */
            }
            #hero p {
              font-size: 1.5rem; /* Medium screens */
            }
          }

          @media (min-width: 1024px) {
            #hero h1 {
              font-size: 3.4rem; /* Large screens */
            }
            #hero p {
              font-size: 1.2rem; /* Large screens */
            }
          }

          @media (min-width: 1280px) {
            #hero h1 {
              font-size: 5.6rem; /* Extra-large screens */
            }
            #hero p {
              font-size: 1.5rem; /* Extra-large screens */
            }
          }
        `}
      </style>

      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Stars
          count={30}
          sizeRange={[5, 15]}
          durationRange={[3, 6]}
          opacityRange={[0.4, 0.9]}
        />
      </div>

      {/* Main wrapper: .hero-content with negative top margin for effect */}
      <div className="hero-content relative z-10 w-full">
        {/* Grid with left & right columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 h-full">
          {/* Left column: Empty box for aesthetics */}
          <div className="hidden lg:block h-full">
            <div className="w-full h-full bg-gray-100 opacity-0 rounded-lg"></div>
          </div>

          {/* Right column: Content wrapper */}
          <div className="flex flex-col justify-center items-start text-left space-y-6">
            {/* Headline (removed white stroke, kept glow) */}
            <h1
              className="font-extrabold leading-snug text-[#D3242A] mb-2"
              style={{
                // Removed WebkitTextStroke to remove the white outline
                textShadow: `0 0 6px rgba(255, 255, 255, 0.5),
                             0 0 12px rgba(255, 255, 255, 0.4)`,
              }}
            >
              <span className="inline-block">A PROVEN POWERFUL CLEAN</span>
            </h1>

            {/* Subheading with glass container */}
            <div className="inline-block bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg drop-shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-[#222222] leading-relaxed font-medium mb-1">
                Tough enough for industrial messes, safe enough for your home.
                Get the clean you can trust.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="w-full flex justify-center">
              <a
                href="#products"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg xl:text-xl font-bold text-white bg-[#D3242A] border-2 border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                style={{
                  textShadow: `0 0 6px rgba(255, 255, 255, 0.5),
                               0 0 12px rgba(255, 255, 255, 0.6)`,
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = "scale(0.95)";
                  e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.6)";
                }}
                onMouseOver={(e) => {
                  e.target.style.boxShadow =
                    "0 0 15px rgba(255, 255, 255, 0.8)";
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow =
                    "0 0 12px rgba(255, 255, 255, 0.6)";
                }}
                aria-label="Start Cleaning Products"
              >
                Start Cleaning Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
