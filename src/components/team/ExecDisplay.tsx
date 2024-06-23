import { TeamInfo } from "@/constants/TeamInfo";

const ExecDisplay = () => {
  const YEAR = "2024";
  return (
    <div className="parent-container">
      <div className="executives-container flex flex-row gap-2 flex-wrap items-center justify-center">
        {TeamInfo.map((executive, index) => (
          <div className="executive relative w-[200px] h-[200px]" key={index}>
            <img
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src={`/team-images/${YEAR}/${executive.imageName}.jpg`}
              alt={executive.name}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-white text-center">
                <p>{executive.name}</p>
                <p>{executive.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecDisplay;
