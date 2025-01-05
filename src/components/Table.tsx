import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"
import { ColDef } from "ag-grid-community";

type Props = {
    rowData: any,
    colDefs: ColDef[],
    config?: any
}

export const Table = ({ rowData, colDefs, config }: Props) => {
    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 500 }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                {...config}
            />
        </div>
    )
}
