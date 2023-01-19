import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleButton = (value) => {
    console.log(value, "value");
    if (value === "logout") {
      localStorage.removeItem("access_token");
    }
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <span style={{ fontWeight: "bold", fontFamily: "fantasy" }}>
            Github
          </span>
          Jobs
        </Typography>
        {localStorage.getItem("access_token") ? (
          <Button
            variant="contained"
            color="primary"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => handleButton("logout")}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => handleButton("login")}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
