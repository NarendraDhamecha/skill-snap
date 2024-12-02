import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        {/* Website Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Snap Skill
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/home">
            Home
          </Button>

          <Button component={NavLink} color="inherit" to="/resume-templates">
            Resume Templates
          </Button>
        </Box>

        {/* Login and Register Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={NavLink}
            to="/login"
            variant="outlined"
            color="inherit"
          >
            Login
          </Button>
          <Button
            component={NavLink}
            to="/register"
            variant="contained"
            color="inherit"
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
