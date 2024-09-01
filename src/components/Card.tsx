import React from "react";
import Link from "next/link";
import Animation from "./Animation";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  linkUrl,
}) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      passHref
      className="card-container"
    >
      <Animation>
        <div className="card">
          <img src={imgSrc} alt={imgAlt} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </Animation>
    </Link>
  );
};

export default Card;
