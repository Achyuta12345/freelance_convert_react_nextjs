import React from 'react';

// Define the type for the TechnologyTuneData prop
interface TechnologyTuneProps {
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
  };
}


const TechnologyTune: React.FC<TechnologyTuneProps> = ({ TechnologyTuneData }) => {
  const { results } = TechnologyTuneData;
  const content = results.Content?.[0];
  const firstItem = content?.items?.[0];

  const MusicPlayer = () => {
    if (firstItem?.playlistUrl && React.isValidElement(firstItem.playlistUrl)) {
      return firstItem.playlistUrl;
    }
    return <div>No Playlist Available</div>;
  };

  return (
    <div className="p-4 ">
      <MusicPlayer />
      <h2 className="text-xl font-semibold py-4">Technology Tunes</h2>
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
