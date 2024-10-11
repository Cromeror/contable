import { Grid, SxProps, Theme, Typography } from "@mui/material"

type ColumnHeaderProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>
}

const ColumnHeader = ({ children, sx }: ColumnHeaderProps): JSX.Element => {
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
        <Grid container className="px-4 uppercase">
            <Grid item sm={12}>
                <ColumnHeader>Productos</ColumnHeader>
            </Grid>
        </Grid>
    )
}
