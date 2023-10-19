"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
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
  const theme = createTheme({
    palette: {
      primary: {
        main: "#836440",
        light: "#c8b19b",
        dark: "#5b3f27",
      },
      secondary: {
        main: "#834240",
        light: "#d6a29d",
        dark: "#501d24",
      },
    },
  });
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
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container
          sx={{
            backgroundColor: theme.palette.secondary.main,
            pt: 2,
          }}
        >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <a href="https://www.instagram.com/">
                  <img src="https://picsum.photos/50" />
                </a>
                <a href="https://twitter.com/">
                  <img src="https://picsum.photos/50" />
                </a>
              </Box>
            </div>
          </div>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
