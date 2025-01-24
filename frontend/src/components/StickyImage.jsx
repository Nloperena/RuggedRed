import React from "react";

const StickyImage = () => {
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png",
  ];

  return (
    <div className="fixed inset-0 z-0 flex flex-col h-full">
      {/* Top Image */}
      <div className="flex-1 relative">
        <img
          src={images[0]}
          alt="Top Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Bottom Image */}
      <div className="flex-1 relative">
        <img
          src={images[1]}
          alt="Bottom Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StickyImage;
