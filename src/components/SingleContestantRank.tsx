import React from "react";
import { Box, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

interface SingleContestantRankProps {
  rank: number;
  group: string;
  percentage: string;
}

function SingleContestantRank({
  rank,
  group,
  percentage,
}: SingleContestantRankProps) {
  const slantStyle = {
    width: "80px",
    clipPath: "polygon(20% 0, 100% 0%, 80% 100%, 0% 100%)",
    background: "#B6C6FE", // Adjust the background color as needed
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "25px",
    transform: "translateX(-20px)",
    fontWeight: "bold",
  };
  const colors: any = {
    1: "#E4BA2D",
    2: "#A0A7B1",
    3: "#B96C4E",
    4: "#666666",
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* rank */}
      <Box sx={{ background: "#B6C6FE", padding: 1, marginRight: 1 }}>
        {rank}.
      </Box>
      {/* name */}
      <Box
        sx={{
          padding: 1,
          border: 1,
          borderColor: "#B6C6FE",
          width: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          //paddingLeft: "40px",
        }}
      >
        <WorkspacePremiumIcon sx={{ color: colors[rank], fontSize: 24 }} />
        <Typography>{group}</Typography>
      </Box>
      {/* percentage */}
      <Box sx={slantStyle}>{percentage}</Box>
    </Box>
  );
}

export default SingleContestantRank;
