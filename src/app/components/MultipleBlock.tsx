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



export interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
}

interface centeredModalData {
  _typename: string; // Component type identifier
  title: string | null; // Main title of the modal, nullable
  subtitle: string | null; // Subtitle of the modal, nullable
  navigationSlug: string | null; // Slug for navigation, nullable
  items: Array<{
    __typename: string; // Component type identifier for items
    id: string; // Unique identifier for the item
    title: string | null; // Item title, nullable
    publishedDate: string | null; // Date the item was published, nullable
    modalContent: {
      text?: string; // Text content of the modal, optional
      modalTitle?: string | null; // Title of the modal, optional and nullable
      media?: { 
        data: { 
          attributes: string; // Media attributes, e.g., URL or metadata
        };
      }; // Optional media field
    } | null; // Modal content can be null
  }>;
}


interface Podcast {
  __typename: string; // GraphQL typename for the podcast item
  playlistUrl: string; // HTML embed code as a string
  noteText: string | null; // Optional note text
}

interface TechnologyTuneData {
  __typename: string; // GraphQL typename for the main component
  Title: string; // Title of the section
  Text: string; // HTML text content
  navigationSlug: string; // Navigation slug
  colorTheme: string; // Color theme
  Podcasts: Podcast[]; // Array of podcast objects
}

export interface LatestNewsLetterData {
  __typename: string;
  Title: string;
  navigationSlug: string;
  LatestNewsLetter: {
    __typename: string;
    newsletter: {
      __typename: string;
      data: {
        __typename: string;
        attributes: {
          __typename: string;
          title: string;
          subjectLine: string;
          content: string;
          homePageImage: {
            __typename: string;
            data: {
              __typename: string;
              attributes: {
                __typename: string;
                url: string;
                mime: string;
              };
            } | null;
          };
        };
      } | null;
    };
  };
}

export interface BlogData {
  __typename: string;
  link: string;
  navigationSlug: string;
  modalImage: {
    __typename: string;
    imageURL: string;
    title: string;
  };
}
export interface videoData {
  __typename: string;
  link: string;
  navigationSlug: string;
  modalVideo: {
    __typename: string;
    videoURL: string;
    title: string;
  };
}





export const MultipleBlock = (): JSX.Element => {
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
        <Video videoData={videoData}  />
        {/* Video End */}
      </div>
      {/* 3rd-col End */}
    </div>
    <Tech TechnologyTuneData={TechnologyTuneData}  TechTopRecData={TechTopRecData}/>
    </>
  );
};
