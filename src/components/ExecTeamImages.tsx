import React from "react";

const teamImages: { [key: number]: string } = {
  2024: "/team-images/team-photos/team_2024.jpg",
  2023: "/team-images/team-photos/team_2023.jpg",
  2022: "/team-images/team-photos/team_2022.jpg",
  2021: "/team-images/team-photos/team_2021.jpg",
  2020: "/team-images/team-photos/team_2020.jpg",
  2018: "/team-images/team-photos/team_2018.jpg",
  2016: "/team-images/team-photos/team_2016.jpg",
  2015: "/team-images/team-photos/team_2015.jpg",
  2014: "/team-images/team-photos/team_2014.jpg",
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