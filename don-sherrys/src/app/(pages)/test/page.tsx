"use client";
import Container from "@mui/material/Container";
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
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import RegisterModal from "@/app/components/register";
import PasswordModal from "@/app/components/forgotpassword";
import { useApi } from "@/app/hooks/use-api";

interface Cats {
  numberOfCats: number;
  nameOfGroup: string;
}

interface Hello {
  message: number;
  name: string;
  last: string;
}
interface Customers {
  email: string;
  phone: string;
  id: number;
}

export default function LogIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const theme = useTheme();
  const [cats, setCats] = useState<Cats | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data } = useApi<any>("/cat");
  const cat = useApi<any>("/cat");
  const hello = useApi<any>("/hello");
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        bgcolor: theme.palette.secondary.main,
        padding: "2rem",
      }}
    >
      <Grid container gap={3}>
        <Grid item xs={6}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              autoComplete="email"
            ></TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              label="Password"
              name="password"
            ></TextField>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <form onSubmit={handleSubmit}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  margin: "15px",
                }}
              >
                Sign In
              </Button>
            </form>
            <Grid item xs={6}>
              <Button>
                <PasswordModal />
              </Button>
              <Button>
                <RegisterModal />
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          margin: "15px",
        }}
      >
        Test Button
      </Button>
      {cats ? cats.numberOfCats : null}
      {hello.data ? hello.data.name : null}
      {cat.data ? cat.data.numberOfCats : null}
    </Container>
  );
}
function AppService() {
  throw new Error("Function not implemented.");
}
