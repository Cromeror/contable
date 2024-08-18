'use client'
import { AccountingForm } from '@/components/AccountingForm';
import { Search } from '@/components/Search';
import { Table } from '@/components/Table';
import { Button, Drawer, Grid, Pagination, Typography } from '@mui/material';
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

    const [openNewAccountForm, setOpenNewAccountForm] = useState(false);

    const toggleDrawer = () => () => {
        setOpenNewAccountForm(!openNewAccountForm);
    };

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>Cuentas</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' onClick={toggleDrawer()}>Agregar cuenta</Button>
                    </Grid>
                </Grid>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Search />
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
            <Drawer
                anchor={"right"}
                open={openNewAccountForm}
                onClose={toggleDrawer()}
            >
                <div className='px-4 py-8 flex flex-col gap-4'>
                    <Typography variant="h6">
                        Agregar nueva cuenta
                    </Typography>
                    <AccountingForm />
                </div>
            </Drawer>
        </div>
    );
};

export default Accounting;
