import React from "react";
import Card from "./Card";

import Image from "../../public/test_image.jpeg";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card
        title="Project 1"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 1"
        linkUrl="https://www.google.com/"
      />
      <Card
        title="Project 2"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 2"
        linkUrl="https://www.google.com/"
      />
      <Card
        title="Project 3"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 3"
        linkUrl="https://www.google.com/"
      />
    </div>
  );
};

export default CardContainer;
