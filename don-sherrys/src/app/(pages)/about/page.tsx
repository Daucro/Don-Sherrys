"use client";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "../about/about.css";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/themeregistry";

export default function SimpleContainer() {
  const theme = useTheme();
  return (
    <main className="aboutUs">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography className="Center" variant="h1">
            About Don & Sherry
          </Typography>
          <Box
            sx={{
              bgcolor: theme.palette.secondary.main,
              height: "100",
              padding: "25px",
            }}
          >
            <Paper elevation={14}>
              <Typography
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <img
                  alt="Sherry"
                  src="https://github.com/Daucro/Don-Sherrys/blob/Assets/don-sherrys/src/PhotoAssets/ParentsEdit2.jpg?raw=true"
                />
              </Typography>
            </Paper>
            <Paper elevation={14}>
              <Typography
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row-reverse",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <img
                  alt="Don"
                  src="https://github.com/Daucro/Don-Sherrys/blob/Assets/don-sherrys/src/PhotoAssets/ParentsEdit.jpg?raw=true"
                />
              </Typography>
            </Paper>
            <Paper elevation={14}>
              <Typography
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <img
                  alt="Elmo"
                  src="https://github.com/Daucro/Don-Sherrys/blob/Assets/don-sherrys/src/PhotoAssets/Elmoedit.jpg?raw=true"
                />
              </Typography>
            </Paper>
            <Paper elevation={14}>
              <Typography
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row-reverse",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <img
                  alt="Lakeside Village"
                  src="https://picsum.photos/719/350"
                />
              </Typography>
            </Paper>
          </Box>
        </Container>
      </React.Fragment>
    </main>
  );
}
