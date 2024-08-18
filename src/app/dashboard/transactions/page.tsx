'use client'
import React, { useState } from 'react';
import { Table } from '@/components/Table';
import { TopBar } from '@/components/TopBar';
import { Button, Grid, MenuItem, Pagination, TextField, Typography } from '@mui/material';

const Transaction = () => {

    const [rowData, setRowData] = useState([
        { account: "Tesla", credit: "Model Y", debit: 64950, date: "2024-08-10" },
        { account: "Ford", credit: "F-Series", debit: 33850, date: "2024-08-12" },
        { account: "Toyota", credit: "Corolla", debit: 29600, date: "2024-08-13" },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "date", headerName: "Fecha", width: 150 },
        { field: "account", headerName: "Cuenta", width: 150 },
        { field: "debit", headerName: "Debito", width: 150 },
        { field: "credit", headerName: "Credito", width: 150 },
        { field: "attachments", headerName: "Archivos", width: 150 },
    ]);

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} sm={6}>
                    <Typography>Filtros</Typography>
                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item>
                            <TextField label="Cuenta" />
                        </Grid>
                        <Grid item sm={2}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Tipo de transacción"
                                fullWidth
                            >
                                <MenuItem value={10}>Debito</MenuItem>
                                <MenuItem value={20}>Credito</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item>
                            <Button variant='text'>Limpiar</Button>
                        </Grid>
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

export default Transaction;
