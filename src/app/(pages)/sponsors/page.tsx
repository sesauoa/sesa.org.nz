import React from 'react';
import SilverSponsorCard from "@/components/SilverSponsorCard";
import GoldSponsorCard from "@/components/GoldSponsorCard";


interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

const goldSponsors: Sponsor[] = [
  { name: "Jane Street", logo: "sponsors-images/jane-st.png", link: "https://www.janestreet.com/join-jane-street/overview/"}
];

const silverSponsors: Sponsor[] = [
  { name: "IMC Trading", logo: "sponsors-images/IMC.png", link: "https://careers.imc.com/us/en" },
  { name: "Atlassian", logo: "sponsors-images/atlassian.png", link: "https://www.atlassian.com/company/careers" },
  { name: "Canva", logo: "sponsors-images/Canva.svg", link: "https://www.lifeatcanva.com/en/jobs/" },
  { name: "Serato", logo: "sponsors-images/serato.png", link: "https://serato.com/careers" },
  { name: "Vista", logo: "sponsors-images/vista.png", link: "https://www.vista.co/careers/" },
  { name: "Sandfield", logo: "sponsors-images/sandfield.png", link: "https://www.sandfield.co.nz/careers/interns-graduates" },
  { name: "Emergency Q", logo: "sponsors-images/EmergencyQ.svg", link: "https://www.emergencyq.com/" }
];

const SponsorsPage: React.FC = () => {
  return (
    <div className="page-padding bg-gray-900">
      <h1 className="page-title text-center">Our 2024 Sponsors</h1>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-4">Gold Sponsors</h2>
        <div className="mx-auto w-20 my-2 bg-accent h-[2px]"></div>
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {goldSponsors.map((sponsor, index) => (
            <div key={index} className="px-12 py-2">
            <GoldSponsorCard key={index} name={sponsor.name} logo={sponsor.logo} link={sponsor.link}/>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center mt-16 mb-4">Silver Sponsors</h2>
        <div className="mx-auto w-20 my-2 bg-accent h-[2px]"></div>
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {silverSponsors.map((sponsor, index) => (
            <div key={index} className="px-12 py-2">
              <SilverSponsorCard key={index} name={sponsor.name} logo={sponsor.logo} link={sponsor.link}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

