import { Box, Container, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";

import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
// import { setUser } from "../../store/slice/userSlice";
import { toast } from "react-toastify";
import { ButtonCustom } from "../LogIn/LogIn.styled";
import { Loader } from "../Loader/Loader";

export default function RestorePassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);

      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      navigate("/new-pass");
      const userCredentials = await sendPasswordResetEmail(auth, email);
      const user = userCredentials.user;
      toast.success("Password reset email sent!");

      setLoading(false);
    } catch (error) {}
  };

  return (
    <Container sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
      {loading ? (
        <Loader />
      ) : (
        <Box
          maxWidth={400}
          maxHeight={735}
          sx={{
            px: 2.5,
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 8,
            boxShadow: 1,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
            Restore Password
          </Typography>
          <Typography component="span" sx={{ textAlign: "center" }}>
            You will receive a secure link to reset your password and help you update your account
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2.5 }}>
            <Divider />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Input you email"
              placeholder="yourname@movadex.com"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={email}
              sx={{ backgroundColor: "#FAFAFC" }}
            />

            <ButtonCustom type="submit">Reset Password</ButtonCustom>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
}
