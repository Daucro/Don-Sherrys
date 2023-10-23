"use client";
import Container from "@mui/material/Container";
import theme from "@/app/themeregistry";
import { useTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

export default function Signin() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor: theme.palette.secondary.main,
      }}
    >
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box component="form" noValidate sx={{}}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          autoComplete="email"
        ></TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            margin: "15px",
          }}
        >
          Submit
        </Button>
        <Link href="/" variant="body2">
          {"Forgot Password"}
        </Link>
        <Link href="/" variant="body2">
          {"Don't have an account? Sign up!"}
        </Link>
      </Box>
    </Container>
  );
}
