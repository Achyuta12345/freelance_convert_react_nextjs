import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface ContentType {
  __typename: string;
  link: string;
  navigationSlug: string;
  modalVideo: {
    videoURL: string;
    title: string;
  };
}
interface ModalDataType {
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
    Content: ContentType[];
    landingMedia: unknown[]; // Adjust as per actual structure
    featuredMedia: unknown | null; // Adjust as per actual structure
    localizations: unknown[]; // Adjust as per actual structure
  };
}
interface ModalProps {
  modalData: ModalDataType;
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Optional title
  description?: string; // Optional description
}


const Modal: React.FC<ModalProps> = ({ modalData,isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Books'); // Default option

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose(); // Close the modal on "Escape" key press
    };
    document.addEventListener("keydown", handleEsc);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]); // Add onClose as a dependency

  if (!isOpen) return null; // Do not render the modal UI if isOpen is false
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex h-auto w-3/4 bg-white shadow-lg">
        {/* Left Section with Image */}
        <div className="w-1/2 relative">
          <Image
            alt="Person in a black coat jumping in front of a brick wall"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/a1aa/image/OfhvQfqXFjpCJ06ifhtLBFRDC8tRmtszYodfq6Ck4mYXwZHPB.jpg"
            height={500}
            width={500}
          />
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl title-font mb-4">Give us your Recs!</h1>
            <p className="text-lg">
              Whether it&apos;s the last book you read or your favorite new TV show, we want to share it!
            </p>
          </div>
        </div>
        {/* Right Section with Form */}
        <div className="w-1/2 flex flex-col items-center justify-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-semibold text-black hover:text-gray-700"
          >
            ✕
          </button>
          <div className="w-3/4">
            <h2 className="text-l font-bold mb-4">WHAT ARE YOU LOVING RIGHT NOW?</h2>
            <div className="mb-4 relative">
              <input
                className="w-full border-2 border-black focus:outline-none focus:border-black p-2 pr-12"
                placeholder="Tell us your recommendation"
                type="text"
              />
              {/* Right Arrow Button */}
              <button className="absolute right-3 top-1/4 transform -translate-y-1/2  font-semibold w-9 text-2xl">
                &#8594;
              </button>
              <p className="text-sm italic text-gray-500 mt-2">
                Please include all relevant info — title, author, artist, etc.
              </p>
            </div>
            <h2 className="text-l font-bold mb-4">WHAT ARE YOU RECOMMENDING?</h2>
          
            <div className="mb-4">
            {['Books', 'Movie', 'TV Show', 'Other'].map((option) => (
                <label key={option} className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="recommendation"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className="form-radio text-black"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
              </div>
            <h2 className="text-l font-bold mb-4">SUBMIT A PHOTO</h2>
            <div className="mb-4">
              <input
                className="block w-full text-sm  file:mr-4 file:py-2 file:px-4  file:border-1 file:text-sm file:font-semibold file:bg-white file:shadow-sm file:text-gray-700 hover:file:bg-gray-200"
                type="file"
              />
            </div>
            <button
              className="bg-black text-white py-2 px-4  mt-10"
              onClick={onClose} // Example: handle submission or closing
            >
              Add Your Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
