import React from "react";
import { Box } from "@mui/material";

interface SingleGroupRankProps {
  rank: number;
  group: string;
  percentage: string;
}

function SingleGroupRank({ rank, group, percentage }: SingleGroupRankProps) {
  const slantStyle = {
    width: "80px",
    clipPath: "polygon(0 0, 80% 0%, 100% 100%, 20% 100%)",
    background: "#FFDE9B", // Adjust the background color as needed
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "25px",
    transform: "translateX(-20px)",
    fontWeight: "bold",
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* rank */}
      <Box sx={{ background: "#FFDE9B", padding: 1, marginRight: 1 }}>
        {rank}.
      </Box>
      {/* name */}
      <Box
        sx={{
          padding: 1,
          border: 1,
          borderColor: "#FFDE9B",
          width: "160px",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "40px",
        }}
      >
        {group}
      </Box>
      {/* percentage */}
      <Box sx={slantStyle}>{percentage}</Box>
    </Box>
  );
}

export default SingleGroupRank;
