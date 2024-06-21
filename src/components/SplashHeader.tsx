import React from "react";
import ThreeScene from "./ThreeScene";
import SocialMediaButtons from "./SocialMediaButtons";

interface SplashHeaderProps {
  images: string[];
  headerText: string;
  bodyText: string;
}

const SplashHeader: React.FC<SplashHeaderProps> = ({
  headerText,
  bodyText,
}) => {
  return (
    <div className="relative mx-auto py-32">
      <div className="flex items-center">
        <div className="w-2/3">
          <h1 className="text-accent text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-shadow font-bold">
            {headerText}
          </h1>
          <p className="text-white md:text-xl xl:text-2xl text-shadow pt-2">{bodyText}</p>
          <div className="float-left pt-6">
            <SocialMediaButtons />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 p-0 flex items-center overflow-hidden">
        <ThreeScene />
      </div>
    </div>
  );
};

export default SplashHeader;
