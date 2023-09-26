import { Typography } from "@mui/material";
import Link from "next/link";

interface NavButtonProps {
  text: string;
  link: string;
}
export default function NavButton(props: NavButtonProps) {
  return (
    <Link href={`/${props.link}`}>
      <Typography
        className='NavButtonHeader'
        variant='h6'
        component='div'
        sx={{ flexGrow: 1, margin: "2px",padding:"4px", backgroundColor:'gray', border:'solid black 2px',borderRadius:'6px' }}
      >
        {props.text}
      </Typography>
    </Link>
  );
}
