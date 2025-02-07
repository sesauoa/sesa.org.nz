import React from "react";

const teamImages: { [key: number]: string } = {
  2024: "/team-images/team-photos/2024_team.jpg",
  2023: "/team-images/team-photos/team_photo.png",
  2022: "/team-images/team-photos/team_photo.png",
  2021: "/team-images/team-photos/team_photo.png",
}

export default function ExecTeamImages({ selectedYear }: { selectedYear: number }) {
  return (
    <div className="mb-6">
      {teamImages[selectedYear] ? (
        <img
          src={teamImages[selectedYear]}
          alt="Past Executives Team Photo"
          className="rounded-lg shadow-md w-full"
        />
      ) : (
        null
      )}
    </div>
  )
}