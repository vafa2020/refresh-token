import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../api/axios";

// /user/getUsers
const Product = () => {
  const userListQ = useQuery({
    queryKey: ["user-list"],
    queryFn: axiosPrivate.get("/auth/refresh").then(({ data }) => {
      console.log("user-list", data);
    }),
  });
  console.log("userListQ", userListQ.data);
  return <div>Product</div>;
};

export default Product;
