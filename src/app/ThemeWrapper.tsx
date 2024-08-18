"use client"
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    );
}