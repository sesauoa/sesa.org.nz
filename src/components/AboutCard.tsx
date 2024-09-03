import React from "react";

interface CardProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  imgStyles?: React.CSSProperties;
  containerStyles?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, alt, title, description, imgStyles = {}, containerStyles = "" }) => {
  return (
    <div
      className={`p-8 mx-auto rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none ${containerStyles}`}
      style={{ width: "330px", margin: "0.5rem" }}
    >
      <img
        src={imgSrc}
        alt={alt}
        style={{ width: "150px", height: "auto", userSelect: "none", pointerEvents: "none", ...imgStyles }}
        className="mb-3"
      />
      <h3 className="text-2xl font-bold mb-4 text-sesa-navy">{title}</h3>
      <p className="text-sesa-navy">{description}</p>
    </div>
  );
};

export default Card;
