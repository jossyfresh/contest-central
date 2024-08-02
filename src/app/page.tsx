"use client";
import AreaChart from "@/components/AreaChart";
import Card from "@/components/Card";
import { TopContestants } from "@/components/TopContestants";
import TopGroups from "@/components/TopGroups";
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { RecentContests } from "@/components/RecentContests";
import { ContestTable } from "@/components/Tables/ContestTable";
import { useGetContestsQuery } from "@/store/services/contestApi";
import { ContestTableRecent } from "@/components/Tables/ContestTableRecent";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, isLoading, error }: any = useGetContestsQuery(
    ` SearchString=${searchQuery}`
  );
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            title="Total Contest"
            Icon={<LeaderboardIcon />}
            value="222"
            color="#264ECA"
            background=" sm={6} xs={12}#E9EDFA"
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            title="Total Group"
            Icon={<GroupIcon />}
            value="222"
            color="#26AF61"
            background="#E9F7EF"
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            title="Total Members"
            Icon={<PersonIcon />}
            value="222"
            color="#F6B612"
            background="#FEF7E9"
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            title="Total Hours"
            Icon={<AccessTimeIcon />}
            value="222"
            color="#FA4A49"
            background="#FDE8E8"
          />
        </Grid>
      </Grid>
      {/*<Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>*/}
      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
        Average Contest Conversion
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <AreaChart />
        </Grid>

        <Grid item md={4} xs={12}>
          <TopGroups />
        </Grid>
      </Grid>
      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
        Recent Contests
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          {isLoading && <div>Loading...</div>}
          {data && <ContestTableRecent contests={data.contestsList} />}
        </Grid>

        <Grid item md={4} xs={12}>
          <TopContestants />
        </Grid>
      </Grid>
    </Box>
    //</Box>
  );
}
