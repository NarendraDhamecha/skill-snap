// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, CardMedia, Grid2 } from '@mui/material';
// import { NavLink } from 'react-router-dom';

// const templates = [
//   {
//     id: 1,
//     title: 'Professional Resume',
//     description: 'A modern resume layout suitable for job professionals.',
//     image: 'https://via.placeholder.com/150',
//     NavLink: '/skillsnap/auth/create-resume',
//   },
//   {
//     id: 2,
//     title: 'Creative Resume',
//     description: 'A unique resume design for creative fields like design and marketing.',
//     image: 'https://via.placeholder.com/150',
//     NavLink: '/skillsnap/auth/create-resume',
//   },
//   {
//     id: 3,
//     title: 'Simple Resume',
//     description: 'A minimalistic design for those who prefer simplicity.',
//     image: 'https://via.placeholder.com/150',
//     NavLink: '/skillsnap/auth/create-resume',
//   },
//   {
//     id: 4,
//     title: 'Student Resume',
//     description: 'Perfect for students or fresh graduates looking for their first job.',
//     image: 'https://via.placeholder.com/150',
//     NavLink: '/skillsnap/auth/create-resume',
//   },
// ];

// const ResumeTemplates = () => {
//   return (
//     <Box sx={{ padding: 5 }}>
//       {/* Header Section */}
//       <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
//         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
//           Browse Resume Templates
//         </Typography>
//         <Typography variant="h6" sx={{ marginTop: 2, color: 'gray' }}>
//           Select a template to start creating your resume.
//         </Typography>
//       </Box>

//       {/* Template Cards */}
//       <Grid2 container spacing={4} justifyContent="center">
//         {templates.map((template) => (
//           <Grid2 item xs={12} sm={6} md={3} key={template.id}>
//             <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
//               <CardMedia
//                 component="img"
//                 alt={template.title}
//                 height="200"
//                 image={template.image}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
//                   {template.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
//                   {template.description}
//                 </Typography>
//               </CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
//                 <Button
//                   component={NavLink}
//                   to={template.NavLink}
//                   variant="contained"
//                   color="primary"
//                   sx={{ width: '80%' }}
//                 >
//                   Start Creating
//                 </Button>
//               </Box>
//             </Card>
//           </Grid2>
//         ))}
//       </Grid2>
//     </Box>
//   );
// };

// export default ResumeTemplates;
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/resumeTemplates.css";

const templates = [
  {
    id: 1,
    title: "Professional Resume",
    description: "A modern resume layout suitable for job professionals.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
  {
    id: 2,
    title: "Creative Resume",
    description:
      "A unique resume design for creative fields like design and marketing.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
  {
    id: 3,
    title: "Simple Resume",
    description: "A minimalistic design for those who prefer simplicity.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
  {
    id: 4,
    title: "Student Resume",
    description:
      "Perfect for students or fresh graduates looking for their first job.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
];

const ResumeTemplates = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Browse Resume Templates</h1>
        <p>Select a template to start creating your resume.</p>
      </div>

      {/* Template Cards */}
      <div className="templates">
        {templates.map((template) => (
          <div className="card" key={template.id}>
            <img src={template.image} alt={template.title} />
            <div className="card-content">
              <h2 className="card-title">{template.title}</h2>
              <p className="card-description">{template.description}</p>
            </div>
            <div className="card-action">
              <NavLink to={template.NavLink}>Start Creating</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
