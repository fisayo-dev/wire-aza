import axios from "axios";
import wireAzaEnv from "./env";

const wireAzaApi = axios.create({
  baseURL: wireAzaEnv.backendUrl,
  withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   return config;
// });

wireAzaApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("User is not authenticated");
    }
    return Promise.reject(error);
  }
);

export default wireAzaApi;
