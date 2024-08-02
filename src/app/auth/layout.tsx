import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "backgroundLight",
        zIndex: 2000,
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flex: 1,
          position: "relative",
          backgroundColor: "primary.dark",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={"/BG.png"} fill alt="Background" />
        <Box sx={{ position: "relative", width: "445px", height: "113px" }}>
          <Image src={"/logo2.svg"} fill alt="A2sv Logo" />
        </Box>
      </Box>
    </Box>
  );
}
