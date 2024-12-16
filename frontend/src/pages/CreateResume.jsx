import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const CreateResume = () => {
  useEffect(() => {
    axiosInstance
      .get("/getData")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between">
      <LeftBar />
      <div>Middle</div>
      <RightBar />
    </div>
  );
};

export default CreateResume;
