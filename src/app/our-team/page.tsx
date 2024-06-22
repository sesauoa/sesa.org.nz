import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExecDisplay from "@/components/team/ExecDisplay";

export default function OurTeamPage() {
  return (
    <div>
      <div className="bg-primary">
        <Navigation />
        <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg">
          SESA 2024 Executive Team
        </h1>
        <div className="bg-white p-5 flex justify-center items-center gap-2 flex-col mb-4">
          <img
            className="w-[90%]"
            src={`/team-images/2024/team_photo.png`}
            alt="SESA 2024 Team Photo"
          />
          <ExecDisplay />
        </div>
      </div>

      <Footer />
    </div>
  );
}
