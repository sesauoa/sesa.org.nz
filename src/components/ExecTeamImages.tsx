import React from "react";

const teamImages: { [key: number]: string } = {
  2024: "/team-images/2024/team-photo/team_photo.png",
  2023: "/team-images/2023/team-photo/team_photo.png",
  2022: "/team-images/2022/team-photo/team_photo.png",
  2021: "/team-images/2021/team-photo/team_photo.png",
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