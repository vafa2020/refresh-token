import { Box, Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import useAuth from "../../hook/useAuth";
import useDispatchAuth from "../../hook/useDispatchAuth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axios";
//==>/auth/signup
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const setAuth = useDispatchAuth();
  const loginQ = useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => axiosPrivate.post("/auth/signin", data).then(({ data }) => data),
    onSuccess: (data) => {
      console.log("data_login", data);

      setAuth(data);
    },
    onError: (error) => {
      console.log("error_login", error);
    },
  });
  const user = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    if (auth.UserId > 0) {
      navigate("/");
    }
  }, [auth.UserId]);
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ width: "500px" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" size="small" inputRef={user} />
          <TextField id="outlined-basic" label="Password" variant="outlined" size="small" inputRef={password} />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e) => {
              e.preventDefault();
              loginQ.mutateAsync({
                Username: user?.current?.value,
                Password: password?.current?.value,
              });
            }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;
