import { Grid, Typography } from "@mui/material"

export const GeneralBalanceCard = () => {
    return (
        <Grid container className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-md">
            <Grid item xs={12}>
                <Typography>
                    Balance general
                </Typography>
            </Grid>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <Grid container alignItems={"baseline"} className="text-xl">
                        <Typography variant="h4" className="font-bold text-gray-800">$</Typography>
                        <Typography variant="h3" className="font-bold text-gray-800">100,000</Typography>
                        <Typography variant="subtitle2" className="text-gray-500">.00</Typography>
                    </Grid>
                </div>
            </div>
        </Grid>
    )
}