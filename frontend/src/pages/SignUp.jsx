import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Label, TextInput, Button } from "flowbite-react";
import axiosInstance from "../api/axiosInstance";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/register", signUpData);
      navigate("/login");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="flex justify-center items-center" style={{height: '80%'}}>
      <Card className="w-full max-w-md p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Sign Up for Snap Skill
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" value="Full Name" />
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={signUpData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email Address" />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={signUpData.email}
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
              value={signUpData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full" gradientDuoTone="cyanToBlue">
            Sign Up
          </Button>
          <div className="text-right">
            <NavLink
              to="/skillsnap/login"
              className="text-sm text-blue-600 hover:underline"
            >
              Already have an account? Sign In
            </NavLink>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
