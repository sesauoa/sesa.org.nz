import React from "react";

interface CardData {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

interface CardProps {
  cards: CardData[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="text-center flex flex-wrap justify-center gap-4 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-xs w-full bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.imgSrc}
            alt={card.alt}
            draggable="false"
          />
          <div className="px-4 py-8 gap-8">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-sesa-navy-dark">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
