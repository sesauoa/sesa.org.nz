import React from "react";
import OurSponsors from "@/components/OurSponsors";
import StatisticsSection from "@/components/SponsorStats";
import SponsorUsCards from "@/components/SponsorUsCards";
import { goldSponsors, silverSponsors } from "@/app/updateAnnually/sponsors";
import { Statistics } from "@/app/updateAnnually/statistics";

export default function SponsorPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-sesa-teal-light">
        Our {Statistics.YEAR} Sponsors
      </h1>
      <div className="mx-auto w-20 mt-2 mb-8 bg-sesa-teal-light h-[2px]"></div>
      <OurSponsors title="Gold Sponsor" sponsors={goldSponsors} type="gold" />
      <OurSponsors
        title="Silver Sponsors"
        sponsors={silverSponsors}
        type="silver"
      />
      <div className="flex justify-center mt-16">
        <a
          key="join-button"
          href="mailto:exec@sesa.org.nz?subject=Sponsorship Inquiry"
          className="bg-sesa-teal-light cursor-pointer rounded-full font-sans text-2xl text-white inline transition-transform duration-200 hover:scale-110 mb-4 px-6 py-[6px]"
        >
          Become a sponsor!
        </a>
      </div>
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6 text-center">
        Sponsor us
      </h1>
      <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-0.5"></div>
      <StatisticsSection />
      <SponsorUsCards />
    </div>
  );
}
