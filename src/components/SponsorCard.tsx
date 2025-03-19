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
      className="w-32 h-32"
    >
      <div
        className={
          (type === "gold" ? `w-${size} h-24 ` : `w-${size} h-18 `) +
          "flex items-center justify-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        }
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
