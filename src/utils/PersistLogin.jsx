import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../hook/useAuth";

const PersistLogin = () => {
  const auth = useAuth();
  const queryClient = useQueryClient();

  return <div>PersistLogin</div>;
};

export default PersistLogin;
