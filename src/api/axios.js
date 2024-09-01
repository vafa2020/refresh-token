import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  withCredentials: true,
});
axiosPrivate.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosPrivate;
