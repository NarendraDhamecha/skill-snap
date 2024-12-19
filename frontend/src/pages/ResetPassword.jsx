import { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await axiosInstance.post(`/reset-password/${token}`, {
        newPassword,
      });
      toast.success(response.data.message);
      setNewPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h5 className="text-xl font-bold text-center mb-6 text-gray-800">
        Reset Your Password
      </h5>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="new-password" value="New Password" />
          <TextInput
            id="new-password"
            type="password"
            placeholder="Enter new password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="confirm-password" value="Confirm Password" />
          <TextInput
            id="confirm-password"
            type="password"
            placeholder="Confirm new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPassword;
