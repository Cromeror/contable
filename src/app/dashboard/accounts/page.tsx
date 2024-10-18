'use client'
import { Search } from '@/components/Search';
import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PucTable } from './PucTable';
import { PucModalForm } from '@/components/PucModalForm';

const Accounting = () => {
    const [openNewAccountForm, setOpenNewAccountForm] = useState(false);

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>Cuentas</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' onClick={() => setOpenNewAccountForm(!openNewAccountForm)}>Nueva cuenta</Button>
                    </Grid>
                </Grid>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Search />
                    </Grid>
                </Grid>
                <PucTable />
            </Grid>
            <PucModalForm open={openNewAccountForm} onClose={() => setOpenNewAccountForm(false)} />
        </div>
    );
};

export default Accounting;
