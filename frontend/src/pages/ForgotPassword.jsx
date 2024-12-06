import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset for:", email);
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
    //     <Typography variant="h5">Forgot Your Password?</Typography>

    //     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //       <TextField
    //         label="Email Address"
    //         variant="outlined"
    //         fullWidth
    //         required
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         sx={{ marginBottom: 2 }}
    //       />
    //       <Button type="submit" variant="contained" color="primary" fullWidth>
    //         Reset Password
    //       </Button>

    //       <Grid2 container justifyContent="flex-end" sx={{ marginTop: 2 }}>
    //         <Grid2 item>
    //           <Link to="/skillsnap/login" style={{ textDecoration: "none" }}>
    //             <Typography variant="body2">
    //               Remembered your password? Sign In
    //             </Typography>
    //           </Link>
    //         </Grid2>
    //       </Grid2>
    //     </Box>
    //   </Box>
    // </Container>
    <div>
      <h5>Forgot Your Password?</h5>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" content="Reset Password" />
      </form>
    </div>
  );
};

export default ForgotPassword;
