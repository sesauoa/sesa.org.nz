import React from "react";
import Statistics from "@/components/Statistics";
import { hackathonStatistics } from "@/update-annually/hackathonStatistics";

export default function HackathonPage() {
  const stats = {
    stat1: hackathonStatistics.DAYS,
    title1: 'Days',
    stat2: hackathonStatistics.SIGN_UPS,
    title2: 'Sign-ups',
    stat3: hackathonStatistics.ATTENDEES,
    title3: 'Attendees',
  };

  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl font-bold m-6 text-center text-sesa-teal-dark">
        SESA x WDCC Hackathon
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>

      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Quick Statistics
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1.5px]"></div>
      <Statistics 
        title1={stats.title1} stat1={stats.stat1}
        title2={stats.title2} stat2={stats.stat2}
        title3={stats.title3} stat3={stats.stat3}
      />
    </div>

    // Add info, past winners, gallery
  );
}
