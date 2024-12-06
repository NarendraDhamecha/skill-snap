// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/authReducer";

// const Navbar = () => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
//       <Toolbar>
//         {/* Website Title */}
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Snap Skill
//         </Typography>

//         {/* Navigation Links */}
//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button color="inherit" component={NavLink} to="/skillsnap/home">
//             Home
//           </Button>

//           <Button component={NavLink} color="inherit" to="/skillsnap/resume-templates">
//             Resume Templates
//           </Button>
//         </Box>

//         {/* Conditional Buttons */}
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {isLoggedIn ? (
//             <Button variant="outlined" color="inherit" onClick={handleLogout}>
//               Logout
//             </Button>
//           ) : (
//             <>
//               <Button
//                 component={NavLink}
//                 to="/skillsnap/login"
//                 variant="outlined"
//                 color="inherit"
//               >
//                 Login
//               </Button>
//               <Button
//                 component={NavLink}
//                 to="/skillsnap/register"
//                 variant="contained"
//                 sx={{ backgroundColor: "#efefef", color: "#000" }}
//               >
//                 Register
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React from "react";
import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authReducer";

const CustomNavbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar fluid rounded className="bg-blue-600 sticky top-0 z-10">
      {/* Brand */}
      <Navbar.Brand href="/skillsnap/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Snap Skill
        </span>
      </Navbar.Brand>

      {/* Links */}
      <div className="flex md:order-2 gap-2">
        {isLoggedIn ? (
          <Button
            color="light"
            outline
            className="text-white border-white hover:bg-white hover:text-blue-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              color="light"
              outline
              className="text-white border-white hover:bg-white hover:text-blue-600"
              as={NavLink}
              to="/skillsnap/login"
            >
              Login
            </Button>
            <Button
              color="light"
              className="bg-white text-blue-600 hover:bg-gray-100"
              as={NavLink}
              to="/skillsnap/register"
            >
              Register
            </Button>
          </>
        )}
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/skillsnap/home" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link
          as={NavLink}
          to="/skillsnap/resume-templates"
          className="text-white"
        >
          Resume Templates
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
