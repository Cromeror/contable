'use client'
import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PucModalForm } from '@/components/PucModalForm';
import { useGetPuc } from '@/queries/pucQueries';
import { Table } from "@/components/Table"
import { ColDef } from "ag-grid-community";

const colDefs: ColDef[] = [
    { field: "code", headerName: "Código", width: 150 },
    { field: "description", headerName: "Concepto", flex: 1 },
    {
        field: "tag", headerName: "Nivel", flex: 1,
        cellRenderer: (params: any) => {
            switch (params.data.tag) {
                case "subaccount":
                    return "Subcuenta"
                case "account":
                    return "Cuenta"
                case "class":
                    return "Clase"
                case "group":
                    return "Grupo"
                default:
                    return "No definido"
            }
        }
    },
    { field: "products", headerName: "Productos asociados", flex: 1 },
]

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
                <Grid item xs={12}>
                    <Table
                        rowData={pucDataList}
                        colDefs={colDefs}
                        sx={{ height: 519 }}
                        config={{
                            pagination: true,
                            paginationPageSize: 10
                        }}
                    />
                </Grid>
            </Grid>
            <PucModalForm open={openNewAccountForm} onClose={() => setOpenNewAccountForm(false)} />
        </div>
    );
};

export default Accounting;
