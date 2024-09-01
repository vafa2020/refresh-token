import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Register from "../page/Register";
import Product from "../page/Product";
import Login from "../page/Login";
// const Home = lazy(() => import("../page/Home"));
// const Login = lazy(() => import("../page/Login"));
// const Register = lazy(() => import("../page/Register"));
// const Product = lazy(() => import("../page/Product"));
const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default RouterComponent;
