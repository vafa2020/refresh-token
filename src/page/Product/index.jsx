import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../api/axios";

const Product = () => {
  const userListQ = useQuery({
    queryKey: ["user-list"],
    queryFn: axiosPrivate.get("/user/getUsers").then(({ data }) => {
      console.log("user-list", data);
      return data;
    }),
  });
  console.log("userListQ", userListQ.data);
  return <div>Product</div>;
};

export default Product;
