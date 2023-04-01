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

export default function SignUp() {
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
          Sign Up
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
            id="name"
            label="Name"
            placeholder="Input your name"
            name="name"
            autoComplete="name"
            onChange={handleChange("name")}
            value={values.name}
            sx={{ backgroundColor: "#FAFAFC" }}
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
            Sign Up
          </Button>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Have an account?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}