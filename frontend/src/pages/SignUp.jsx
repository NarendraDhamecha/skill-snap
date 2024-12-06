import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Input from "../UI/Input";
import Button from "../UI/Button";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/register", signUpData);
      navigate("/skillsnap/login");
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
    //     <Typography variant="h5">Sign Up for Snap Skill</Typography>

    //     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //       <TextField
    //         label="Full Name"
    //         variant="outlined"
    //         fullWidth
    //         required
    //         name="name"
    //         value={signUpData?.name}
    //         onChange={handleChange}
    //         sx={{ marginBottom: 2 }}
    //       />
    //       <TextField
    //         label="Email Address"
    //         variant="outlined"
    //         fullWidth
    //         required
    //         name="email"
    //         value={signUpData?.email}
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
    //         value={signUpData?.password}
    //         onChange={handleChange}
    //         sx={{ marginBottom: 2 }}
    //       />

    //       <Button type="submit" variant="contained" color="primary" fullWidth>
    //         Sign Up
    //       </Button>

    //       <Grid2 container justifyContent="flex-end" sx={{ marginTop: 2 }}>
    //         <Grid2 item>
    //           <NavLink to="/skillsnap/login" style={{ textDecoration: "none" }}>
    //             <Typography variant="body2">
    //               Already have an account? Sign In
    //             </Typography>
    //           </NavLink>
    //         </Grid2>
    //       </Grid2>
    //     </Box>
    //   </Box>
    // </Container>
    <div>
      <h5>Sign Up for Snap Skill</h5>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="name"
          value={signUpData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={signUpData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={signUpData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" content="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
