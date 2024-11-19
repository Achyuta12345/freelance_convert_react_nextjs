import React from 'react';
import TechnologyTune from './TechnologyTune';
import TechTopRec from './TechTopRec';
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

interface TechProps {
    TechnologyTuneData: {
        status: number;
        results: {
          id: number;
          Title: string;
          Slug: string;
          published_at: string;
          created_at: string;
          updated_at: string;
          locale: string;
          SEOTitle: null | string;
          SEODescription: null | string;
          localizations: never[];
          Content?: {
            items: {
              playlistUrl: JSX.Element;
              noteText: string;
            }[];
          }[];
        };
      },
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
}}

export default function Tech({ TechnologyTuneData, TechTopRecData }: TechProps) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 px-8 border-r-2 border-r-gray-300 border:w-2 ">
        <TechnologyTune TechnologyTuneData={TechnologyTuneData} />
      </div>
      <div className="col-span-9 px-8">
        <TechTopRec TechTopRecData={TechTopRecData} />
      </div>
    </div>
  );
}
