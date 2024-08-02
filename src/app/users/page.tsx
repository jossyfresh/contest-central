"use client";
import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import UserTable from "@/components/Tables/UserTable";
import { useGetUsersQuery } from "@/store/services/userApi";

function Users() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data, isLoading, error }: any = useGetUsersQuery("");
  console.log(data);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            sx={{
              bgcolor: "white",
            }}
            placeholder="Search"
            variant="outlined"
            fullWidth
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <SearchIcon sx={{ color: "primary.main" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              px: 0.5,
              py: 1,
              display: "flex",
              gap: 0.4,
            }}
          >
            <TuneIcon />
            Filter
            <KeyboardArrowRightIcon />
          </Button>
          <Button variant="contained">Create User</Button>
        </Box>
      </Box>

      <Box>
        <UserTable users={data} />
      </Box>
    </Box>
  );
}

export default Users;
