"use client";
import { RootState } from "@/store";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  return <Box>{children}</Box>;
};

export default AuthProvider;
