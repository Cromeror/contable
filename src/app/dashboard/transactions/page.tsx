'use client'
import { Table } from '@/components/Table';
import { TopBar } from '@/components/TopBar';
import React, { useState } from 'react';

const Transaction = () => {
    
    const [rowData, setRowData] = useState([
        { account: "Tesla", credit: "Model Y", debit: 64950, date: "2024-08-10" },
        { account: "Ford", credit: "F-Series", debit: 33850, date: "2024-08-12" },
        { account: "Toyota", credit: "Corolla", debit: 29600, date: "2024-08-13" },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "date" , headerName: "Fecha", width: 150 },
        { field: "account", headerName: "Cuenta", width: 150 },
        { field: "debit", headerName: "Debito", width: 150 },
        { field: "credit", headerName: "Credito", width: 150 },
        {field: "attachments", headerName: "Archivos", width: 150},
    ]);

    return (
        <div>
            <TopBar />
            <Table rowData={rowData} colDefs={colDefs} />
        </div>
    );
};

export default Transaction;
