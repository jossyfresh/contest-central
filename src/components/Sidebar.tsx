"use client";
import React from "react";
import { Box, Drawer } from "@mui/material";
import List from "@mui/material/List";
import Image from "next/image";
import SingleNav from "@/components/SingleNav";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { unSetUser } from "@/store/slices/userSlice";
//import { open, close } from "../store/slices/sideBar";

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Nav {
  text: string;
  link: string;
  icon: React.ReactNode;
}
const routes: Nav[] = [
  { text: "Dashboard", link: "/", icon: <DashboardIcon /> },
  { text: "Contest", link: "/contests", icon: <EmojiEventsIcon /> },
  { text: "Users", link: "/users", icon: <PersonIcon /> },
  //{ text: "Setting", link: "/settings", icon: <SettingsIcon /> },
  { text: "Leader Board", link: "/leaderboards", icon: <LeaderboardIcon /> },
  //{ text: "Members", link: "/members", icon: <GroupIcon /> },
];

export function Sidebar() {
  const open = useSelector((state: RootState) => state.sidebar.open);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logging out");
    localStorage.removeItem("user");
    dispatch(unSetUser());
  };

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 0,
          boxSizing: "border-box",
          border: "none",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          //paddingLeft: "20px",
        }}
      >
        <DrawerHeader>
          {open && (
            <Image
              src="/logo.png"
              width={100}
              height={30}
              alt="Picture of the author"
            />
          )}
        </DrawerHeader>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          px: 2,
          py: 6,
        }}
      >
        {/* Typography with Poppins font */}
        <List>
          {routes.map(({ text, link, icon }: Nav, index) => (
            <SingleNav key={index} text={text} link={link} icon={icon} />
          ))}
        </List>
        <SingleNav
          text={"Logout"}
          link={""}
          icon={<LogoutIcon />}
          onClick={handleLogout}
        />
      </Box>
    </Drawer>
  );
}
