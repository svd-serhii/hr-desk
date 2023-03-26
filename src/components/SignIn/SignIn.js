import * as React from "react";
import styles from "./singin.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";
import { IconButton, InputAdornment } from "../InputAdornment.styled";

// import { useDispatch } from "react-redux";
// import { authOperations } from "redux/auth";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

export default function SignIn() {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        className={styles.formContainer}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" className={styles.title}>
          Welcome Back
        </Typography>
        <Typography component="h5" variant="h6">
          Welcome back! We're excited to see you here. Please log in to get started.
        </Typography>
        <Box
          component="img"
          sx={{
            height: 250,
            width: 250,
          }}
          alt="Log In image."
          src="../../images/ErrorDog.jpg"
        />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
              <Link href="#" variant="body2">
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
