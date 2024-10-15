import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"

export const Table = ({ rowData, colDefs }: { rowData: any, colDefs: any }) => {
    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 500 }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    )
}
