import { useQuery } from "@tanstack/react-query";
import useDispatchAuth from "./useDispatchAuth";
import axiosPrivate from "../api/axios";

const useRefreshToken = () => {
  const setAuth = useDispatchAuth();
  const refreshTokenQ = useQuery({
    queryKey: ["refresh-Token"],
    queryFn: axiosPrivate.get("/auth/refresh").then(({ data }) => {
      console.log("data-refresh", data);
      setAuth(data);
      localStorage.setItem("token", JSON.stringify(data.AccessToken));
    }),
  });
  return refreshTokenQ;
};

export default useRefreshToken;
