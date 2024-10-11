import { Grid, Stack, Typography } from "@mui/material"

const SummaryItem = ({ children, sx }: any) => {
    return (
        <Typography
            sx={{
                fontSize: 16,
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
        <Grid container justifyContent={"flex-end"} spacing={2} sx={{ px: 4 }}>
            <Grid item sm={3}>
                <Stack>
                    <SummaryItem>
                        Total Bruto
                    </SummaryItem>
                    <SummaryItem>
                        Descuento
                    </SummaryItem>
                    <SummaryItem>
                        Subtotal
                    </SummaryItem>
                    <SummaryItem>
                        IVA 19%
                    </SummaryItem>
                    <SummaryItem>
                        Retefuente 10%
                    </SummaryItem>
                    <SummaryItem sx={{ fontSize: 24 }}>
                        Total
                    </SummaryItem>
                </Stack>
            </Grid>
            <Grid item>
                <Stack>
                    <SummaryItem sx={{ color: '#131f2f', fontWeight: 600 }}>
                        $90.000
                    </SummaryItem>
                    <SummaryItem sx={{ color: '#131f2f', fontWeight: 600 }}>
                        $90.000
                    </SummaryItem>
                    <SummaryItem sx={{ color: '#131f2f', fontWeight: 600 }}>
                        $20.000
                    </SummaryItem>
                    <SummaryItem sx={{ color: '#131f2f', fontWeight: 600 }}>
                        $20.000
                    </SummaryItem>
                    <SummaryItem sx={{ color: '#131f2f', fontWeight: 600 }}>
                        $20.000
                    </SummaryItem>
                    < SummaryItem sx={{ color: '#131f2f', fontWeight: 600, fontSize: 24, borderTop: "1px solid #e5e7eb" }}>
                        $60.000
                    </SummaryItem>
                </Stack>
            </Grid>
        </Grid>
    )
}
