"use client"
import { TopBar } from "@/components/TopBar"
// import { SideBar } from "@/components/SideBar"
import { Box, Container, Grid, Skeleton } from "@mui/material"
import styles from "./layout.module.css";

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <Container component="main" className="shadow-xl p-0">
            <Grid container className="h-full">
                <Grid item container xs={4} className="border-r-[1px] border-slate-200">
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" height={100} />
                    </Grid>
                </Grid>
                <Grid item container xs={8} className="bg-slate-50">
                    <Grid item xs={12}>
                        <TopBar />
                    </Grid>
                    <Grid item xs={12} className="m-4 border-[1px] border-slate-200 rounded-2xl bg-white">
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}