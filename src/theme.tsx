import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      dark: "#1A336E", // Darker shade of primary color
    },
    secondary: {
      main: "#FFDE9B", // Color used sparingly
    },
    background: {
      default: "#F5F7FD", // Background color
      paper: "#FFFFFF",
    },
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
