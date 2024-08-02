"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import ProfileAreaChart from "@/components/Charts/ProfileAreaChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const icon_text_style = {
    color: "textSecondary",
    display: "flex",
    gap: 1,
    alignItems: "center",
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        flexGrow: 1,
        gap: 2,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Stack sx={{ backgroundColor: "backgroundLight", borderRadius: 2 }}>
        {/* Cover Image */}
        <Box
          sx={{
            width: "100%",
            height: "200px",
            position: "relative",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Image src={"/cover.jpg"} alt="cover image" objectFit="cover" fill />
        </Box>
        {/* Profile Picture and name */}
        <Box sx={{ position: "relative", px: 10, display: "flex", py: 2 }}>
          <Box sx={{ width: "150px", height: "80px" }}>
            <Box
              sx={{
                width: "150px",
                height: "150px",
                position: "absolute",
                borderRadius: "50%",
                overflow: "hidden",
                transform: "translateY(-70px)",
              }}
            >
              <Image
                src={"/profile.jpg"}
                alt="cover image"
                objectFit="cover"
                fill
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: 4,
              py: 2,
              color: "primary.main",
            }}
          >
            <Box sx={{ fontSize: 18, fontWeight: "bold" }}>Anima Agrawa</Box>
            <Box>UI/UX Designer</Box>
          </Box>
        </Box>
      </Stack>
      {/* cards */}

      <Box sx={{ display: "flex", width: "100%", gap: 2, flexWrap: "wrap" }}>
        {/* About */}
        <Stack
          sx={{
            //height: "100%",
            flex: 1,
            backgroundColor: "backgroundLight",
            borderRadius: 2,
            flexShrink: 1,
            px: 2,
            py: 3,
            gap: 2,
            height: "inherit",
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            About
          </Box>
          <Box sx={icon_text_style}>
            <PersonIcon sx={{ color: "primary.main" }} />
            Male
          </Box>
          <Box sx={icon_text_style}>
            <CakeIcon sx={{ color: "primary.main" }} />
            Born June 26, 1980
          </Box>
          <Box sx={icon_text_style}>
            <EmailIcon sx={{ color: "primary.main" }} />
            charles5182@ummoh.com
          </Box>
          <Box sx={icon_text_style}>
            <LanguageIcon sx={{ color: "primary.main" }} />
            codeforce
          </Box>
          <Box sx={icon_text_style}>
            <LanguageIcon sx={{ color: "primary.main" }} />
            leetcode
          </Box>
          <Box sx={icon_text_style}>
            <LanguageIcon sx={{ color: "primary.main" }} />
            hackerrank
          </Box>
          <Box sx={icon_text_style}>
            <LanguageIcon sx={{ color: "primary.main" }} />
            resume
          </Box>
        </Stack>
        {/* Status */}
        <Stack
          sx={{
            height: "inherit",
            flex: 1,
            backgroundColor: "backgroundLight",
            borderRadius: 2,
            flexGrow: 2,
            px: 2,
            py: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{ fontSize: "18px", color: "primary.main", fontWeight: 600 }}
          >
            Status
          </Box>
          <Box sx={{ color: "textSecondary", display: "flex", gap: 2, pb: 2 }}>
            <Box
              sx={{
                color: "primary.main",
                cursor: "pointer",
                borderBottom: "2px solid",
                borderColor: "primary.main",
              }}
            >
              Conversion Rate
            </Box>
            <Box
              sx={{
                cursor: "pointer",
              }}
            >
              {" "}
              Ranking
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, fontSize: 14 }}>
              Current Rate:{" "}
              <Box sx={{ color: "#1FCD64", fontWeight: 500 }}>15th</Box>
            </Box>
            <FormControl sx={{ width: "100px" }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{}}>
            <ProfileAreaChart slot={undefined} />
          </Box>
        </Stack>
        {/* Reset Form  */}
        <Stack
          sx={{
            height: "inherit",
            flex: 1,
            backgroundColor: "backgroundLight",
            borderRadius: 2,
            flexGrow: 2,
            px: 2,
            py: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{ fontSize: "18px", color: "primary.main", fontWeight: 600 }}
          >
            Status
          </Box>
          <Box sx={{ fontSize: "14px", color: "textSecondary" }}>
            old password
          </Box>
          <TextField
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Box sx={{ fontSize: "14px", color: "textSecondary" }}>
            new password
          </Box>
          <TextField
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Box sx={{ fontSize: "14px", color: "textSecondary" }}>
            confirm password
          </Box>
          <TextField
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Reset Password
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Profile;
