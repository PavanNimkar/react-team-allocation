import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Links */}
          <div className="space-x-6">
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-yellow-200 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/group-team-members"
              className="text-white text-lg font-medium hover:text-yellow-200 transition duration-200"
            >
              Team Members
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
