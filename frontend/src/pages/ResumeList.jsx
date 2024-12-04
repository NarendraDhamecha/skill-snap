import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Profile from "../components/Profile";
import RoundedSquareIcon from "../components/RoundedSquareIcon";
import "../css/resumeList.css";
import Card from "../components/Card";

const DUMMY_DATA = [
  { id: 2, isCreate: false, title: "narendra1" },
  { id: 3, isCreate: false, title: "narendra2" },
  { id: 4, isCreate: false, title: "narendra3" },
  { id: 5, isCreate: false, title: "narendra4" },
];

const ResumeList = () => {
  return (
    <div className="snapskill-resume-list-container">
      <div className="snapskill-resume-list-header">
        <RoundedSquareIcon />
        <Profile />
      </div>
      <div className="snapskill-resume-list">
        <Card isCreate={true} title="Create New Resume" />
        {DUMMY_DATA.map((resume) => (
          <Card
            key={resume.id}
            isCreate={resume.isCreate}
            title={resume.title}
          />
        ))}
      </div>
    </div>
    // <Box
    //   sx={{
    //     backgroundColor: "#121212", // Dark background
    //     height: "100vh",
    //     padding: 4,
    //   }}
    // >
    //   <Profile/>
    //   <RoundedSquareIcon/>
    //   <Grid2 container spacing={4}>
    //     {/* Create New Resume */}
    //     <Grid2 item xs={12} sm={6} md={4}>
    //       <Card
    //         sx={{
    //           backgroundColor: "#1e1e1e", // Card background
    //           color: "#fff",
    //           height: 200,
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <AddCircleOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />
    //         <CardContent>
    //           <Typography variant="h6" textAlign="center">
    //             Create New Resume
    //           </Typography>
    //           <Typography variant="body2" textAlign="center">
    //             Start from scratch
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid2>

    //     {/* Import from External Sources */}
    //     <Grid2 item xs={12} sm={6} md={4}>
    //       <Card
    //         sx={{
    //           backgroundColor: "#1e1e1e", // Card background
    //           color: "#fff",
    //           height: 200,
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <ImportExportIcon sx={{ fontSize: 50, color: "#fff" }} />
    //         <CardContent>
    //           <Typography variant="h6" textAlign="center">
    //             Import from External Sources
    //           </Typography>
    //           <Typography variant="body2" textAlign="center">
    //             LinkedIn, JSON Resume, Snapit
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid2>

    //     {/* Existing Resume */}
    //     <Grid2 item xs={12} sm={6} md={4}>
    //       <Card
    //         sx={{
    //           backgroundColor: "#1e1e1e", // Card background
    //           color: "#fff",
    //           height: 200,
    //           position: "relative",
    //         }}
    //       >
    //         <CardMedia
    //           component="img"
    //           height="120"
    //           image="https://via.placeholder.com/300" // Replace with your image URL
    //           alt="Resume Thumbnail"
    //         />
    //         <CardContent>
    //           <Typography variant="h6">narendrahamecha9</Typography>
    //           <Typography variant="body2">Last updated 3 minutes ago</Typography>
    //         </CardContent>
    //         <IconButton
    //           sx={{
    //             position: "absolute",
    //             top: 10,
    //             right: 10,
    //             color: "#fff",
    //           }}
    //         >
    //           <MoreVertIcon />
    //         </IconButton>
    //       </Card>
    //     </Grid2>
    //   </Grid2>
    // </Box>
  );
};

export default ResumeList;
