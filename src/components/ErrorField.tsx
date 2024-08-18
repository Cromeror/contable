import { Typography } from "@mui/material";

export const ErrorField = ({ children }: { children: React.ReactNode }) => {
    return (
        <Typography variant="caption" className="text-red-500">
            {children}
        </Typography>
    );
}
