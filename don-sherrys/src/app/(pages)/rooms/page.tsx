"use client";
import Container from "@mui/material/Container";
import theme from "@/app/themeregistry";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function Room() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: theme.palette.primary.main,
        padding: "15px",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          display: "grid",
        }}
      >
        <h1 className="Center"> Available Hometown Rooms</h1>
        <Box
          sx={{
            padding: "15px",
            marginLeft: "15px",
            marginRight: "auto",
          }}
        >
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "5px",
          }}
        >
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          display: "grid",
        }}
      >
        <h1 className="Center"> Available Hometown Rooms</h1>
        <Box
          sx={{
            padding: "15px",
            marginLeft: "15px",
            marginRight: "auto",
          }}
        >
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "15px",
          }}
        >
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
          <Box>
            <img src="https://picsum.photos/200" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
