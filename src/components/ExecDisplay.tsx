import { TeamInfo } from "@/data/teamInfo";
import { Statistics } from "@/data/statistics";

const ExecDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-center justify-center pb-24">
      {TeamInfo.map((executive, index) => (
        <div className="bg-white rounded-lg shadow-lg w-[200px] h-[270px] flex justify-center p-4" key={index}>
          <div
            className="relative w-[160px] h-[160px]"
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src={`/team-images/${Statistics.YEAR}/${executive.imageName}.jpg`}
              alt={executive.name}
              loading="lazy"
            />
            <div className="text-center pt-2">
              <strong className="text-lg">{executive.name}</strong>
              <p>{executive.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecDisplay;
