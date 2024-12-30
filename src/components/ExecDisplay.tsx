import { TeamInfo } from "@/data/teamInfo";
import { Statistics } from "@/data/statistics";

const ExecDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-center justify-center pb-24">
      {TeamInfo.map((executive, index) => (
        <div className="bg-white rounded-lg shadow-lg w-[200px] h-[255px] md:w-[220px] md:h-[280px] flex justify-center p-4" key={index}>
          <div
            className="relative w-[150px] h-[150px] md:w-[170px] md:h-[170px]"
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src={`/team-images/${Statistics.YEAR}/${executive.imageName}.jpg`}
              alt={executive.name}
              loading="lazy"
            />
            <div className="text-center pt-2">
              <strong className="md:text-lg">{executive.name}</strong>
              <p className="text-sm md:text-base">{executive.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecDisplay;
