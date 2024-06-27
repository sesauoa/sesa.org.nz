import React from "react";
import AutoSlideshow from "./AutoSlideshow";
import ThreeScene from "./ThreeScene";
import SocialMediaButtons from "./SocialMediaButtons";

interface SplashHeaderProps {
  images: string[];
  headerText: string;
  bodyText: string;
}

const SplashHeader: React.FC<SplashHeaderProps> = ({
  images,
  headerText,
  bodyText,
}) => {
  return (
    <div className="relative h-screen max-w-screen-xl mx-auto">
      <AutoSlideshow images={images} />
      <div className="absolute top-0 left-0 h-full w-2/3 bg-opacity-50 pl-10 flex items-center">
        <div>
          <h1 className="text-white text-7xl text-shadow font-bold">
            {headerText}
          </h1>
          <p className="text-white text-2xl text-shadow pt-2">{bodyText}</p>
          <div className="float-left pt-6">
            <SocialMediaButtons />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-opacity-50 p-0 flex items-center overflow-hidden">
        <ThreeScene />
      </div>
    </div>
  );
};

export default SplashHeader;
