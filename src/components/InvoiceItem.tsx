import { Divider, Grid, Stack, SxProps, Theme, Typography } from "@mui/material"

type ColumnItemProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>
}

const ColumnItem = ({ children, sx }: ColumnItemProps) => {
    return (
        <Typography
            sx={{
                fontWeight: 'bold',
                fontSize: 12,
                textTransform: 'capitalize',
                ...sx,
            }}>
            {children}
        </Typography>
    )
}

export const InvoiceItem = () => {
    return (
        <Grid container className="p-1 px-4 min-h-[30px] border-b-[1px]" alignItems={'center'}>
            <Grid item sm={6}>
                <Stack direction={'row'} alignItems={'baseline'} spacing={1}>
                    <ColumnItem sx={{ color: 'gray', fontWeight: "normal" }}>
                        22952295 /
                    </ColumnItem>
                    <ColumnItem>Product Name</ColumnItem>
                </Stack>
            </Grid>
            <Grid item sm={1.5} >
                <ColumnItem sx={{ textAlign: 'center' }}>
                    1
                </ColumnItem>
            </Grid>
            <Grid item sm={2.5} sx={{ textAlign: 'right' }}>
                <ColumnItem>$100</ColumnItem>
            </Grid>
            <Grid item sm={2} sx={{ textAlign: 'right' }}>
                <ColumnItem>$100</ColumnItem>
            </Grid>
        </Grid >
    )
}
