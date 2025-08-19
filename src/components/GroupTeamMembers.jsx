import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function GroupTeamMembers({ selectedTeam, employees, setTeam }) {
  const getTeamMembers = () => {
    let teams = [];
    const teamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];

    teamNames.forEach((team) => {
      let members = employees.filter((employee) => employee.teamName === team);

      teams.push({
        team: team,
        members: members,
        collapse: selectedTeam === team ? false : true,
      });
    });
    return teams;
  };

  const [groupedTeamMembers, setGroupedData] = useState(getTeamMembers);

  const handleTeamCollapse = (event) => {
    let transfomedGroupedData = groupedTeamMembers.map((team) => {
      return team.team === event.currentTarget.id
        ? { ...team, collapse: !team.collapse }
        : team;
    });

    setGroupedData(transfomedGroupedData);
    setTeam(event.currentTarget.id);
  };
  console.log(groupedTeamMembers);

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Team Overview
        </h2>
        {groupedTeamMembers.map((team) => {
          return (
            <div key={team.team}>
              <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow mb-4">
                  <div
                    id={team.team}
                    className="flex justify-between items-center px-6 py-4 bg-gray-100 cursor-pointer "
                    onClick={handleTeamCollapse}
                  >
                    <span className="font-semibold text-lg text-gray-800">
                      {team.team}
                    </span>
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {team.members.length} Team Members
                    </span>
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {team.collapse === true ? (
                        <FontAwesomeIcon icon={faCaretUp} />
                      ) : (
                        <FontAwesomeIcon icon={faCaretDown} />
                      )}
                    </span>
                  </div>
                  {/* Members Data */}
                  <div
                    className={
                      team.collapse === true
                        ? "p-6 bg-white collapse"
                        : "collapse-open"
                    }
                  >
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {team.members.map((member) => {
                        return (
                          <li
                            key={member.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm"
                          >
                            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                              {member.fullName[0]}
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {member.fullName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {member.designation}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
