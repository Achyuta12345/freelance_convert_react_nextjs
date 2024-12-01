import React from 'react';

// Define the type for the TechnologyTuneData prop
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

interface TechnologyTuneProps {
  TechnologyTuneData: TechnologyTuneData; // Props for the component
}

const TechnologyTune: React.FC<TechnologyTuneProps> = ({ TechnologyTuneData }) => {
  const { Podcasts } = TechnologyTuneData;
  const firstItem = Podcasts[0];
  

  const MusicPlayer = () => {
    if (firstItem?.playlistUrl) {
      return (
        <div
          className="playlist-container"
          dangerouslySetInnerHTML={{ __html: firstItem.playlistUrl }}
        />
      );
    }
    return <div>No Playlist Available</div>;
  };
  

  return (
    <div className="p-4 ">
      <MusicPlayer />
      <h2 className="text-xl font-semibold py-4">{TechnologyTuneData.Title}</h2>
      <p className="text-md pb-4">
        {firstItem?.noteText || 'No notes available for this tune.'}
      </p>
      <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 text-sm rounded">
        Submit Your Songs
      </button>
    </div>
  );
};

export default TechnologyTune;
