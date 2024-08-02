"use client";
import Google from "@/components/CustomIcons/Google";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function ResetPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        px: "200px",
        width: "100%",
      }}
    >
      <Box sx={{ fontSize: "48px", fontWeight: "700", mb: 2 }}>
        Reset Password
      </Box>

      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          Verification Code
        </Box>
        <TextField
          size="small"
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          Old Password
        </Box>
        <OutlinedInput
          size="small"
          type={showPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          New Password
        </Box>
        <OutlinedInput
          size="small"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          Confirm Password
        </Box>
        <OutlinedInput
          size="small"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", fontSize: "14px" }}
      >
        <Link href={"../auth"}>Sign in</Link>
      </Box>

      <Button
        variant="contained"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          borderRadius: "30px",
        }}
        onClick={handleSubmit}
      >
        Reset Password
      </Button>
    </Box>
  );
}
