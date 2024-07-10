import React from "react";
import SilverSponsorCard from "./SilverSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard";

interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

interface SponsorSectionProps {
  title: string;
  sponsors: Sponsor[];
  type: "gold" | "silver";
}

const OurSponsors: React.FC<SponsorSectionProps> = ({
  title,
  sponsors,
  type,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl text-accent font-bold text-center mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="px-12 py-2">
            {type === "gold" ? (
              <GoldSponsorCard
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                link={sponsor.link}
              />
            ) : (
              <SilverSponsorCard
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                link={sponsor.link}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSponsors;
