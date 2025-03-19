import React from "react";
import "../app/globals.css";

interface SponsorCardProps {
  name: string;
  logo: string;
  link: string;
  size: string;
  type: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  logo,
  link,
  size,
  type,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="flex items-center justify-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        style={{ width: `${size}px`, height: type === "gold" ? "96px" : "72px" }}
      >
        <img
          src={logo}
          alt={name}
          className="h-full w-full object-contain"
          draggable="false"
        />
      </div>
    </a>
  );
};

export default SponsorCard;
