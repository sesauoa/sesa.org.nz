import { statistics } from "@/data/statistics";

const SponsorStats: React.FC = () => {
  return (
    <div>
      <div className="text-center my-8">
        <div className="flex justify-center space-x-8">
          <div className="w-[130px]">
            <strong className="text-2xl">{statistics.MEMBERS}+</strong>
            <p className="">Registered members</p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">
              {statistics.ATTENDEES_TO_FLAGSHIP_EVENTS}+
            </strong>
            <p>
              <span className="block">Attendees to</span>
              <span className="block">flagship events</span>
            </p>
          </div>
          <div className="w-[130px]">
            <strong className="text-2xl">{statistics.EVENTS}+</strong>
            <p className="">Events run per year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorStats;
