import axios from "axios";
import wireAzaEnv from "@/config/env";

const api = axios.create({
  baseURL: wireAzaEnv.backendUrl,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: better error logging
api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("Backend API Error:", {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });
    return Promise.reject(error);
  }
);

export default api;
