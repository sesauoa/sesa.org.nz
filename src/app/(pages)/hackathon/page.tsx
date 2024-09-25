import React from "react";
import OurSponsors from "@/components/OurSponsors";
import StatisticsSection from "@/components/SponsorStats";
import { goldSponsors, silverSponsors } from "@/update-annually/sponsors";

export default function HackathonPage() {

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
      <StatisticsSection />
    </div>
  );
}
