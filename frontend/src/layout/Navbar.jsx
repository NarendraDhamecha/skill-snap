import React from "react";
import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar fluid rounded border>
      <Navbar.Brand href="/skillsnap/home">
        <span className="text-xl font-semibold">Snap Skill</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button
          outline
          as={NavLink}
          gradientDuoTone="cyanToBlue"
          to="/skillsnap/login"
        >
          Login
        </Button>
        <Button
          as={NavLink}
          to="/skillsnap/register"
          gradientDuoTone="cyanToBlue"
        >
          Register
        </Button>
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/skillsnap/home">
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/skillsnap/resume-templates">
          Resume Templates
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
