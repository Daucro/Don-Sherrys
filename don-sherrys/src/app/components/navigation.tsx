"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavButton from "./navbutton";
import "../styling/carousel.css";
import { useTheme } from "@mui/material/styles";

export default function Navigation() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="MenuIcon" />
          </IconButton>
          <Box sx={{ display: "flex" }}>
            <NavButton text="Home" link="/" />
            <NavButton text="About Us" link="about" />
            <NavButton text="Amenities" link="amenities" />
            <NavButton text="Rooms" link="rooms" />
            <NavButton text="Menu" link="menu" />
            <Button
              href="signin"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                  textDecoration: "underline #836440", // Styles to apply on hover
                },
              }}
              className="LoginButton"
              color="inherit"
            >
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
