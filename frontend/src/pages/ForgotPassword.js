import { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/forgot-password", { email });
      toast.success(response.data.message);
      setEmail("");
      navigate("/login");
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h5 className="text-xl font-bold text-center mb-6 text-gray-800">
        Forgot Your Password?
      </h5>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email" value="Email Address" />
          <TextInput
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2"
          />
        </div>
        <Button type="submit" className="w-full" gradientDuoTone="cyanToBlue">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
