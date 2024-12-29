import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-400"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
