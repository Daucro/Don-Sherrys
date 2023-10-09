import { Typography } from "@mui/material";
import Link from "next/link";
import "../styling/carousel.css";

interface NavButtonProps {
  text: string;
  link: string;
}

export default function NavButton(props: NavButtonProps) {
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
          backgroundColor: "gray",
        }}
      >
        {props.text}
      </Typography>
    </Link>
  );
}
