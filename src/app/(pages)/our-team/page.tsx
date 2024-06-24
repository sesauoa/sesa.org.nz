import ExecDisplay from "@/components/ExecDisplay";

export const metadata = {
  title: "SESA - Our Team",
};

export default function OurTeamPage() {
  return (
    <div className="page-padding">
      <h1 className="page-title text-center">SESA Executive Team 2024</h1>
      <div className="flex justify-center items-center gap-2 flex-col p-5 pb-4">
        <img
          className="w-[90%] lg:w-[80%] mb-4"
          src={`/team-images/2024/team_photo.png`}
          alt="SESA 2024 Team Photo"
        />
        <ExecDisplay />
      </div>
    </div>
  );
}
