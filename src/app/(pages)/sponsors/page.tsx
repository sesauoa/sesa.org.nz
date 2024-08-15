import React from "react";
import OurSponsors from "@/components/OurSponsors";
import StatisticsSection from "@/components/SponsorStats";
import SponsorUsCards from "@/components/SponsorUsCards";
import { goldSponsors, silverSponsors } from "@/constants/sponsors";


const SponsorsPage: React.FC = () => {
  return (
    <div className="page-padding bg-gray-900">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center">
        {" "}
        Sponsor Us
      </h1>
      <div className="mx-auto w-20 my-2 bg-accent h-[2px]"></div>
      <StatisticsSection />
      <SponsorUsCards />
      <div className="flex justify-center mt-5 mb-28">
        <a
          key="join-button"
          href="mailto:exec@sesa.org.nz?subject=Sponsorship Inquiry"
          className="bg-accent cursor-pointer rounded-full font-sans text-lg text-primary-content inline transition-transform duration-200 hover:scale-110 m-4 px-6 py-[6px]"
        >
          Become a sponsor!
        </a>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center">
        Our 2024 Sponsors
      </h1>
      <div className="mx-auto w-20 mt-2 mb-8 bg-accent h-[2px]"></div>
      <OurSponsors title="Gold Sponsors" sponsors={goldSponsors} type="gold" />
      <OurSponsors
        title="Silver Sponsors"
        sponsors={silverSponsors}
        type="silver"
      />
    </div>
  );
};

export default SponsorsPage;
