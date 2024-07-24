import React from "react";

const SponsorUsCards: React.FC = () => {
  return (
    <div className="text-center my-8 flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-8 md:space-y-0">
      {[
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
            "Connect with driven students through our various events, workshops, and hackathons.",
        },
        {
          imgSrc: "sponsors-images/industry-presence.jpg",
          alt: "Enhance Industry Presence",
          title: "Enhance Industry Presence",
          description:
            "Boost your brand recognition and reputation among students and the wider tech community.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="max-w-xs bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.imgSrc}
            alt={card.alt}
          />
          <div className="px-4 py-8">
            <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
            <p className="text-gray-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorUsCards;
