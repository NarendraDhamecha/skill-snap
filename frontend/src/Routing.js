import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ResumeTemplates from "./pages/ResumeTemplates";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
// import CreateResume from "./pages/CreateResume";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import { login } from "./redux/authReducer";
import NonAuthBaseRoute from "./NonAuthBaseRoute";
import AuthBaseRoute from "./AuthBaseRoute";
import ResumeList from "./pages/ResumeList";
// import axiosInstance from "./api/axiosInstance";
import CreateResume from "./pages/CreateResume";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./NotFound";
import useGetRequest from "./hooks/useGetRequest";
import { toast } from "react-toastify";

// authentication function
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

//Non Private Route Component
const NonPrivateRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};

const Routing = () => {
  const dispatch = useDispatch();
  const isAuth = isAuthenticated();

  const verifyToken = (response, error) => {
    if (error) {
      let errorMsg = error?.message || "";
      if (error?.message === "jwt expired") {
        errorMsg = "Session expired";
      }
      toast.error(errorMsg);
      localStorage.removeItem("token");
      return;
    }

    dispatch(
      login({
        token: localStorage.getItem("token"),
        user: response.user,
      })
    );
  };

  useGetRequest("/verify-user", isAuth, verifyToken);

  return (
    <Routes>
      <Route path="/" element={<NonAuthBaseRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="home" element={<Home />} />
        <Route path="resume-templates" element={<ResumeTemplates />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AuthBaseRoute />
          </PrivateRoute>
        }
      >
        <Route path="/:username/:slug/build" element={<CreateResume />} />
        <Route path="/dashboard" element={<ResumeList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
