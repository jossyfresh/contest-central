export const getDesignTokens = (mode: string) => ({
  palette: {
    mode,
    typography: {
      fontFamily: "Poppins", // Set the font to Poppins
    },
    ...(mode === "light"
      ? {
          primary: {
            main: "#264ECA", // Active links, form buttons, and icons color
            light: "#F5F7FD", // Lighter shade of primary color
            light300: "#D4E5FA", // Lighter shade of primary color
            dark: "#1A336E", // Darker shade of primary color
          },
          secondary: {
            main: "#FFDE9B", // Color used sparingly
          },
          background: "#F6F6F9", // Background color
          backgroundLight: "#FFFFFF", // Background color
          borderColor: "#e6ebf1",
          textSecondary: "#6C6C77",
        }
      : {
          primary: {
            main: "#264ECA", // Active links, form buttons, and icons color
            light: "#F5F7FD", // Lighter shade of primary color
            light300: "#D4E5FA", // Lighter shade of primary color
            dark: "#1A336E", // Darker shade of primary color
          },
          secondary: {
            main: "#FFDE9B", // Color used sparingly
          },
          background: "#282540", // Background color
          backgroundLight: "#322E53", // Background color
          borderColor: "#322E53",
          textSecondary: "#6C6C77",
          textPrimary: "#FFF",
        }),
  },
});
