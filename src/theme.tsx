import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        light?: string;
        dark?: string;
        lighter?: string;
      };
      secondary: {
        main: string;
      };
      textSecondary: string;
      success: string;
      danger: string;
      background: {
        default: string;
        paper: string;
      };
    };
  }
}
// allow configuration using `createTheme`
interface ThemeOptions {
  palette?: {
    primary?: {
      main: string;
      light?: string;
      dark?: string;
      lighter?: string;
    };
    secondary?: {
      main: string;
    };
    textSecondary?: string;
    danger?: string;
    success?: string;
    background?: {
      default: string;
      paper: string;
    };
  };
}

const theme = createTheme({
  components: {
    // Name of the component
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          // add variant styles like so
          "&.Mui-disabled": {
            backgroundColor: "#cccccc",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#264ECA", // Active links, form buttons, and icons color
      light: "#F5F7FD", // Lighter shade of primary color
      light300: "#D4E5FA", // Lighter shade of primary color
      dark: "#1A336E", // Darker shade of primary color
      lighter: "#2148C0",
    },
    secondary: {
      main: "#FFDE9B", // Color used sparingly
    },
    background: {
      default: "#F5F7FD", // Background color
      paper: "#FFFFFF",
    },
    // Background color
    backgroundLight: "#FFFFFF", // Background color
    borderColor: "#e6ebf1",
    borderColorLight: "#E5E7EB",
    textSecondary: "#6C6C77",
    success: "#68CF73",
    error: "#F27777",
  },
  typography: {
    fontFamily: "Poppins", // Set the font to Poppins
  },
});

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
