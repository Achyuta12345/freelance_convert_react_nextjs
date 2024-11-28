import React, { useState } from 'react';
import { videoData as VideoDataType } from '@/app/components/MultipleBlock';

interface VideoProps {
  videoData: VideoDataType;
}

const Video: React.FC<VideoProps> = ({ videoData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Video Card */}
      <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mt-10">
        <div
          className="relative w-[272px] h-[181.33px] cursor-pointer"
          onClick={openModal} // Open modal on click
        >
          <video
            src={videoData.modalVideo.videoURL}
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
          />
        </div>

        <div className="flex flex-col w-[272px] items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Proxima_Nova-Semibold',Helvetica] font-normal text-[#8c8c8c] text-xs tracking-[1.00px] leading-[normal]">
            {videoData.modalVideo.title}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div
      className="bg-white p-5 rounded-md w-[80%] max-w-[600px] relative"
      style={{
        maxHeight: "90vh", // Limits modal height to 90% of viewport height
        overflowY: "auto", // Allows scrolling if content exceeds modal height
      }}
    >
      {/* Close Button */}
      <button
        className="absolute py-2 top-1 right-1 text-black text-2xl font-bold hover:text-red-500"
        onClick={closeModal}
      >
        &times; {/* Close Button */}
      </button>

      {/* Video Content */}
      <div
        className="w-full"
        style={{
          height: "50vh", // Video height set to 50% of viewport height
        }}
      >
        <video
          src={videoData.modalVideo.videoURL}
          className="w-full h-full object-contain"
          controls
          autoPlay
        />
      </div>

      {/* Title */}
      <div className="mt-3 text-center text-gray-700">
        {videoData.modalVideo.title}
      </div>
    </div>
  </div>
)}



    </>
  );
};

export default Video;
