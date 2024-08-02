import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HeaderBar from "@/components/HeaderBar";
import { Sidebar } from "./Sidebar";
import { getDesignTokens } from "@/helper/getDesignToken";
import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
//import { open, close } from "../store/slices/sideBar";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export function RootMainLayout({ children }: { children: React.ReactNode }) {
  //const theme = useTheme();

  const [mode, setMode] = React.useState<string>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const open = useSelector((state: RootState) => state.sidebar.open);

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/*<CssBaseline />*/}
        {/* Header */}
        <HeaderBar />
        {/* Side Bar */}

        <Sidebar />
        {/* Body */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: open ? "200px" : "0px",
            transition: "all 0.3s ease-in-out",
            backgroundColor: "background",
            height: "100%",
          }}
        >
          <DrawerHeader></DrawerHeader>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
