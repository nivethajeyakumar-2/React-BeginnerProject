

import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  fullWidth = true,
  required = false,
  multiline = false,
  rows = 1,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      required={required}
      multiline={multiline}
      rows={rows}
      margin="normal"
      {...rest}
    />
  );
};

export default CustomTextField;
