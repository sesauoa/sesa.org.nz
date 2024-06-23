import ExecDisplay from "@/components/ExecDisplay";

export const metadata = {
  title: 'SESA - Our Team',
}

export default function OurTeamPage() {
  return (
    <div>
      <div className="px-6 lg:px-24 py-6">
        <h1 className="text-3xl text-secondary font-bold text-center m-4">
          SESA Executive Team 2024
        </h1>
        <div className="flex justify-center items-center gap-2 flex-col p-5 pb-4">
          <img
            className="w-[90%] lg:w-[80%] mb-4"
            src={`/team-images/2024/team_photo.png`}
            alt="SESA 2024 Team Photo"
          />
          <ExecDisplay />
        </div>
      </div>
    </div>
  );
}
