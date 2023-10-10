"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/carouselhome";
import GFooter from "./components/StickyFooter";
import StickyFooter from "./components/StickyFooter";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/themeregistry";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <SlideShow />
      <Container
        maxWidth="false"
        sx={{
          width: "1625px",
          paddingTop: "25px",
          paddingBottom: "25px",
          bgcolor: theme.palette.primary.main,
          marginTop: "10px",
        }}
      >
        <div className="BookingContainer">
          <div className="BookingLeftTop">
            <img src="https://picsum.photos/351/351" />
            <p className="CenterParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className="BookingLeftBottom">
            <p className="CenterParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <img src="https://picsum.photos/351/351" />
          </div>
          <div className="BookingPhotoContianer">
            <img className="BookingPhoto" src="https://picsum.photos/714/414" />
          </div>
        </div>
      </Container>
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "1625px",
          bgcolor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            position: "relative",
            right: "2%",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <img src="https://picsum.photos/714/351" />
        </Box>
        <Box
          sx={{
            position: "relative",
            right: ".3%",
            paddingTop: "25px",
          }}
        >
          <img src="https://picsum.photos/351/351" />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            alignSelf: "center",
            position: "relative",
            left: "4%",
          }}
        >
          <p>What you need when you need it</p>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        sx={{
          width: "1625px",
          bgcolor: theme.palette.primary.main,
        }}
      >
        <div className="BookingContainer3">
          <div className="BookingContainer3Left">
            <p className="BookingParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="BookingContainer3LeftImg">
              <img src="https://picsum.photos/351/351" />
            </div>
          </div>
          <div className="BookingContainer3Right">
            <p className="BookingParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="BookingContainer3RightImg">
              <img src="https://picsum.photos/351/351" />
            </div>
          </div>
        </div>
      </Container>
      <Container
        maxWidth="false"
        sx={{
          width: "1625px",
          bgcolor: theme.palette.secondary.main,
        }}
      >
        <div className="BookingContainer4">
          <div className="BookingContainer4Left">
            <img src="https://picsum.photos/574/430" />
            <figcaption>Lorenia</figcaption>
          </div>
          <div className="BookingContainer4Center">
            <img src="https://picsum.photos/574/430" />
            <figcaption>Divinia</figcaption>
          </div>
          <div className="BookingContainer4Right">
            <img src="https://picsum.photos/574/430" />
            <figcaption>Seleria</figcaption>
          </div>
        </div>
      </Container>
    </main>
  );
}
