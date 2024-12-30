import axios from "axios";
const BASEURL = "https://skill-snap.onrender.com";

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});

// Request interceptor to attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage or cookies (assuming it's stored there)
    const token = localStorage.getItem("token"); // Example: Replace with your token storage method

    if (token) {
      // Attach token to Authorization header for authenticated requests
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response errors, like expired token, or 401 errors
    if (error.response && error.response.status === 401) {
      // Optionally: Redirect to login page or handle token expiration
      console.log("Session expired or unauthorized. Please log in again.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
