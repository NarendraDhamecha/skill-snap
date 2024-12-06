// import React from "react";
// import {
//   Button,
//   Typography,
//   Container,
//   Grid2,
//   Box,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return (
//     <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
//       {/* Header Section */}
//       <Box textAlign="center" sx={{ marginBottom: 4 }}>
//         <Typography
//           variant="h3"
//           component="h1"
//           sx={{ fontWeight: "bold", color: "#1976d2" }}
//         >
//           Create Stunning Resumes with Snap Skill
//         </Typography>
//         <Typography variant="h6" sx={{ marginTop: 2, color: "gray" }}>
//           Build professional resumes in minutes using our easy-to-use templates
//           and tools.
//         </Typography>
//         <Box sx={{ marginTop: 3 }}>
//           <Button
//             component={NavLink}
//             to="/skillsnap/resume-templates"
//             variant="contained"
//             color="primary"
//             sx={{ marginRight: 2 }}
//           >
//             View Templates
//           </Button>
//           <Button
//             component={NavLink}
//             to="/skillsnap/auth/create-resume"
//             variant="outlined"
//             color="primary"
//           >
//             Create a Resume
//           </Button>
//         </Box>
//       </Box>

//       {/* Features Section */}
//       <Grid2 container spacing={4} justifyContent="center">
//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card elevation={3}>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Easy to Use
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ marginTop: 1 }}
//               >
//                 Our platform is designed to make resume creation quick and easy
//                 for everyone.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid2>
//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card elevation={3}>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Professional Templates
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ marginTop: 1 }}
//               >
//                 Choose from a wide variety of customizable templates that suit
//                 your career.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid2>
//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card elevation={3}>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Instant Download
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ marginTop: 1 }}
//               >
//                 Once you’re done, download your resume instantly in PDF format.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid2>
//       </Grid2>

//       {/* Call to Action Section */}
//       <Box sx={{ textAlign: "center", marginTop: 6 }}>
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{ fontWeight: "bold", color: "#1976d2" }}
//         >
//           Ready to create your dream resume?
//         </Typography>
//         <Button
//           component={NavLink}
//           to="/skillsnap/auth/create-resume"
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//         >
//           Start Creating
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Home;
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="header-title">
          Create Stunning Resumes with Snap Skill
        </h1>
        <p className="header-description">
          Build professional resumes in minutes using our easy-to-use templates
          and tools.
        </p>
        <div className="header-buttons">
          <NavLink to="/skillsnap/resume-templates">View Templates</NavLink>
          <NavLink to="/skillsnap/auth/create-resume">Create a Resume</NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h2>Easy to Use</h2>
          <p>
            Our platform is designed to make resume creation quick and easy for
            everyone.
          </p>
        </div>
        <div className="feature-card">
          <h2>Professional Templates</h2>
          <p>
            Choose from a wide variety of customizable templates that suit your
            career.
          </p>
        </div>
        <div className="feature-card">
          <h2>Instant Download</h2>
          <p>Once you’re done, download your resume instantly in PDF format.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action">
        <h2>Ready to create your dream resume?</h2>
        <NavLink to="/skillsnap/auth/create-resume">Start Creating</NavLink>
      </div>
    </div>
  );
};

export default Home;
