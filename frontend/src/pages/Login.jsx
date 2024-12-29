import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { login } from "../redux/authReducer";
import { useDispatch } from "react-redux";
import { Card, Button, Label, TextInput } from "flowbite-react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", loginData);
      dispatch(login(response.data));
      navigate("/dashboard");
    } catch (error) {
      
    }
  };

  return (
    <div className="flex justify-center items-center" style={{ height: "75%" }}>
      <Card className="w-full max-w-md p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Sign In to Snap Skill
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" value="Email Address" />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full" gradientDuoTone="cyanToBlue">
            Log In
          </Button>
          <div className="text-right">
            <NavLink
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </NavLink>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
