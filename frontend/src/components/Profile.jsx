import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    navigate("/skillsnap/login");
  };

  return (
    <>
      <Avatar
        onClick={handleAvatarClick}
        sx={{ cursor: "pointer", bgcolor: "#f48fb1" }} // Background color for avatar
      >
        ND
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem disabled>
          <Typography variant="body1">Hello</Typography>
        </MenuItem>
        <MenuItem disabled>
          <Typography variant="body2">Narendra Dhamecha</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography variant="body2">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
