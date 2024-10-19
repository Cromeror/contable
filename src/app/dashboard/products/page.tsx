'use client'
import { ProductModalForm } from '@/components/ProductModalForm';
import { Table } from '@/components/Table';
import { useProductsQuery } from '@/queries/productsQueries';
import { Button, Divider, Stack } from '@mui/material';
import React, { useState } from 'react';

const ProductsPage = () => {
    const [openNewProductForm, setOpenNewProductForm] = useState(false);
    const { data: products } = useProductsQuery()

    console.log(products);

    return (
        <Stack spacing={2}>
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
                <Button variant="contained" onClick={() => setOpenNewProductForm(!openNewProductForm)}>
                    Nuevo producto
                </Button>
            </Stack>
            <Divider />
            <Table
                rowData={products}
                colDefs={[
                    { field: "name", headerName: "Nombre", width: 150 },
                    { field: "description", headerName: "Descripción", width: 150 },
                    { field: "unitPrice", headerName: "Precio unitario", width: 150 },
                    { headerName: "Acciones", width: 150 },
                ]}
            />
            <ProductModalForm open={openNewProductForm} onClose={() => setOpenNewProductForm(false)} />
        </Stack>
    );
};

export default ProductsPage;
