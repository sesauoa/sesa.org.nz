import React from "react";

interface StatisticsProps {
  stat1: string;
  title1: string;
  stat2: string;
  title2: string;
  stat3: string;
  title3: string;
}

export default function Statistics({ stat1, title1, stat2, title2, stat3, title3 }: StatisticsProps) {
  return (
    <div>
      <div className="text-center my-8">
        <div className="flex justify-center space-x-8">
          <div className="w-[130px]">
            <strong className="text-2xl">{stat1}</strong>
            <p>
              {title1}
            </p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">{stat2}</strong>
            <p>
              <span className="block">{title2}</span>
            </p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">{stat3}</strong>
            <p>
              {title3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
