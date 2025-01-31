import { Edit as EditIcon } from "@mui/icons-material"
import { Box, Chip, Grid, Icon, IconButton, Stack, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { DateSelector } from "./DateSelector"
import { SupplieSelector } from "./SupplieSelector"

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
                <Grid item sm={4} sx={{ cursor: "pointer" }}>
                    <DateSelector />
                </Grid>
            </Grid>
            <Grid container direction={"row"} spacing={2}>
                <Grid item sm={6}>
                    <SupplieSelector />
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