import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ResumeList = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark background
        height: "100vh",
        padding: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Create New Resume */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e", // Card background
              color: "#fff",
              height: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Create New Resume
              </Typography>
              <Typography variant="body2" textAlign="center">
                Start from scratch
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Import from External Sources */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e", // Card background
              color: "#fff",
              height: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImportExportIcon sx={{ fontSize: 50, color: "#fff" }} />
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Import from External Sources
              </Typography>
              <Typography variant="body2" textAlign="center">
                LinkedIn, JSON Resume, Snapit
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Existing Resume */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e", // Card background
              color: "#fff",
              height: 200,
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              height="120"
              image="https://via.placeholder.com/300" // Replace with your image URL
              alt="Resume Thumbnail"
            />
            <CardContent>
              <Typography variant="h6">narendrahamecha9</Typography>
              <Typography variant="body2">Last updated 3 minutes ago</Typography>
            </CardContent>
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fff",
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeList;
