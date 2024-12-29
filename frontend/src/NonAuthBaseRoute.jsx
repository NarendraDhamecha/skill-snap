import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";

const NonAuthBaseRoute = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NonAuthBaseRoute;
