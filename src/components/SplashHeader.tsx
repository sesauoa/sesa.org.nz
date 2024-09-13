import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";

interface SplashHeaderProps {
  headerText: string;
  bodyText: string;
}

const SplashHeader: React.FC<SplashHeaderProps> = ({
  headerText,
  bodyText,
}) => {
  return (
    <div className="mx-auto py-32 font-sans">
      <div className="flex items-center px-5">
        <div className="w-4/5 lg:w-3/5">
          <h1 className="text-sesa-teal-light text-4xl md:text-5xl xl:text-6xl text-shadow font-bold">
            {headerText}
          </h1>
          <p className="text-white md:text-xl xl:text-2xl text-shadow pt-2">
            {bodyText}
          </p>
          <div className="float-left pt-6">
            <SocialMediaButtons />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute top-0 right-0 h-2/5 w-1/2 p-0 my-40 items-center overflow-hidden"></div>
    </div>
  );
};

export default SplashHeader;
