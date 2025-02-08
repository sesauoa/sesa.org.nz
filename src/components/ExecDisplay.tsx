import { executives } from "@/data/executives";
import { Statistics } from "@/data/statistics";

const ExecDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-center justify-center pb-16">
      {executives[Statistics.YEAR].map((executive, index) => (
        <a
          className="rounded-lg shadow-lg w-[150px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[210px] md:h-[280px] flex justify-center transition-transform duration-200 hover:scale-105"
          href={executive.linkedIn}
          target="_blank"
          key={index}>
          <div>
            <img
              className="w-full h-[75%] object-cover rounded-t-lg"
              src={`/team-images/exec/${executive.imageName}.jpg`}
              alt={executive.name}
              loading="lazy"
            />
            <div className="text-center pt-2">
              <strong className="text-sm sm:text-base md:text-lg">{executive.name.toUpperCase()}</strong>
              <p className="text-xs sm:text-sm md:text-base">{executive.role}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ExecDisplay;
