"use client";

import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

export default function WhatsAppButton() {
  return (
    <Box
      onClick={() =>
        window.open(
          "https://wa.me/923002538642?text=Hi%20Pool%20Captain%20I%20need%20pool%20services",
          "_blank"
        )
      }
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#25D366",
        color: "#fff",
        width: 60,
        height: 60,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: 4,
        zIndex: 9999,
        "&:hover": { transform: "scale(1.1)" },
      }}
    >
      <WhatsAppIcon fontSize="large" />
    </Box>
  );
}