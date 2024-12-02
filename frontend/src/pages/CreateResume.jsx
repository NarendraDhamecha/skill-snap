import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const CreateResume = () => {
  useEffect(() => {
    axiosInstance
      .get("/getData")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  
  return <h1>Create resume</h1>;
};

export default CreateResume;
