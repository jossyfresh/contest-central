import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  url: string;
}

export function Profile({ name, url }: Props) {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Box
        sx={{ color: "black", fontWeight: 500, cursor: "pointer" }}
        onClick={() => router.replace("/profile")}
      >
        {name}
      </Box>
      <Avatar
        alt={name}
        src={url}
        sx={{ cursor: "pointer" }}
        onClick={() => router.replace("/profile")}
      />
      <KeyboardArrowDownIcon />
    </Box>
  );
}
