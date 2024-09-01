import { useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import axiosPrivate from "../api/axios";

export const AuthContext = createContext({});
export const AuthDispatchContext = createContext({});
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const queryClient = useQueryClient();
  useEffect(() => {
    axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          setAuth({});
          await queryClient.invalidateQueries({ queryKey: ["refresh-Token"] });

          axiosPrivate.defaults.headers.common["Authorization"] = `Bearer ${auth?.AccessToken}`;
          // return customFetch(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={setAuth}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
