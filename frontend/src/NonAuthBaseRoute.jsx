import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const NonAuthBaseRoute = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NonAuthBaseRoute;
