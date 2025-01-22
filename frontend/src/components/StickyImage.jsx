import React from "react";

const StickyImage = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png",
  ];

  return (
    <div className="fixed inset-0 z-0"> {/* z-0 instead of -z-10 */}
      <div className="flex w-full h-full">
        {/* Left Half */}
        <div className="w-1/2 relative h-full">
          <img
            src={images[0]}
            alt="Left"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        {/* Right Half */}
        <div className="w-1/2 relative h-full">
          <img
            src={images[1]}
            alt="Right"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyImage;
