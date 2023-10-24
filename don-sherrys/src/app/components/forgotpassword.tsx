import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, FormControlLabel, Grid, Link, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PasswordModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Button
        sx={{
          color: "black",
          "&:hover": {
            textDecoration: "underline #836440",
          },
        }}
        onClick={handleOpen}
      >
        Forgot Password
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              We will send you a recovery link!
            </Typography>
            <Box component="form" noValidate sx={{}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
              ></TextField>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
              ></Typography>
            </Box>
            <Button type="submit" fullWidth variant="contained">
              <Link sx={{ color: "white" }} href="signin">
                {"Recover Account"}
              </Link>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
