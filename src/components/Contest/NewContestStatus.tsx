import { Box } from "@mui/material";
import React from "react";

export const NewContestStatus = ({ status }: { status: boolean }) => {
  return (
    <Box
      sx={{
        color: !status ? "#68CF73" : "#F27777",
      }}
    >
      {!status ? "Accepted" : "Warning"}
    </Box>
  );
};
