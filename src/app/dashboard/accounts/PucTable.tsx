import { PucAccount } from "@/app/api/puc/definitions"
import { Table } from "@/components/Table"
import { Grid, Pagination } from "@mui/material"

const colDefs = [
    { field: "code", headerName: "Cuenta", width: 150 },
    { field: "description", headerName: "Concepto" },
]

type Props = {
    data: PucAccount[]
}

export const PucTable = ({ data }: Props) => {

    return (
        <Grid item container spacing={1} direction={'column'} alignItems={"flex-end"}>
            <Grid item xs={12} style={{ width: '100%' }}>
                <Table rowData={data} colDefs={colDefs} />
            </Grid>
            <Grid item>
                <Pagination count={10} />
            </Grid>
        </Grid>
    )
}
