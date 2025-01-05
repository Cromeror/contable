import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"
import { ColDef } from "ag-grid-community";
import { Box } from "@mui/material";

type Props = {
    rowData: any,
    colDefs: ColDef[],
    config?: any,
    sx?: any
}

export const Table = ({ rowData, colDefs, config, sx }: Props) => {
    return (
        <Box className="ag-theme-quartz" sx={{ height: 500, ...sx }} >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                {...config}
            />
        </Box>
    )
}
