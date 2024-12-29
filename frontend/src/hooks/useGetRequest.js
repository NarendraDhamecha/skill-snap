import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const useGetRequest = (endpoint, enabled = true, callback = () => {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(endpoint);
      setData(response.data);
      callback(response.data, null);
    } catch (error) {
      setError(error?.response?.data || null);
      callback(null, error?.response?.data);
      //   toast.error(error?.response?.data?.message || `Something went wrong!`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [endpoint, enabled]);

  return { data, isLoading, error, fetchData };
};

export default useGetRequest;
