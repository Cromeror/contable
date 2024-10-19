import { Box, Button, Collapse, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { VoucherItem } from "@/app/api/vouchers/definitions";

type Props = {
    defaultValue?: any,
    onSubmit?: (values: VoucherItem) => void,
}

const initialValues = {
    pucId: '',
    description: '',
    quantity: 0,
    unitPrice: 0,
    discount: 0,
    tax: 0,
};

const validationSchema = Yup.object().shape({
    pucId: Yup.number().required('Debe seleccionar un producto'),
    quantity: Yup.number().required('La cantidad es requerida'),
    unitPrice: Yup.number().required('El precio unitario es requerido'),
    description: Yup.string(),
    discount: Yup.number(),
    tax: Yup.number()
});

export const AddProductToInvoice = ({ defaultValue, onSubmit }: Props) => {
    const [open, setOpen] = useState(false);

    const { getFieldProps, setFieldValue, errors, touched, handleSubmit, isValid, isSubmitting, values } = useFormik({
        initialValues: defaultValue || initialValues,
        validationSchema,
        onSubmit: (values) => {
            setOpen(false)
            onSubmit && onSubmit(values)
        },
    })

    return (
        <Box>
            <Collapse in={open} collapsedSize={80}>
                <Stack spacing={2} sx={{ py: 2 }}>
                    <InfinityAutoCompleteInput
                        label="Agrega un producto"
                        {...getFieldProps('pucId')}
                        value={values?.parentId}
                        onChage={(value) => {
                            !open && setOpen(true)
                            setFieldValue('pucId', value)
                        }}
                    />
                    <TextField
                        label="Descripción"
                        multiline rows={2}
                        sx={{ width: '100%' }}
                        {...getFieldProps('description')}
                    />
                    <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                        <Stack direction={"row"} spacing={2} sx={{ width: '100%' }}>
                            <TextField
                                label="Cantidad"
                                type="number"
                                sx={{ width: '12%' }}
                                {...getFieldProps('quantity')}
                            />
                            <TextField
                                label="Valor unitario"
                                sx={{ width: '25%' }}
                                {...getFieldProps('unitPrice')} />
                            <TextField
                                label="Descuento"
                                sx={{ width: '25%' }}
                                {...getFieldProps('discount')} />
                        </Stack>
                        <Stack direction={"row"} spacing={2} sx={{ width: '30%' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel>Imp. Cargo</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    value={10}
                                    label="Imp. Cargo"
                                    onChange={() => { }}
                                >
                                    <MenuItem value={19}>19%</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel >Retención</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    value={10}
                                    label="Retención"
                                    onChange={() => { }}
                                >
                                    <MenuItem value={3}>3%</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
                        <Button variant="contained" onClick={() => handleSubmit()}>Agregar item</Button>
                    </Stack>
                    <Divider sx={{ width: '100%' }} />
                </Stack>
            </Collapse>
        </Box>
    )
}
