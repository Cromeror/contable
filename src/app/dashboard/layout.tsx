"use client"
import { SideBar } from "@/components/SideBar"
import { Box } from "@mui/material"

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    )
}