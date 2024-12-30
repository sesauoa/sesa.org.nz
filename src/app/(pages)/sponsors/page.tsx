import React from "react";
import OurSponsors from "@/components/OurSponsors";
import StatisticsSection from "@/components/SponsorStats";
import SponsorUsCards from "@/components/Card";
import { goldSponsors, silverSponsors } from "@/data/sponsors";
import { Statistics } from "@/data/statistics";

export default function SponsorPage() {
  const sponsorCardsData = [
    {
      imgSrc: "sponsors-images/showcase-opportunities.jpg",
      alt: "Showcase Opportunities",
      title: "Showcase Opportunities",
      description:
        "Showcase your opportunities for prospective interns and graduates to our large network",
    },
    {
      imgSrc: "sponsors-images/engage.jpg",
      alt: "Engage with Emerging Talent",
      title: "Engage with Emerging Talent",
      description:
        "Connect with driven students through our various events, workshops and hackathons.",
    },
    {
      imgSrc: "sponsors-images/industry-presence.jpg",
      alt: "Enhance Industry Presence",
      title: "Enhance Industry Presence",
      description:
        "Boost your brand recognition and reputation among students and the wider tech community.",
    },
  ];

  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24">
      <h1 className="text-2xl md:text-3xl font-bold m-6 text-center text-sesa-teal-dark">
        Our {Statistics.YEAR} Sponsors
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
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
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1.5px]"></div>
      <StatisticsSection />
      <SponsorUsCards cards={sponsorCardsData} />
    </div>
  );
}
