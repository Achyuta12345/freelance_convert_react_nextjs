import { BlogData, Localization, Media } from '@/app/components/HeroScreen';
import Image from 'next/image'
import React from 'react'


interface BlogProps {
  blogData: BlogData;
}
const Blog:React.FC<BlogProps> = ({blogData})=>{
  return (
    <>
      <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch w-full h-[181.33px]">
           
            <video
  src={blogData.results.Content[0].link}
  
  className="w-full h-full object-cover"
  loop
  autoPlay
  alt="Video"
/>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Proxima_Nova-Semibold',Helvetica] font-normal text-[#8c8c8c] text-xs tracking-[1.00px] leading-[normal]">
              {blogData.results.Content[0].modalVideo.title}
            </div>
            <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Miller_Display-Roman',Helvetica] font-normal text-black text-xl tracking-[0] leading-[26px]">
               {/* {blogData.description} */}
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores repudiandae tempora dolorem voluptatem at maxime deserunt alias soluta. Officia omnis praesentium debitis voluptas itaque temporibus consectetur qui molestias laudantium?
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Blog
