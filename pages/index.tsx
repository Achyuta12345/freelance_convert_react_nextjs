// pages/index.tsx

import CondeNastTechnology from '@/app/components/CondeNastTechnology';
import Header from '@/app/components/Header';
import { MultipleBlock } from '@/app/components/MultipleBlock';
import TechHubTutorial from '@/app/components/TechHubTutorial';
import VerticalCardMultiImage from '@/app/components/VerticalCardMultiImage';
import React from 'react';
export interface HeaderProps {
  initialUrl?: string;
  imageUrl?: string;
  descriptionUrl?: string;
}
export interface TechHubTutorialProps {
  imageUrl: string; // URL of the image to display
  title: string; // Title text for the section
  tutorialUrl: string; // URL for the tutorial link
}

const Home: React.FC = () => {
  return (
    <>
   <Header 
    initialUrl="https://example.com"
        imageUrl="https://storage.googleapis.com/a1aa/image/81CneFLIj42XTiMv50D3fi6M9hA8NRI7MHASK1RfKz3KLeRPB.jpg"
        descriptionUrl="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque pellentesque
          libero"/>
   <MultipleBlock/>
   <TechHubTutorial imageUrl="https://storage.googleapis.com/a1aa/image/FcodR1ftfjqwX0aJ6lYfpy8SeeRv8S9e13ImDjlRHxb7pQI9E.jpg" title="Mater The Tech Hub With This Tutorial" tutorialUrl="https://www.youtube.com/@freecodecamp"/>
   {/* <VerticalCardMultiImage/> */}
   <CondeNastTechnology/>
   </>   
  );
};

export default Home;
