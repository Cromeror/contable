import { Grid, Stack, Typography } from "@mui/material"

export const InvoiceHeader = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            className="rounded p-3 bg-gray-100 uppercase">
            <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                Descripción
            </Typography>
            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
                Cantidad
            </Typography>
            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
                Precio unitario
            </Typography>
            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
                Total
            </Typography>
        </Stack>
    )
}