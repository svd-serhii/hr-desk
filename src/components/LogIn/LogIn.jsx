import { Box, Button, CardMedia, Container, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";
import { ButtonCustom, IconButton, InputAdornment } from "./LogIn.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from "../../store/slice/userSlice";
import { toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      console.log(user);
      setLoading(false);
      toast.success("You are login");
      navigate("/hr");
    } catch (error) {
      toast.error("something went wrong");
    }

    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            Welcome Back
          </Typography>
          <Typography component="span" sx={{ textAlign: "center" }}>
            Welcome back! We're excited to see you here. Please log in to get started.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2.5 }}>
            <Divider />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Work Email"
              placeholder="yourname@movadex.com"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={email}
              sx={{ backgroundColor: "#FAFAFC" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={password}
              sx={{ backgroundColor: "#FAFAFC" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <ButtonCustom type="submit">Log In</ButtonCustom>
            <Grid container sx={{ justifyContent: "space-between", mr: 1 }}>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/restore" variant="body2">
                  {"Forgot?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
}
