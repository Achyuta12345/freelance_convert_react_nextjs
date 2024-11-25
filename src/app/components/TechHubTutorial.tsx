import React from 'react';
import { TechHubTutorialProps } from '../../../pages';


const TechHubTutorial: React.FC<TechHubTutorialProps> = ({ imageUrl, title, tutorialUrl }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex w-3/4 h-32">
        {/* Image Section */}
        <div className="w-2/3">
          <img
            alt="Abstract wavy pattern with shades of blue and purple"
            className="w-full h-full object-cover"
            height={400}
            src={imageUrl} // Use the image URL from props
            width={600}
          />
        </div>
        {/* Text Section */}
        <div className="w-1/3 bg-black text-white flex flex-col justify-center items-start p-8">
          <h1 className="text-2xl font-bold mb-4">{title}</h1> {/* Use title from props */}
          <a
            className="text-sm font-semibold flex items-center"
            href={tutorialUrl} // Use tutorial URL from props
            target="_blank"
            rel="noopener noreferrer"
          >
            WATCH THE TUTORIAL
            <i className="fas fa-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechHubTutorial;
