import { useContext } from "react";
import { AuthDispatchContext } from "../context/AuthProvider";

const useDispatchAuth = () => {
  return useContext(AuthDispatchContext);
};

export default useDispatchAuth;
