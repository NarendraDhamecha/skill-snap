import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: 'Professional Resume',
    description: 'A modern resume layout suitable for job professionals.',
    image: 'https://via.placeholder.com/150',
    link: '/create-resume',
  },
  {
    id: 2,
    title: 'Creative Resume',
    description: 'A unique resume design for creative fields like design and marketing.',
    image: 'https://via.placeholder.com/150',
    link: '/create-resume',
  },
  {
    id: 3,
    title: 'Simple Resume',
    description: 'A minimalistic design for those who prefer simplicity.',
    image: 'https://via.placeholder.com/150',
    link: '/create-resume',
  },
  {
    id: 4,
    title: 'Student Resume',
    description: 'Perfect for students or fresh graduates looking for their first job.',
    image: 'https://via.placeholder.com/150',
    link: '/create-resume',
  },
];

const ResumeTemplates = () => {
  return (
    <Box sx={{ padding: 5 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Browse Resume Templates
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, color: 'gray' }}>
          Select a template to start creating your resume.
        </Typography>
      </Box>

      {/* Template Cards */}
      <Grid container spacing={4} justifyContent="center">
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={3} key={template.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                alt={template.title}
                height="200"
                image={template.image}
              />
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                  {template.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  {template.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
                <Button
                  component={Link}
                  to={template.link}
                  variant="contained"
                  color="primary"
                  sx={{ width: '80%' }}
                >
                  Start Creating
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResumeTemplates;
