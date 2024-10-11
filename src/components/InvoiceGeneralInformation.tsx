import { Box, Chip, Grid, Stack, Typography } from "@mui/material"

export const InvoiceGeneralInformation = () => {
    return (
        <Stack spacing={2}>
            <Typography sx={{ fontWeight: 'bold' }} >
                Factura #123456
            </Typography>
            <Grid container direction={"row"} spacing={2}>
                <Grid item sm={4}>
                    <Stack>
                        <Typography sx={{ fontSize: 12 }}>
                            Estado
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, textTransform: 'capitalize' }}>
                            <Chip label="Pendiente" sx={{ height: "auto" }} />
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm={4}>
                    <Stack>
                        <Typography sx={{ fontSize: 12 }}>
                            Pagar hasta
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, textTransform: 'capitalize' }}>
                            Mar 15, 2023
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container direction={"row"} spacing={2}>
                <Grid item sm={6}>
                    <Stack>
                        <Typography sx={{ fontSize: 12 }}>
                            Proveedor
                        </Typography>
                        <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                            Cristobal Romero
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                            cristobal.romero@gmail.com
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm={6}>
                    <Stack>
                        <Typography sx={{ fontSize: 12 }}>
                            Medio de pago
                        </Typography>
                        <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                            Transferencia
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                            ****** 457
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                            Cuenta ahorro Bancolombia
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}