import { Box, Grid, Stack, Typography } from "@mui/material"

const SummaryItem = ({ children, sx }: any) => {
    return (
        <Typography
            sx={{
                fontWeight: 'bold',
                fontSize: 12,
                textTransform: 'capitalize',
                textAlign: 'right',
                ...sx,
            }}>
            {children}
        </Typography>
    )
}

export const InvoiceSummary = () => {
    return (
        <Grid container className="p-1 px-4" justifyContent={"flex-end"}>
            <Grid item sm={2.5}>
                <Stack>
                    <SummaryItem  >
                        Subtotal
                    </SummaryItem>
                    <SummaryItem  >
                        Descuento
                    </SummaryItem>
                    <SummaryItem  >
                        Total
                    </SummaryItem>
                </Stack>
            </Grid>
            <Grid item sm={2}>
                <Stack>
                    <SummaryItem  >
                        $100
                    </SummaryItem>
                    <SummaryItem  >
                        $100
                    </SummaryItem>
                    < SummaryItem  >
                        $100
                    </SummaryItem>
                </Stack>
            </Grid>
        </Grid>
    )
}
