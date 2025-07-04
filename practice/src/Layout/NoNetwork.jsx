import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import wifi from "../assets/images/wifi.png";

const NoNetwork = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (isOnline) return children;

  return (
    <Box
      textAlign="center"
      p={4}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={wifi}
        alt="No Internet"
        style={{ width: 200, maxWidth: "100%" }}
      />
      <Typography variant="h5" mt={2} fontWeight="bold">
        NO INTERNET CONNECTION FOUND!
      </Typography>
      <Typography variant="body1" mt={1}>
        Please check your internet connection and try again.
      </Typography>
    </Box>
  );
};

export default NoNetwork;
