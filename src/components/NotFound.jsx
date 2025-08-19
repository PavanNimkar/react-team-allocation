import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
        <h1 className="text-9xl font-bold text-purple-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 text-white font-medium rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
