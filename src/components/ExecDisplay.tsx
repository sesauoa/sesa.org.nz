import { TeamInfo } from "@/update-annually/teamInfo";
import { Statistics } from "@/update-annually/statistics";

const ExecDisplay = () => {
  return (
    <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
      {TeamInfo.map((executive, index) => (
        <div
          className="relative w-[130px] h-[130px] lg:w-[175px] lg:h-[175px]"
          key={index}
        >
          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg shadow-md"
            src={`/team-images/${Statistics.YEAR}/${executive.imageName}.jpg`}
            alt={executive.name}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 cursor-default opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg shadow-md">
            <div className="text-white text-center">
              <p>{executive.name}</p>
              <p>{executive.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecDisplay;
