import { Divider, Grid, Stack, Typography } from "@mui/material"

export const InvoiceItem = () => {
    return (
        <Grid container direction={'column'}>
            <Grid item xs={12}>
                <Stack direction={'row'} alignItems={'center'} spacing={2} className="h-full min-h-[50px] p-3">
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Product Name
                    </Typography>
                    < Typography>
                        1
                    </Typography>
                    <Typography>
                        $100
                    </Typography>
                    <Typography>
                        $100
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    )
}