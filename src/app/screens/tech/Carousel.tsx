import Image from "next/image";
import React, { useState } from "react";

interface TechTopRecDataType {
  status: number;
  results: {
    id: number;
    Title: string;
    Slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    locale: string;
    SEOTitle: string | null;
    SEODescription: string | null;
    title: string | null;
    landingTitle: string | null;
    featuredTitle: string | null;
    Content: {
      __component: string;
      id: number;
      title: string;
      text: string;
      items: {
        id: number;
        title: string;
        image: string;
      }[];  // Array of items for the carousel
    }[];
    landingMedia: {
      id: number;
      url: string;
      type: string;
    }[];
    featuredMedia: {
      id: number;
      url: string;
      description: string;
    } | null;
    localizations: {
      locale: string;
      data: {
        title: string;
        description?: string; // Optional field
      };
    }[];
  };
}

interface CarouselProps {
  TechTopRecData: TechTopRecDataType; // Carousel expects TechTopRecData as a prop
}

const Carousel: React.FC<CarouselProps> = ({ TechTopRecData }) => {
  // Accessing the first Content object and its items
  const slides = TechTopRecData.results.Content[0].items;
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // Function to move to the next set of 4 items
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / 4));
  };

  // Function to move to the previous set of 4 items
  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.ceil(slides.length / 4) - 1 : prevIndex - 1
    );
  };

  // Function to set the current slide to a particular index
  const setCurrentSlide = (index: number) => {
    setSlideIndex(index);
  };

  // Function to get the items to display on the current slide (set of 4 images)
  const getCurrentSlideItems = (index: number) => {
    const startIndex = index * 4;
    return slides.slice(startIndex, startIndex + 4); // Get 4 images at a time
  };

  return (
    <div className="flex justify-center items-center bg-white py-8">
      <div className="relative  w-[1100px]">
        {/* Carousel Items */}
        <div className="flex space-x-4 overflow-hidden">
          {getCurrentSlideItems(slideIndex).map((item) => (
            <div key={item.id} className={`text-center  w-full`}>
              <div className="relative w-full h-64">
                {/* Image */}
                <Image
                  alt={item.title}  // Set alt text to the item title
                  className="object-cover mx-auto"
                  src={item.image}  // Use item.image as the source
                  layout="fill" // Image will fill its container
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{item.title}</p>  {/* Display the item title */}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 ${slideIndex === 0 ? 'bg-gray-300' : 'bg-white text-black'}`}
          onClick={prevSlide}
          disabled={slideIndex === 0} // Disable the previous button on first slide
        >
          &lt;
        </button>
        <button
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 ${slideIndex === Math.ceil(slides.length / 4) - 1 ? 'bg-gray-300' : 'bg-white text-black'}`}
          onClick={nextSlide}
          disabled={slideIndex === Math.ceil(slides.length / 4) - 1} // Disable the next button on last slide
        >
          &gt;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(slides.length / 4) }).map((_, index) => (
            <span
              key={index}
              className={`dot w-3 h-3 rounded-full mx-1 cursor-pointer ${index === slideIndex ? "bg-gray-800" : "bg-gray-400"}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
