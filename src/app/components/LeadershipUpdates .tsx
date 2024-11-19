import React from "react";
import { Frame } from "./Frame";

const updates = [
  { date: "June 13, 2024", title: "Q2 Team Health Survey Results Recap" },
  { date: "May 23, 2024", title: "Organization Update About Data Science, Insights and Data Governance" },
  { date: "May 11, 2024", title: "What it Means to Treat Data As an Asset" },
  { date: "April 19, 2024", title: "The Path to Making Our Surfaces More Compelling with Katharine Bailey" },
];

export const LeadershipUpdates = (): JSX.Element => (
  <div className="flex flex-col w-[36rem] gap-5"> {/* Updated width to 36rem */}
    <div className="font-bold text-black text-base">Leadership Updates</div>
    <hr className="border-t border-gray-300" />
    {updates.map((update, index) => (
      <div key={index} className="flex flex-col gap-2.5">
        <div className="text-xs text-gray-500">{update.date}</div>
        <p className="text-xl text-black">{update.title}</p>
        {index < updates.length - 1 && <hr className="border-t border-gray-300" />}
      </div>
    ))}
    <Frame property1="default" />
  </div>
);