"use client"
import { GeneralBalanceCard } from "@/components/GeneralBalanceCard"
import { SideBar } from "@/components/SideBar"
import { Container, Grid } from "@mui/material"
import { ModalManager } from "./ModalManager"

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <Container component="main" className="shadow-xl !p-0">
            <Grid container className="h-full">
                <Grid item xs={3} className="border-r-[1px] border-slate-200 p-6 pb-2">
                    <SideBar />
                </Grid>
                <Grid item container xs={9} className="bg-zinc-100">
                    <Grid item container xs={12}>
                        <Grid item className="p-6">
                            <GeneralBalanceCard />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="!m-6 !mt-0 border-[1px] border-slate-200 rounded-2xl bg-white">
                        {children}
                    </Grid>
                </Grid>
            </Grid>
            <ModalManager />
        </Container>
    )
}