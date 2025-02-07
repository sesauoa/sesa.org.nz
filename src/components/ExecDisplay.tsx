import { TeamInfo } from "@/data/teamInfo";
import { Statistics } from "@/data/statistics";

const ExecDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-center justify-center pb-16">
      {TeamInfo.map((executive, index) => (
        <a
          className="rounded-lg shadow-lg w-[200px] h-[270px] md:w-[200px] md:h-[275px] flex justify-center transition-transform duration-200 hover:scale-105"
          href={executive.linkedIn}
          target="_blank"
          key={index}>
          <div>
            <img
              className="w-full h-[75%] object-cover rounded-t-lg"
              src={`/team-images/${Statistics.YEAR}/${executive.imageName}.jpg`}
              alt={executive.name}
              loading="lazy"
            />
            <div className="text-center pt-2">
              <strong className="md:text-lg">{executive.name}</strong>
              <p className="text-sm md:text-base">{executive.role}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ExecDisplay;
