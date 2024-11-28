import React from 'react'

interface Media {
  id: string;
  url: string;
  mimeType: string;
  size: number;
}
 interface Localization {
  id: number;
  locale: string;
  title?: string;
  slug?: string;
  published_at?: string;
  created_at?: string;
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
interface BlogProps {
  blogData: BlogData;
}
const Blog:React.FC<BlogProps> = ({blogData})=>{
  return (
    <>
      <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch w-full h-[181.33px]">
           
  <img
  src={blogData.modalImage.imageURL}
  className="w-full h-full object-cover"  
/>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Proxima_Nova-Semibold',Helvetica] font-normal text-[#8c8c8c] text-xs tracking-[1.00px] leading-[normal]">
              {blogData.modalImage.title}
            </div>
           
          </div>
        </div>
    </>
  )
}

export default Blog
