import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  withCredentials: true,
});

export default axiosPrivate;
