import React from "react";
import {
  Button,
  Typography,
  Container,
  Grid2,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ marginBottom: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Create Stunning Resumes with Snap Skill
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, color: "gray" }}>
          Build professional resumes in minutes using our easy-to-use templates
          and tools.
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            component={Link}
            to="/skillsnap/resume-templates"
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
          >
            View Templates
          </Button>
          <Button
            component={Link}
            to="/skillsnap/auth/create-resume"
            variant="outlined"
            color="primary"
          >
            Create a Resume
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Easy to Use
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Our platform is designed to make resume creation quick and easy
                for everyone.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Professional Templates
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Choose from a wide variety of customizable templates that suit
                your career.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Instant Download
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Once you’re done, download your resume instantly in PDF format.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: "center", marginTop: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Ready to create your dream resume?
        </Typography>
        <Button
          component={Link}
          to="/skillsnap/auth/create-resume"
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
        >
          Start Creating
        </Button>
      </Box>

      {/* Footer Section */}
      {/* <Box sx={{ textAlign: "center", marginTop: 6, paddingBottom: 4 }}>
        <Typography variant="body2" color="text.secondary">
          &copy; 2024 Snap Skill. All rights reserved.
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <Link
            to="/privacy-policy"
            style={{ textDecoration: "none", color: "gray", marginRight: 20 }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Terms of Service
          </Link>
        </Box>
      </Box> */}
    </Container>
  );
};

export default Home;
