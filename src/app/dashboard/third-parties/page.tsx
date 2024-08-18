'use client'
import React, { useState } from 'react';
import { Table } from '@/components/Table';
import { Button, Drawer, Grid, Pagination, Typography } from '@mui/material';
import { ThirdPartiesForm } from '@/components/ThirdPartiesForm';

const ThirdParties = () => {
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

    const [openNewAccountForm, setOpenNewAccountForm] = useState(false);

    const toggleDrawer = () => () => {
        setOpenNewAccountForm(!openNewAccountForm);
    };

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>Terceros</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' onClick={toggleDrawer()}>Agregar tercero</Button>
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
                        Agregar tercero
                    </Typography>
                    <ThirdPartiesForm />
                </div>
            </Drawer>
        </div>
    );
};

export default ThirdParties;
