"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { themeOptions } from "./theme";
import { StoreProvider } from "@/components/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme(themeOptions);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

export const AppClientWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </StoreProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
};
