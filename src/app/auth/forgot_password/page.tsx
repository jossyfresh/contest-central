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
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("");

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
        Forgot Password
      </Box>
      <Box marginBottom={2}>
        Lorem ipsum dolor sit amet consectetur. Nascetur egestas dui velit
        quisque. Enim elementum tempus dignissim risus lacus. Quisque orci
        molestie vel enim.{" "}
      </Box>

      <Box display="flex" flexDirection="column" marginBottom={2}>
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          E-mail
        </Box>
        <TextField
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        Submit
      </Button>
    </Box>
  );
}
