import React from "react";
import Link from "next/link";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Typography, useTheme, Box } from "@mui/material";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  link: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

function SingleNav({ text, link, icon, onClick }: Props) {
  const theme = useTheme();
  const path = usePathname();
  const paths = path.split("/").filter((path) => path);
  const active = link == "/" + paths[paths.length - 1];
  return (
    <Link
      href={`${link}`}
      style={{
        textDecoration: "none",
        color: theme.palette.textSecondary,
        fontFamily: "Poppins!important",
      }}
    >
      <ListItem
        key={text}
        disablePadding
        sx={{ display: "block" }}
        onClick={onClick}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: "initial",
            px: 2.5,
            fontFamily: theme.typography.fontFamily,
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            },
            backgroundColor: active ? theme.palette.primary.light : "inherit",
            color: active ? theme.palette.primary.main : "inherit",
          }}
        >
          <Box
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Box>{text}</Box>
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default SingleNav;
