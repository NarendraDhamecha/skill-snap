import React from "react";
import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar fluid rounded border className="from-cyan-500 bg-gradient-to-r">
      <Navbar.Brand href="/skillsnap/home">
        <span className="text-xl font-semibold">Snap Skill</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button
          outline
          as={NavLink}
          gradientDuoTone="cyanToBlue"
          to="/login"
        >
          Login
        </Button>
        <Button
          as={NavLink}
          to="/register"
          gradientDuoTone="cyanToBlue"
        >
          Register
        </Button>
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/home">
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/resume-templates">
          Resume Templates
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
