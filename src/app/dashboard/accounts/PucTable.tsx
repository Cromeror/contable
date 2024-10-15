import { Table } from "@/components/Table"
import { usePucQuery } from "@/queries/pucQueries";
import { Grid, Pagination } from "@mui/material"

const colDefs = [
    { field: "code", headerName: "Cuenta", width: 150 },
    { field: "description", headerName: "Concepto", width: 150 },
    { headerName: "Acciones", width: 150 },
]

export const PucTable = () => {
    const { data, isLoading, error } = usePucQuery()
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
