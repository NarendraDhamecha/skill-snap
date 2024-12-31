import React from "react";
import { Card, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

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
    description: "A unique resume design for creative fields like design and marketing.",
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
    description: "Perfect for students or fresh graduates looking for their first job.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
  {
    id: 5,
    title: "Student Resume",
    description: "Perfect for students or fresh graduates looking for their first job.",
    image: "https://via.placeholder.com/150",
    NavLink: "/skillsnap/auth/create-resume",
  },
];

const ResumeTemplates = () => {
  return (
    <div className="px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Browse Resume Templates</h1>
        <p className="text-lg text-gray-600 my-4">
          Select a template to start creating your resume.
        </p>
      </div>

      {/* Template Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            imgAlt={template.title}
            imgSrc={template.image}
            className="shadow-lg"
          >
            <h5 className="text-xl font-bold">{template.title}</h5>
            <p className="text-gray-600">{template.description}</p>
            <Button
              to={template.NavLink}
              as={NavLink}
              gradientDuoTone="cyanToBlue"
              className="w-full"
            >
              Start Creating
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
