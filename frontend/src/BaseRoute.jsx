import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const BaseRoute = () => {
  return (
    <div >
       <Navbar/>
      <Outlet />
    </div>
  );
};

export default BaseRoute;
