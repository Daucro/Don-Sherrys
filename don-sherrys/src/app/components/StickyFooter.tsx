"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "../styling/carousel.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/"></Link>
      {"http://localhost:3000/"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container>
          <Typography variant="body1"></Typography>
          <div className="GlobalFooter">
            <div className="FooterLeft">
              <a href="https://lakelander.com/">Local News</a>
              <br></br>
              <a href="https://www.tourtexas.com/destinations/lake-whitney-attractions">
                Local Attractions
              </a>
              <br></br>
              <a href="https://www.tripadvisor.com/RestaurantsNear-g56888-d146871-Lake_Whitney_State_Park-Whitney_Texas.html">
                Local Eats
              </a>
              <br></br>
              <a href="https://www.visitdallas.com/things-to-do/">
                The Big City
              </a>
              <br></br>
            </div>
            <div className="FooterCenter">
              <h3>Office Hours</h3>
              <tr>
                <td>Mon-Wed</td>
                <td>9:00am-2:00pm</td>
              </tr>
              <tr>
                <td>Thurs-Fri</td>
                <td>9:00am-5:00pm</td>
              </tr>
              <tr>
                <td>Sat-Sun</td>
                <td>Closed</td>
              </tr>
            </div>
            <div className="FooterRight">
              <div>
                <Typography variant="h6">Stay Connected</Typography>
              </div>
              <div className="Socialmedia">
                <a href="https://www.instagram.com/">
                  <img src="https://picsum.photos/50" />
                </a>
                <a href="https://twitter.com/">
                  <img src="https://picsum.photos/50" />
                </a>
              </div>
            </div>
          </div>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
