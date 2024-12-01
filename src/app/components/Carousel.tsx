import Image from "next/image";
import React, { useState } from "react";

// Interface for the media file attributes
interface MediaAttributes {
  __typename: string; // GraphQL typename for the file attributes
  url: string; // URL of the media file
  mime: string; // MIME type of the media file
}

// Interface for the media data (with nested data)
interface MediaData {
  __typename: string; // GraphQL typename for the media entity
  data: { // Nested `data` object that contains the actual media details
    __typename: string; // GraphQL typename for the inner data
    attributes: MediaAttributes; // Media attributes, containing URL and mime type
  };
}

// Interface for each block in the 'Blocks' array
interface Block {
  __typename: string; // GraphQL typename for the block
  id: string; // Unique block ID
  Text: string | null; // Optional block text
  mediaURL: string | null; // Optional URL for media
  Title: string | null; // Optional title of the block
  Media: MediaData; // Media data associated with the block
}

// Interface for the main TechTopRecData component
interface TechTopRecData {
  __typename: string; // GraphQL typename for the main component
  Title: string; // Title of the top recommendations section
  Text: string | null; // Optional text for the section
  text_Spacing: string | null; // Optional text spacing
  blockSize: string; // Block size, e.g., "Quarter"
  navSlug: string | null; // Optional navigation slug
  navTitle: string | null; // Optional navigation title
  colorTheme: string | null; // Optional color theme
  navigationSlug: string | null; // Optional navigation slug
  Blocks: Block[]; // Array of blocks
}

interface CarouselProps {
  TechTopRecData: TechTopRecData; // Carousel expects TechTopRecData as a prop
}

const Carousel: React.FC<CarouselProps> = ({ TechTopRecData }) => {
  // Accessing the first Content object and its items
  const slides = TechTopRecData.Blocks;
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
      <div className="relative w-[1100px]">
        {/* Carousel Items */}
        <div className="flex space-x-4 overflow-hidden">
          {getCurrentSlideItems(slideIndex).map((item) => (
            <div key={item.id} className="text-center w-full">
              <div className="relative w-full h-[300px]"> {/* Set a fixed height for each image container */}
                {/* Image */}
                <Image
                  alt={item.Title || "Image"}  // Set alt text to the item title
                  className="object-cover mx-auto"
                  src={item.Media.data.attributes.url || ""}  // Use item.image as the source
                  layout="intrinsic" // Use intrinsic layout to ensure proper scaling
                  width={400} // Set width to ensure the image has a fixed size
                  height={300} // Set a fixed height for the image
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{item.Title}</p>  {/* Display the item title */}
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
