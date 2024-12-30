'use client'
import { Search } from '@/components/Search';
import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PucTable } from './PucTable';
import { PucModalForm } from '@/components/PucModalForm';
import { useGetPuc } from '@/queries/pucQueries';

const Accounting = () => {
    const [openNewAccountForm, setOpenNewAccountForm] = useState(false);
    const { data: pucDataList = [], isLoading, error } = useGetPuc({ skip: -1 })

    return (
        <div>
            <Grid container spacing={2} direction={'column'} style={{ padding: 20 }}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>Cuentas</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={() => setOpenNewAccountForm(!openNewAccountForm)}>
                            Agregar cuenta
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item container xs={12} sm={6}>
                        <Search />
                    </Grid>
                </Grid>
                <PucTable data={pucDataList} />
            </Grid>
            <PucModalForm open={openNewAccountForm} onClose={() => setOpenNewAccountForm(false)} />
        </div>
    );
};

export default Accounting;
