import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const VerticalCardMultiImage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dots = [0, 1, 2];

  const updateArrows = (index: number) => {
    setCurrentIndex(index);
  };

  const handleRightClick = () => {
    if (currentIndex < dots.length - 1) {
      updateArrows(currentIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      updateArrows(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <img
              alt="Three women standing together, one in a pink dress, one in a yellow dress, and one in an orange dress"
              className="w-full h-auto"
              style={{ aspectRatio: "2 / 1" }}
              src="https://storage.googleapis.com/a1aa/image/ZqeqYJhArp1FayBDUc8nd1pkRezffurf9jWhdncbHMKv5fyeJA.jpg"
            />
          </div>
          <div className="md:w-1/2 p-4 text-center">
            <h3 className="text-xl font-semibold mb-4">Purpose</h3>
            <div className="flex justify-center items-center space-x-4 mb-4 ">
              <button
                onClick={handleLeftClick}
                className={`${currentIndex === 0 ? "text-gray-300" : ""} text-2xl font-bold `}
              >
                &lt;
              </button>
              <p className="text-gray-600 p-8">
                Create data-driven technology and products that are essential to connecting customers to our iconic brands
              </p>
              <button
                onClick={handleRightClick}
                className={`${currentIndex === dots.length - 1  ? "text-gray-300" : ""} text-2xl font-bold `}
              >
                 &gt;
              </button>
            </div>
            <div className="flex justify-center items-center space-x-2">
              {dots.map((dot, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-gray-600" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCardMultiImage;
