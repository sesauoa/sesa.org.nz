import { Statistics } from "@/data/statistics";

const StatisticsSection: React.FC = () => {
  return (
    <div>
      <div className="text-center my-8">
        <div className="flex justify-center space-x-8">
          <div className="w-[130px]">
            <strong className="text-2xl">{Statistics.MEMBERS}+</strong>
            <p className="">Registered members</p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">
              {Statistics.ATTENDEES_TO_FLAGSHIP_EVENTS}+
            </strong>
            <p className="">
              <span className="block">Attendees to our</span>
              <span className="block">flagship events</span>
            </p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">{Statistics.EVENTS}+</strong>
            <p className="">Events run per year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
