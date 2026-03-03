import { executives } from "@/data/executives";

const ExecDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-8 items-center justify-center pb-16">
      {executives[2026].map((executive, index) => {
        const isLongName = executive.name.length > 18;
        const nameClass = isLongName
          ? "text-xs sm:text-sm md:text-base"
          : "text-sm sm:text-base md:text-lg";

        return (
          <a
            className="rounded-lg shadow-lg w-[170px] h-[240px] sm:w-[210px] sm:h-[300px] md:w-[215px] md:h-[300px] flex justify-center transition-transform duration-200 hover:scale-105"
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
                <strong className={`${nameClass} leading-tight`}>{executive.name.toUpperCase()}</strong>
                <p className="text-xs sm:text-sm md:text-base">{executive.role}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ExecDisplay;
