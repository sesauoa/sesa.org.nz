import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import slideshow1 from "../../public/slideshow/SESA-1.jpg";
import slideshow2 from "../../public/slideshow/SESA-2.jpg";
import slideshow3 from "../../public/slideshow/SESA-3.jpg";
import slideshow4 from "../../public/slideshow/SESA-4.jpg";
import slideshow5 from "../../public/slideshow/SESA-5.jpg";

export default function Slideshow() {
  const images = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute object-center object-cover w-full h-screen -z-20">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          className="absolute object-center object-cover min-h-[650px] w-full h-screen"
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={index === i ? { opacity: 1 } : { opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
