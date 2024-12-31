import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer";
import { useDispatch } from "react-redux";
import { Card, Button, Label, TextInput, Spinner } from "flowbite-react";
import usePostRequest from "../hooks/usePostRequest";
import { toast } from "react-toastify";
import PasswordInput from "../components/PasswordInput";
import { ENDPOINTS } from "../constant/_constant";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postData, isLoading } = usePostRequest(ENDPOINTS.LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSuccess = (response) => {
    dispatch(login(response));
    navigate("/dashboard");
  };

  const onError = (error) => {
    toast.error(error.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(loginData, onSuccess, onError);
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
          <PasswordInput value={loginData.password} onChange={handleChange} />
          <Button
            type="submit"
            className="w-full"
            gradientDuoTone="cyanToBlue"
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "Log In"}
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
