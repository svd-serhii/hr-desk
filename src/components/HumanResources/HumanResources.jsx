import { Box, Container } from "@mui/material";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../LogIn/LogIn.styled";

//TODO = add layout markup to the page

const HumanResources = () => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("You are logged out");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
        <ButtonCustom type="button" onClick={logout}>
          Sign Out
        </ButtonCustom>
      </Box>
    </Container>
  );
};
export default HumanResources;
