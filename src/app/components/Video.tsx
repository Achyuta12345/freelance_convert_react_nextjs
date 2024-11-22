import { videoData } from '@/app/components/HeroScreen';
import Image from 'next/image'
import React from 'react'


interface VideoPrpos {
  videoData: videoData;
}
const Video: React.FC<VideoPrpos>=({videoData})=> {
  return (
    <>
     
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mt-10">
          <div className="relative w-[272px] h-[181.33px]">
          <video
  src={videoData.results.Content[0].modalVideo.videoURL}
  
  className="w-full h-full object-cover"
  loop
  autoPlay
  muted
  
/>
          </div>

          <div className="flex flex-col w-[272px] items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Proxima_Nova-Semibold',Helvetica] font-normal text-[#8c8c8c] text-xs tracking-[1.00px] leading-[normal]">
             {videoData.results.Content[0].modalVideo.title}
            </div>
            <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Miller_Display-Roman',Helvetica] font-normal text-black text-xl tracking-[0] leading-[26px]">
               {/* {videoData.results.Content[0].modalVideo.description} */}
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia asperiores, excepturi consectetur laborum veritatis nam amet, voluptatibus esse quos aliquam, aut pariatur iure fugiat inventore ut odio reprehenderit dolorum!
               </p>
            </div>
          </div>
        </div>
     
    </>
  )
}

export default Video
