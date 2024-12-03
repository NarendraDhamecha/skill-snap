import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const NonAuthBaseRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NonAuthBaseRoute;
