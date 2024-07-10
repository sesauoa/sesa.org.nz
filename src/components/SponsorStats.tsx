import React from "react";

const StatisticsSection: React.FC = () => {
  return (
    <div>
      <div className="text-center my-8">
        <div className="flex justify-center space-x-8">
          <div className="w-[130px]">
            <h2 className="text-white text-2xl">450+</h2>
            <p className="text-white">Registered members</p>
          </div>
          <div className="w-[130px]">
            <h2 className="text-white text-2xl">150+</h2>
            <p className="text-white">
              <span className="block">Attendees to our</span>
              <span className="block">flagship events</span>
            </p>
          </div>
          <div className="w-[130px]">
            <h2 className="text-white text-2xl">16+</h2>
            <p className="text-white">Events run per year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
