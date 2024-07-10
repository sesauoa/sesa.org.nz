import React from "react";
import OurSponsors from "@/components/OurSponsors";

const goldSponsors = [
  {
    name: "Jane Street",
    logo: "sponsors-images/jane-st.png",
    link: "https://www.janestreet.com/join-jane-street/overview/",
  },
];

const silverSponsors = [
  {
    name: "IMC Trading",
    logo: "sponsors-images/IMC.png",
    link: "https://careers.imc.com/us/en",
  },
  {
    name: "Atlassian",
    logo: "sponsors-images/atlassian.png",
    link: "https://www.atlassian.com/company/careers",
  },
  {
    name: "Canva",
    logo: "sponsors-images/Canva.svg",
    link: "https://www.lifeatcanva.com/en/jobs/",
  },
  {
    name: "Serato",
    logo: "sponsors-images/serato.png",
    link: "https://serato.com/careers",
  },
  {
    name: "Vista",
    logo: "sponsors-images/vista.png",
    link: "https://www.vista.co/careers/",
  },
  {
    name: "Sandfield",
    logo: "sponsors-images/sandfield.png",
    link: "https://www.sandfield.co.nz/careers/interns-graduates",
  },
  {
    name: "Emergency Q",
    logo: "sponsors-images/EmergencyQ.svg",
    link: "https://www.emergencyq.com/",
  },
];

const SponsorsPage: React.FC = () => {
  return (
    <div className="page-padding bg-gray-900">
      <h1 className="page-title text-center">Our 2024 Sponsors</h1>
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
