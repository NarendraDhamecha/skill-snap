import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authReducer";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Website Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Snap Skill
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/skillsnap/home">
            Home
          </Button>

          <Button component={NavLink} color="inherit" to="/skillsnap/resume-templates">
            Resume Templates
          </Button>
        </Box>

        {/* Conditional Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {isLoggedIn ? (
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={NavLink}
                to="/skillsnap/login"
                variant="outlined"
                color="inherit"
              >
                Login
              </Button>
              <Button
                component={NavLink}
                to="/skillsnap/register"
                variant="contained"
                sx={{ backgroundColor: "#efefef", color: "#000" }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
