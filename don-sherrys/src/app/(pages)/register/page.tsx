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
import React, { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        bgcolor: theme.palette.secondary.main,
        padding: "2rem",
      }}
    ></Container>
  );
}
