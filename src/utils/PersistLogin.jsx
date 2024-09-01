import useAuth from "../hook/useAuth";
import useRefreshToken from "../hook/useRefreshToken";
import { useEffect } from "react";
import axiosPrivate from "../api/axios";
import { Outlet } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const PersistLogin = () => {
  const auth = useAuth();
  const refresh = useRefreshToken();
  useEffect(() => {
    axiosPrivate.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("token"); // get stored access token
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`; // set in header
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        console.log("originalRequest", originalRequest);
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = localStorage.getItem("refreshToken");
          if (refreshToken) {
            try {
              await refresh.refetch();
              originalRequest.headers.Authorization = `Bearer ${auth.accessToken}`;
              return axiosPrivate(originalRequest); //recall Api with new token
            } catch (error) {
              console.log("error_refresh_failure", error);
              // Handle token refresh failure
              // mostly logout the user and re-authenticate by login again
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      {refresh.isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
