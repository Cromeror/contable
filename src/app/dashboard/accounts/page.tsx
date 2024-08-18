'use client'
import { Table } from '@/components/Table';
import { Button, Grid, MenuItem, Pagination, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

// Datos de ejemplo
const transactions = [
    { id: 1, description: 'Compra de material de oficina', date: '2024-08-10', amount: 150.75 },
    { id: 2, description: 'Pago de servicios', date: '2024-08-12', amount: 75.00 },
    { id: 3, description: 'Venta de producto X', date: '2024-08-13', amount: 300.00 },
];

const Accounting = () => {
    const [rowData, setRowData] = useState([
        { account: "Tesla", concept: "Model Y" },
        { account: "Ford", concept: "F-Series" },
        { account: "Toyota", concept: "Corolla" },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "account", headerName: "Cuenta", width: 150 },
        { field: "concept", headerName: "Concepto", width: 150 },
        { headerName: "Acciones", width: 150 },
    ]);

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Typography>Filtros</Typography>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <TextField label="Cuenta" />
                            </Grid>
                            <Grid item>
                                <Button>Limpiar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button variant='contained'>Agregar cuenta</Button>
                    </Grid>
                </Grid>
                <Grid item container spacing={1} direction={'column'} alignItems={"flex-end"}>
                    <Grid item xs={12} style={{ width: '100%' }}>
                        <Table rowData={rowData} colDefs={colDefs} />
                    </Grid>
                    <Grid item>
                        <Pagination count={10} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Accounting;
