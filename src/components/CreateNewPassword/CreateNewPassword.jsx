import { Box, Container, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";
import { ButtonCustom, IconButton, InputAdornment } from "../LogIn/LogIn.styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { updatePassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import { setUser } from "../../store/slice/userSlice";
// import { toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

export default function CreateNewPassword() {
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

    navigate("/login");

    // const user = auth.currentUser;
    // const newPassword = password;
    // await updatePassword(user, newPassword)
    //   .then(() => {
    //     toast.success("Update successful");
    //     navigate("/login");
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     toast.error("An error ocurred");
    //   });
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
            Create a new password
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
              label="New password"
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

            <ButtonCustom type="submit">Confirm</ButtonCustom>
            <Grid container sx={{ justifyContent: "center", mr: 1 }}>
              <Grid item>
                <Link href="/restore" variant="body2">
                  {"Cancel?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
}
