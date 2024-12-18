import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import ResumeMiddle from "../components/ResumeMiddle";

const CreateResume = () => {
  useEffect(() => {
    axiosInstance
      .get("/getData")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex h-screen">
      <LeftBar />
      <ResumeMiddle />
      <RightBar />
    </div>
  );
};

export default CreateResume;
