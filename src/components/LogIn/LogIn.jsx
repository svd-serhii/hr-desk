import { Box, Button, CardMedia, Container, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";
import { IconButton, InputAdornment } from "../SignIn.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authOperations } from "redux/auth";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

export default function LogIn() {
  const [values, setValues] = useState(initialState);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(initialState);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
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
        <CardMedia
          component="img"
          sx={{ mt: 2.5, height: 250, width: 250 }}
          title="Log In image."
          image="/src/images/Illustrations.jpg"
        />
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
            onChange={handleChange("email")}
            value={values.email}
            sx={{ backgroundColor: "#FAFAFC" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            onChange={handleChange("password")}
            value={values.password}
            sx={{ backgroundColor: "#FAFAFC" }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: "#28293D" }}>
            Log In
          </Button>
          <Grid container sx={{ justifyContent: "space-between", mr: 1 }}>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account?"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/recover" variant="body2">
                {"Forgot?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

// SignIn.propType = {
//   handleSubmit: PropTypes.func.required,
//   handleChange: PropTypes.func.required,
//   email: PropTypes.string.required,
//   password: PropTypes.string.required,
// };
