import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Breadcrumb } from "./BreadCrumb";
import { Profile } from "./Profile";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../store/slices/sideBarSlice";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function HeaderBar() {
  const opened = useSelector((state: RootState) => state.sidebar.open);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      open={opened}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "background",
        zIndex: 100,
        borderBottom: "1px",
        borderColor: "borderColor",
        color: "textSecondary",
        height: 60,
        px: 4,
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          {opened ? (
            <Box
              onClick={() => dispatch(close())}
              sx={{
                backgroundColor: "primary.light300",
                alignSelf: "end",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "backgroundLight",
                },
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <MenuOpenIcon />
            </Box>
          ) : (
            <Box
              onClick={() => dispatch(open())}
              sx={{
                backgroundColor: "primary.light300",
                alignSelf: "end",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "backgroundLight",
                },
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <MenuOpenIcon sx={{ rotate: "180deg" }} />
            </Box>
          )}
          <Breadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses="text-amber-500"
            containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
            listClasses="hover:underline mx-2 font-bold"
            capitalizeLinks
          />
        </Box>
        <Profile
          name={user ? user.firstName + " " + user.lastName : ""}
          url=""
        />
      </Box>
    </AppBar>
  );
}

export default HeaderBar;
