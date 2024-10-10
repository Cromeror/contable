import { Grid, SxProps, Theme, Typography } from "@mui/material"

type ColumnHeaderProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>
}

const ColumnHeader = ({ children, sx }: ColumnHeaderProps) => {
    return (
        <Typography
            sx={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 12,
                textTransform: 'uppercase',
                ...sx,
            }}>
            {children}
        </Typography>
    )
}

export const InvoiceHeader = () => {
    return (
        <Grid container className="rounded p-1 px-4 bg-gray-100 uppercase">
            <Grid item sm={6}>
                <ColumnHeader>Descripción</ColumnHeader>
            </Grid>
            <Grid item sm={1.5} >
                <ColumnHeader sx={{ textAlign: 'center' }}>Cantidad</ColumnHeader>
            </Grid>
            <Grid item sm={2.5} sx={{ textAlign: 'right' }}>
                <ColumnHeader>Precio unitario</ColumnHeader>
            </Grid>
            <Grid item sm={2} sx={{ textAlign: 'right' }}>
                <ColumnHeader>Total</ColumnHeader>
            </Grid>
        </Grid>
    )
}
