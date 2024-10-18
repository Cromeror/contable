"use client"
import { SideBar } from "@/components/SideBar"
import { Grid } from "@mui/material"

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <>
            <Grid container className="h-full min-h-[100vh]">
                <Grid item xs={2} className="border-r-[1px] border-slate-200 p-6 pb-2">
                    <SideBar />
                </Grid>
                <Grid item container xs={10} className="bg-zinc-100">
                    {/*                     <Grid item container xs={12}>
                        <Grid item className="p-6">
                            <GeneralBalanceCard />
                        </Grid>
                    </Grid> */}
                    {/* <Grid item xs={12} className="!m-6 border-[1px] border-slate-200 rounded-2xl bg-white"> */}
                    <Grid item xs={12} sx={{ p: 4 }}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}