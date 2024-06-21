import React from "react";
import Link from "next/link";
import Animation from "./Animation";
import { motion } from "framer-motion";

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
      className="transform hover:scale-105 transition-transform duration-300"
    >
      <Animation>
        <div className="card bg-base-100 shadow-xl relative overflow-hidden group">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-60 object-cover transition-all duration-300 brightness-80 group-hover:brightness-50"
          />
          <div className="card-body p-4 bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <h2 className="card-title text-white">{title}</h2>
            <p className="text-white">{description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Animation>
    </Link>
  );
};

export default Card;
