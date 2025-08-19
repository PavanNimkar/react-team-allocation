import React, { useState } from "react";
import female from "../assets/images/female.png";
import male from "../assets/images/male.png";

export default function Employees({
  selectedTeam,
  employees,
  handleSeletedTeam,
  handleEmployeeClick,
}) {
  return (
    <div className="container mx-auto p-6">
      <div className="container mx-auto p-6 flex justify-center">
        <select
          className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          name="teamSelector"
          id="teamChoice"
          value={selectedTeam}
          onChange={handleSeletedTeam}
        >
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">Team Members</h1>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {employees.map((employee) => (
          <div
            key={employee.id}
            id={employee.id}
            className={
              employee.teamName === selectedTeam
                ? "border-black border-solid border-4 bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                : "bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            }
            onClick={handleEmployeeClick}
          >
            <div className=" flex flex-col items-center p-6 cursor-pointer">
              <img
                src={employee.gender === "male" ? male : female}
                alt={`${employee.fullName} Profile`}
                className="w-28 h-28 rounded-full border-4 border-gray-200 object-cover mb-4"
              />

              <h2 className="text-lg font-semibold text-gray-800">
                {employee.fullName}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {employee.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
