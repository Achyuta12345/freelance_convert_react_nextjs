'use client';
import React, { useState } from 'react';
import Carousel from './Carousel';
import Modal from '@/app/components/Modal/Modal';
import {modalData} from '../../data/modalData'
interface LandingMediaType {
  id: number;
  url: string;
  type: string;
}

type FeaturedMediaType = {
  id: number;
  url: string;
  description: string;
} | null;

interface LocalizationType {
  locale: string;
  data: {
    title: string;
    description?: string; // Optional field
  };
}

// Define the type for the TechTopRecData prop
interface TechTopRecProps {
  TechTopRecData: {
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
        }[];
      }[];
      landingMedia: LandingMediaType[]; // Replace with the actual structure
      featuredMedia: FeaturedMediaType | null; // Replace with the actual structure
      localizations: LocalizationType[]; // Replace with the actual structure
    };
  };
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
          Tech<span>&apos;</span>s Top Recs
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
