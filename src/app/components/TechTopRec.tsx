'use client';
import React, { useState } from 'react';
import Carousel from './Carousel';
import Modal from '@/app/components/RecsModal';
import {modalData} from '../../app/data/homePageData'
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

interface TechTopRecProps {
   TechTopRecData: TechTopRecData; // Props for the TechTopRec component
}
const TechTopRec: React.FC<TechTopRecProps> = ({ TechTopRecData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <span className="font-semibold border-b-2 border-black">
          {TechTopRecData.Title}
        </span>

        <div className="flex flex-col justify-center items-center">
          <Carousel TechTopRecData={TechTopRecData} />
          <button
            className="bg-gray-300 px-4 py-2 text-sm mt-4"
            onClick={openModal}
          >
            Submit Your Recommendation
          </button>
        </div>
      </div>
      <Modal modalData={modalData} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TechTopRec;
