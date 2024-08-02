import React from "react";
import { Box, Typography } from "@mui/material";

function Card({
  title,
  Icon,
  value,
  color,
  background,
}: {
  title: string;
  Icon: React.ReactNode;
  value: string;
  color: string;
  background: string;
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "133px",
          border: 1,
          borderColor: "borderColor",
          background: "background",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: background,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: color,
            }}
          >
            {Icon}
          </Box>
          <Box>
            <Box sx={{ color: "textSecondary" }}>{title}</Box>
            <Box sx={{ fontWeight: 500 }}>{value}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Card;
