import { Box, Button, Container, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";

import { IconButton, InputAdornment, ButtonCustom } from "../LogIn/LogIn.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from "../../store/slice/userSlice";
import { toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: name,
      });
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      console.log(user);
      setLoading(false);
      toast.success("You are registered");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed");
    }
    setName("");
    setEmail("");
    setPassword("");
    setError(null);
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
            Sign Up
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2.5 }}>
            <Divider />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              placeholder="Input your name"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              value={name}
              sx={{ backgroundColor: "#FAFAFC" }}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
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

            <ButtonCustom type="submit">Sign Up</ButtonCustom>
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
