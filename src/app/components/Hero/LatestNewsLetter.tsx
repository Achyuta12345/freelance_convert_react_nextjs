import Image from 'next/image'
import React from 'react'

interface Media {
  id: number;
  url: string;
  mimeType: string;
  size: number;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
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

interface LatestNewsLetterPrpos {
  latestNewsLetterData: LatestNewsLetterData;
}
const LatestNewsLetter: React.FC<LatestNewsLetterPrpos> = ({ latestNewsLetterData }) => {
// function LatestNewsLetter() {
    return (
      <>
        {/* <div className="flex flex-col w-[536px] items-start gap-[21px] relative"> */}
        <div className="col-span-6 px-8 border-l-2 border-r-2">
         

        

          <div className="relative h-[368px] w-full">
            <Image
              alt="Rectangle"
              src={latestNewsLetterData.results.Content[0].LatestNewsLetter.newsletter.data.attributes.homePageImage.data.attributes.url}
              layout="fill" // Image will fill the parent container
              objectFit="cover" // Maintain the object-cover behavior
            />
          </div>

          <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto] ">
            <div className="relative self-stretch mt-8 [font-family:'Miller_Display-Roman',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[normal] ">
             {latestNewsLetterData.results.Content[0].Title}
            </div>
            <p className="relative self-stretch [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              {latestNewsLetterData.results.Content[0].description}
            </p>
          </div>
        
        </div>
      </>
    );
}

export default LatestNewsLetter
