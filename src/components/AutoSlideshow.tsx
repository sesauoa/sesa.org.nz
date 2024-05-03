import React, { useState, useEffect } from "react";

interface AutoSlideshowProps {
  images: string[];
}

const AutoSlideshow: React.FC<AutoSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="h-screen max-w-screen-xl mx-auto overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
  );
};

export default AutoSlideshow;
