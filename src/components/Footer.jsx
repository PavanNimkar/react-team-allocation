import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Team Allocation App. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 text-xl">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pavan-nimkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/PavanNimkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
