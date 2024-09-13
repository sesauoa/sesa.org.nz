import ExecDisplay from "@/components/ExecDisplay";

export const metadata = {
  title: "SESA - Our Team",
};

export default function OurTeamPage() {
  return (
    <div className="w-full flex flex-col font-sans p-6 lg:px-24 text-center">
      <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
        SESA Executive Team 2024
      </h1>
      <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
      <div className="flex justify-center items-center gap-2 flex-col p-5 pb-4">
        <img
          className="w-[90%] lg:w-[80%] mb-4 rounded-lg shadow-md"
          src={`/team-images/2024/team_photo.png`}
          alt="SESA 2024 Team Photo"
        />
        <ExecDisplay />
      </div>
    </div>
  );
}
