import { Product } from "@/app/api/products/definitions"
import { Box, Divider, Grid, Stack, SxProps, Theme, Typography } from "@mui/material"

type ColumnItemProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>
}

const ColumnItem = ({ children, sx }: ColumnItemProps) => {
    return (
        <Typography
            sx={{
                fontSize: 14,
                textTransform: 'capitalize',
                ...sx,
            }}>
            {children}
        </Typography>
    )
}

type Props = {
    product: Product
}

export const InvoiceItem = () => {
    return (
        <Grid container className="pb-2 px-4 min-h-[30px] border-b-[1px]" alignItems={'flex-end'} spacing={2}>
            <Grid item sm={7}>
                <Stack>
                    <Stack direction={'row'} alignItems={'baseline'} spacing={1}>
                        <ColumnItem sx={{ color: '#131f2f', fontSize: 16, fontWeight: 600 }}>
                            Landing Page
                        </ColumnItem>
                        <ColumnItem sx={{ color: '#5f6c86', fontSize: 12 }}>
                            / 22952295
                        </ColumnItem>
                    </Stack>
                    <ColumnItem sx={{ color: '#5f6c86', fontWeight: "normal" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </ColumnItem>
                </Stack>
            </Grid>
            <Grid item sm={5} sx={{ textAlign: 'right' }}>
                <Stack justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <ColumnItem sx={{ color: '#131f2f', fontSize: 16, fontWeight: 600 }}>
                        $3.000
                    </ColumnItem>
                    <ColumnItem>1 unit x $3.000</ColumnItem>
                    <Stack direction={'row'} justifyContent={'flex-end'} spacing={1} sx={{ pt: 1 }} flexWrap={'wrap'}>
                        <ColumnItem>10% IVA</ColumnItem>
                        <Divider orientation='vertical' sx={{ borderColor: '#5f6c86', height: 18 }} />
                        <ColumnItem>20% Retefuente</ColumnItem>
                        <Divider orientation='vertical' sx={{ borderColor: '#5f6c86', height: 18 }} />
                        <ColumnItem>$20.000 Desc</ColumnItem>
                    </Stack>
                </Stack>
            </Grid>
        </Grid >
    )
}
