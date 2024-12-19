import { Table } from "@/components/Table"
import { useGetPuc } from "@/queries/pucQueries";
import { Grid, Pagination } from "@mui/material"

const colDefs = [
    { field: "code", headerName: "Cuenta", width: 150 },
    { field: "description", headerName: "Concepto" },
]

export const PucTable = () => {
    const { data, isLoading, error } = useGetPuc()
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
