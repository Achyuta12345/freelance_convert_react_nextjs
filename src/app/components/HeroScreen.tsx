'use client';
import React from "react";
// import LeaderShipUpdate from "../../components/Hero/LeaderShipUpdate";
// import LatestNewsLetter from "../../components/Hero/LatestNewsLetter";
import {LatestNewsLetter} from "./LatestNewsLetter";
import Blog from "./Blog";
import Video from "./Video";
import { CenteredModal } from "./CenteredModal";
import { centeredModalData } from "../data/homePageData";
import { latestNewsLetterData } from "../data/homePageData";
import { videoData } from "../data/homePageData";
import { blogData } from "../data/homePageData";
import { TechnologyTuneData } from "../data/homePageData";
import { TechTopRecData } from "../data/homePageData";
import Tech from "./Tech";
// Define the updated type for the leadership update data

interface Media {
  id: string;
  url: string;
  mimeType: string;
  size: number;
}

export interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
}

interface centeredModalData {
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
    Content: Array<{
      __typename: string;
      colorTheme: string;
      title: string;
      subtitle: string;
      navigationSlug: string;
      items: Array<{
        id: string;
        title: string;
        publishedDate: string;
        modalContent: {
          Text: string;
          modalTitle: string | null;
          media?: { data: { attributes: string } };
        };
      }>;
    }>;
    landingMedia: unknown[]; // Adjust as needed
    featuredMedia: unknown | null;
    localizations: unknown[]; // Adjust as needed
  };
}




export interface LatestNewsLetterData {
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
    Content: Array<{
      Title: string;
      description: string;
      navigationSlug: string;
      LatestNewsLetter: {
        newsletter: {
          data: {
            attributes: {
              title: string;
              subjectLine: string | null;
              content: string;
              homePageImage: {
                data: {
                  attributes: {
                    url: string;
                    mime: string;
                  };
                };
              };
            };
          };
        };
        items: Array<{
          id: string;
          media: string;
          title: string;
          text: string;
          link: string;
          layout: string;
          size: string;
          margin: string;
          displaySeperator: boolean;
          navSlug: string;
          colorTheme: string;
          modal: {
            title: string;
            content: string;
          };
        }>;
      };
    }>;
    landingMedia: Media; // Adjust based on `landingMedia` structure
    featuredMedia: unknown | null; // Replace `unknown` with the appropriate type if available
    localizations: Localization; // Adjust based on the structure of `localizations`
  };
}


export interface BlogData {
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
    Content: Array<{
      __typename: string;
      link: string;
      navigationSlug: string;
      modalVideo: {
        videoURL: string;
        title: string;
      };
    }>;
    landingMedia: Media | {} | null; // If you have a more specific type for `landingMedia`, replace `any`
    featuredMedia: unknown | null; // Adjust the type of `featuredMedia` if necessary
    localizations: Localization[]; // Replace `any` with a more specific type if available
  };
}
export interface videoData {
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
    Content: Array<{
      __typename: string;
      link: string;
      navigationSlug: string;
      modalVideo: {
        videoURL: string;
        title: string;
      };
    }>;
    landingMedia: Media | {} | null; // If you have a more specific type for `landingMedia`, replace `any`
    featuredMedia: unknown | null; // Adjust the type of `featuredMedia` if necessary
    localizations: Localization[]; // Replace `any` with a more specific type if available
  };
}

export const HeroScreen = (): JSX.Element => {
  // Updated leadership data
  

  return (<>
    <div className="grid grid-cols-12 gap-4">
      {/* Leadership Update (col-1) Start */}
     <div className="col-span-3 px-8 ">
     <CenteredModal
        centeredModalData={centeredModalData} // Pass your leadership update data here
      />
     </div>
       {/* <LeaderShipUpdate centeredModalData={centeredModalData} /> */}
      {/* Leadership Update (col-1) End */}

      {/* Latest News Letter (2nd-col) Start */}
      
      <LatestNewsLetter latestNewsLetterData={latestNewsLetterData} />
     
      {/* Latest News Letter (2nd-col) End */}

      {/* 3rd-col Start */}
      <div className="col-span-3 px-8">
        {/* Blog Start */}
        <Blog blogData={blogData} />
        {/* Blog End */}

        {/* Video Start */}
        <Video videoData={videoData} />
        {/* Video End */}
      </div>
      {/* 3rd-col End */}
    </div>
    <Tech TechnologyTuneData={TechnologyTuneData}  TechTopRecData={TechTopRecData}/>
    </>
  );
};
