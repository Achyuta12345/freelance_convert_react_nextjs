import React from 'react';
import TechnologyTune from './TechnologyTune';
import TechTopRec from './TechTopRec';
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




interface TechProps {
  TechnologyTuneData: TechnologyTuneData; // Props for the TechnologyTune component
  TechTopRecData: TechTopRecData; // Props for the TechTopRec component
}
export default function Tech({ TechnologyTuneData, TechTopRecData }: TechProps) {
  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-100 ">
      <div className="col-span-3 px-8 border-r-2 border-r-gray-300 border:w-2 ">
        <TechnologyTune TechnologyTuneData={TechnologyTuneData} />
      </div>
      <div className="col-span-9 px-8">
        <TechTopRec TechTopRecData={TechTopRecData} />
      </div>
    </div>
  );
}
