import React from "react";

export default function Header({ selectedTeam, teamMembersCount }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 text-center my-4">
        Team Member Allocation
      </h1>
      <h1 className="text-2xl font-bold text-gray-800 text-center my-4">
        {selectedTeam} has {teamMembersCount} Member/s
      </h1>
    </div>
  );
}
