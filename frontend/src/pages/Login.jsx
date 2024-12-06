import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { login } from "../redux/authReducer";
import { useDispatch } from "react-redux";
import "../css/login.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", loginData);
      dispatch(login(response.data));
      navigate("/skillsnap/auth/create-resume");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    // <Container component="main" maxWidth="xs">
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       marginTop: 8,
    //     }}
    //   >
    //     <Typography variant="h5">Sign In to Snap Skill</Typography>

    //     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //       <TextField
    //         label="Email Address"
    //         variant="outlined"
    //         fullWidth
    //         required
    //         name="email"
    //         value={loginData?.email}
    //         onChange={handleChange}
    //         sx={{ marginBottom: 2 }}
    //       />
    //       <TextField
    //         label="Password"
    //         type="password"
    //         variant="outlined"
    //         fullWidth
    //         required
    //         name="password"
    //         value={loginData?.password}
    //         onChange={handleChange}
    //         sx={{ marginBottom: 2 }}
    //       />
    //       <Button type="submit" variant="contained" color="primary" fullWidth>
    //         Log In
    //       </Button>

    //       <Grid2 container justifyContent="flex-end" sx={{ marginTop: 2 }}>
    //         <Grid2 item>
    //           <NavLink to="/skillsnap/forgot-password" style={{ textDecoration: "none" }}>
    //             <Typography variant="body2">Forgot password?</Typography>
    //           </NavLink>
    //         </Grid2>
    //       </Grid2>
    //     </Box>
    //   </Box>
    // </Container>
    <div>
      <h5>Sign In to Snap Skill</h5>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={loginData?.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={loginData?.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" content="" />
      </form>
    </div>
  );
};

export default Login;
