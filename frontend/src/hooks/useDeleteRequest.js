import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const useDeleteRequest = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteData = async (id, onSuccess = () => {}, onError = () => {}) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.delete(`${endpoint}/${id}`);
      setData(response.data);
      onSuccess(response.data);
    } catch (error) {
      setError(error?.response?.data || null);
      onError(error?.response?.data);
      //   toast.error(error?.response?.data?.message || `Something went wrong!`);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, deleteData };
};

export default useDeleteRequest;
