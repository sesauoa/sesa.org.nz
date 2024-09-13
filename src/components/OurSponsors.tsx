import React from "react";
import SponsorCard from "./SponsorCard";

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
      {type === "gold" ? (
        <h2 className="text-yellow-500 text-2xl font-bold text-center mb-4">
          {title}
        </h2>
      ) : (
        <h2 className="text-gray-500 text-2xl font-bold text-center mb-4">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="px-3 md:px-12 py-6">
            {type === "gold" ? (
              <SponsorCard
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                link={sponsor.link}
                type="gold"
              />
            ) : (
              <SponsorCard
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                link={sponsor.link}
                type="silver"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSponsors;
