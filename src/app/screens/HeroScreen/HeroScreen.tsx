'use client';
import React from "react";
// import LeaderShipUpdate from "../../components/Hero/LeaderShipUpdate";
// import LatestNewsLetter from "../../components/Hero/LatestNewsLetter";
import {LatestNewsLetter} from "../../components/Hero/LatestNewsLetter";
import Blog from "../../components/Hero/Blog";
import Video from "../../components/Hero/Video";
import { CenteredModal } from "../../components/CenteredModal";
import { LeaderShipUpdateData } from "../../data/LeaderShipUpdateData";
import { latestNewsLetterData } from "../../data/latestNewsLetterData";
import { videoData } from "../../data/videoData";
import { blogData } from "../../data/blogData";
import { TechnologyTuneData } from "../../data/TechnologyTuneData";
import { TechTopRecData } from "../../data/TechTopRecData";
import Tech from "../tech/Tech";
// Define the updated type for the leadership update data

export interface Media {
  id: number;
  url: string;
  mimeType: string;
  size: number;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
}

export interface leaderShipUpdateData {
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
      title: string;
      subtitle: string;
      colorTheme:string;
      navigationSlug: string;
      items: Array<{
        id: string;
        title: string;
        publishedDate: string;
        modalContent: {
          Text: string;
          modalTitle: string | null;
          media:{
            data:{attributes:string;}
            },
        };
      }>;
    }>;
    landingMedia: Media; // Adjust the type if you have more details about `landingMedia`
    featuredMedia: unknown  | null; // Adjust the type if you have more details about `featuredMedia`
    localizations: Localization; // Adjust the type if you have more details about `localizations`
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
      };
    }>;
    landingMedia: Media; // Adjust if you have more details about `landingMedia`
    featuredMedia: unknown | null; // Adjust the type if you know more details about `featuredMedia`
    localizations: Localization; // Adjust if you have more details about `localizations`
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
    landingMedia: Media; // If you have a more specific type for `landingMedia`, replace `any`
    featuredMedia: unknown | null; // Adjust the type of `featuredMedia` if necessary
    localizations: Localization; // Replace `any` with a more specific type if available
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
    landingMedia: Media; // If you have a more specific type for `landingMedia`, replace `any`
    featuredMedia: unknown | null; // Adjust the type of `featuredMedia` if necessary
    localizations: Localization; // Replace `any` with a more specific type if available
  };
}

export const HeroScreen = (): JSX.Element => {
  // Updated leadership data
  

  return (<>
    <div className="grid grid-cols-12 gap-4">
      {/* Leadership Update (col-1) Start */}
     <div className="col-span-3 px-8 ">
     <CenteredModal
        leaderShipUpdateData={leaderShipUpdateData} // Pass your leadership update data here
      />
     </div>
       {/* <LeaderShipUpdate leaderShipUpdateData={leaderShipUpdateData} /> */}
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
