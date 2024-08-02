import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import SingleGroupRank from "./SingleGroupRank";
import PersonIcon from "@mui/icons-material/Person";
import SingleContestantRank from "./SingleContestantRank";

export function TopContestants() {
  const topGroups: any = [
    { rank: 1, group: "Group 45", percentage: "80%" },
    { rank: 2, group: "Group 46", percentage: "80%" },
    { rank: 3, group: "Group 47", percentage: "80%" },
    { rank: 4, group: "Group 48", percentage: "80%" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        //background: "",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        borderColor: "borderColor",
        borderRadius: 2,
        background: "background",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#FEF7E9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonIcon sx={{ fontSize: "18" }} />
          </Box>
          <Typography sx={{ fontSize: 16, color: "#666666" }}>
            {" "}
            Top Contestants
          </Typography>
        </Box>
        {/* Group Rank */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {topGroups.map(({ group, rank, percentage }: any, index: any) => {
            return (
              <SingleContestantRank
                key={index}
                group={group}
                rank={rank}
                percentage={percentage}
              />
            );
          })}
        </Box>
        <Box>
          <Button
            variant={"outlined"}
            size="small"
            sx={{ borderColor: "##B6C6FE", color: "#666666" }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TopContestants;
