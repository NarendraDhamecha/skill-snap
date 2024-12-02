import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseRoute from "./BaseRoute";
import Home from "./pages/Home";
import ResumeTemplates from "./pages/ResumeTemplates";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateResume from "./pages/CreateResume";

// Mock authentication function
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseRoute />}>
        <Route path="home" element={<Home />} />
        <Route path="resume-templates" element={<ResumeTemplates />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-resume" element={<CreateResume />} />
        <Route path="*" element={<h1>Coming soon...</h1>} />
      </Route>
    </Routes>
  );
};

export default Routing;
