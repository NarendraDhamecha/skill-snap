import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ResumeTemplates from "./pages/ResumeTemplates";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateResume from "./pages/CreateResume";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/authReducer";
import NonAuthBaseRoute from "./NonAuthBaseRoute";
import AuthBaseRoute from "./AuthBaseRoute";

// authentication function
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/skillsnap/login" />;
};

//Non Private Route Component
const NonPrivateRoute = ({ children }) => {
  return isAuthenticated() ? (
    <Navigate to="/skillsnap/auth/create-resume" />
  ) : (
    children
  );
};

const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(login({ token: localStorage.getItem("token") }));
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/skillsnap"
        element={
          <NonPrivateRoute>
            <NonAuthBaseRoute />
          </NonPrivateRoute>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="home" element={<Home />} />
        <Route path="resume-templates" element={<ResumeTemplates />} />
      </Route>
      <Route
        path="/skillsnap/auth"
        element={
          <PrivateRoute>
            <AuthBaseRoute />
          </PrivateRoute>
        }
      >
        <Route path="create-resume" element={<CreateResume />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default Routing;
