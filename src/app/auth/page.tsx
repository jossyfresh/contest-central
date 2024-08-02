"use client";
import Google from "@/components/CustomIcons/Google";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInMutation } from "@/store/services/authApi";
import { User, SignInResponse } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, { isLoading }]: any = useSignInMutation();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Signing in...");
      const loginData = await signIn({ email, password }).unwrap();
      console.log("Login Data", loginData);
      // Store user data and token in localStorage
      if (loginData) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...loginData,
          })
        );
        dispatch(setUser(loginData));
        router.push("/");
      }
    } catch (error) {
      console.log("Error Signing in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingLeft: "200px",
        paddingRight: "200px",
        width: "100%",
      }}
    >
      <Box sx={{ fontSize: "48px", fontWeight: "700", mb: 2 }}>Sign in</Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          E-mail
        </Box>
        <TextField
          variant="outlined"
          type="email"
          size="small"
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ fontSize: "14px", color: "textSecondary", mb: 1 }}>
          Password
        </Box>
        <OutlinedInput
          size="small"
          type={showPassword ? "text" : "password"}
          value={password}
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
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
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "15px",
        }}
      >
        <Box display="flex" gap={1} alignItems={"center"}>
          Remember me
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 18 },
              color: "textSecondary",
            }}
          />
        </Box>
        <Box>
          <Link href="/auth/reset">Forgot Password?</Link>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          borderRadius: "30px",
        }}
        type="submit"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ height: "1px", flex: 1, backgroundColor: "textSecondary" }}
        ></Box>
        <Box margin={2}>OR</Box>
        <Box
          sx={{ height: "1px", flex: 1, backgroundColor: "textSecondary" }}
        ></Box>
      </Box>

      <Button
        variant="outlined"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          color: "textSecondary",
          borderColor: "textSecondary",
          display: "flex",
          gap: 2,
          fontSize: "20px",
          borderRadius: "30px",
        }}
      >
        <FcGoogle />
        <Box sx={{ fontSize: "16px" }}>Continue with Google</Box>
      </Button>
    </form>
  );
}
