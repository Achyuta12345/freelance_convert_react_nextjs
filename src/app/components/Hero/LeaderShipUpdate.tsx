import Image from "next/image";
import React from "react";

// Define the type for the data being passed
interface LeaderShipUpdateData {
  date: string;
  title: string;
}

interface LeaderShipUpdateProps {
  leaderShipUpdateData: LeaderShipUpdateData[];
}

const LeaderShipUpdate: React.FC<LeaderShipUpdateProps> = ({ leaderShipUpdateData }) => {
  return (
    <div className="col-span-3 px-8">
      <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] border-b-2 border-slate-950 pb-1 mb-8">
        <div className="relative self-stretch font-bold text-black text-base tracking-[0.50px] leading-4">
          Leadership Updates
        </div>
      </div>

      {/* List Start */}
      <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] pb-8">
        {leaderShipUpdateData.map((update, index) => (
          <div key={index} className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-semibold text-[#8c8c8c] text-xs tracking-[1.00px] leading-normal whitespace-nowrap">
              {update.date}
            </div>
            <p className="relative w-64 font-normal text-black text-xl leading-[26px]">
              {update.title}
            </p>
            {index !== leaderShipUpdateData.length - 1 && (
              <div className="relative w-full h-px">
                <Image
                  alt="Line"
                  src="https://c.animaapp.com/14f96AiH/img/line-20.svg"
                  className="w-full h-px"
                  width={100}   
                  height={1}     
                 
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* List End */}
    </div>
  );
};

export default LeaderShipUpdate;
