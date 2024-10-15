'use client'
import { AccountingForm } from '@/components/AccountingForm';
import { Search } from '@/components/Search';
import { Button, Drawer, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PucTable } from './PucTable';

const Accounting = () => {
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
                <PucTable />
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
