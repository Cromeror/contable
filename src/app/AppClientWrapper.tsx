"use client"
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

export const AppClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </LocalizationProvider>
  );
}
