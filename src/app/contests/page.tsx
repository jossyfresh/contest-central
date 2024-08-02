"use client";
import React, { useEffect } from "react";
import { ContestTable } from "@/components/Tables/ContestTable";
import {
  TableRow,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/navigation";
import { useGetContestsQuery } from "@/store/services/contestApi";
import { useDispatch } from "react-redux";
import { setContests } from "@/store/slices/contestSlice";

function Contest() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, isLoading, error }: any = useGetContestsQuery(
    `SearchString=${searchQuery}`
  );
  console.log("data", data);
  useEffect(() => {
    if (data) {
      dispatch(setContests(data));
    }
  }, [data]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
          ></LocalizationProvider>
        </Box>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => router.push("/contests/newContest")}
        >
          Create
        </Button>
      </Box>
      {isLoading && <div>Loading...</div>}
      {data && <ContestTable contests={data.contestsList} />}
    </Box>
  );
}

export default Contest;
