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
import { Card, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Create Stunning Resumes with Snap Skill
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Build professional resumes in minutes using our easy-to-use templates
          and tools.
        </p>
        <div className="mt-6">
          <Button
            href="/skillsnap/resume-templates"
            className="mr-3"
            gradientDuoTone="cyanToBlue"
          >
            View Templates
          </Button>
          <Button
            href="/skillsnap/auth/create-resume"
            outline={true}
            gradientDuoTone="cyanToBlue"
          >
            Create a Resume
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-xl font-bold">Easy to Use</h2>
          <p className="text-sm text-gray-600 mt-2">
            Our platform is designed to make resume creation quick and easy for
            everyone.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Professional Templates</h2>
          <p className="text-sm text-gray-600 mt-2">
            Choose from a wide variety of customizable templates that suit your
            career.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Instant Download</h2>
          <p className="text-sm text-gray-600 mt-2">
            Once you’re done, download your resume instantly in PDF format.
          </p>
        </Card>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-blue-600">
          Ready to create your dream resume?
        </h2>
        <Button
          href="/skillsnap/auth/create-resume"
          gradientDuoTone="cyanToBlue"
          className="mt-4"
        >
          Start Creating
        </Button>
      </div>
    </div>
  );
};

export default Home;
