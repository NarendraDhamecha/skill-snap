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
            to="/skillsnap/resume-templates"
            className="mb-3"
            as={NavLink}
            gradientDuoTone="cyanToBlue"
          >
            View Templates
          </Button>
          <Button
            outline={true}
            as={NavLink}
            to="/skillsnap/auth/create-resume"
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
      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold text-blue-600">
          Ready to create your dream resume?
        </h2>
        <Button
          to="/skillsnap/auth/create-resume"
          gradientDuoTone="cyanToBlue"
          className="mt-4"
          as={NavLink}
        >
          Start Creating
        </Button>
      </div>
    </div>
  );
};

export default Home;
