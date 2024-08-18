'use client'
import { AccountingForm } from '@/components/AccountingForm';
import { Search } from '@/components/Search';
import { Table } from '@/components/Table';
import { Button, Divider, Drawer, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Accounting = () => {
    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([
        { field: "code", headerName: "Cuenta", width: 150 },
        { field: "description", headerName: "Concepto", width: 150 },
        { headerName: "Acciones", width: 150 },
    ]);

    const [openNewAccountForm, setOpenNewAccountForm] = useState(false);

    const toggleDrawer = () => () => {
        setOpenNewAccountForm(!openNewAccountForm);
    };

    useEffect(() => {
        fetch('/api/chart-of-accounts')
            .then(res => res.json())
            .then(data => setRowData(data));
    }, []);

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12}>
                    <Button>Nuevo comprobante</Button>
                    <Grid item>
                        <Divider orientation='vertical' />
                    </Grid>
                    <Button>Nuevo comprobante</Button>
                </Grid>
                <Divider />
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
