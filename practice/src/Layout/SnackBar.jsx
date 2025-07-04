import React from "react";
import { Snackbar } from "@mui/material";

const CommonSnackbar = ({ open, onClose, message, duration = 2000, position = { vertical: "top", horizontal: "center" } }) => {
  return (
    <Snackbar
      anchorOrigin={position}
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={3000} 
      key={position.vertical + position.horizontal}
    />
  );
};

export default CommonSnackbar;
