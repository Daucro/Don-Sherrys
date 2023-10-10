"use client";

import { Typography, useTheme } from "@mui/material";
import Link from "next/link";
import "../styling/carousel.css";

interface NavButtonProps {
  text: string;
  link: string;
}
export default function NavButton(props: NavButtonProps) {
  const theme = useTheme();
  return (
    <Link href={`/${props.link}`}>
      <Typography
        className="NavButtonHeader"
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          margin: "2px",
          padding: "4px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "5px",
          border: "solid #622a2e 2px",
        }}
      >
        {props.text}
      </Typography>
    </Link>
  );
}
