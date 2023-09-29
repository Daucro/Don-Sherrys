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

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "grey",
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
            <NavButton text="Home" link="home" />
            <NavButton text="About Us" link="about" />
            <NavButton text="Amenities" link="amenities" />
            <NavButton text="Location" link="location" />
            <NavButton text="Menu" link="menu" />
            <Button className="LoginButton" color="inherit">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
