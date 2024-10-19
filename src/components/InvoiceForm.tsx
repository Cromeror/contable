import { Button, Divider, Stack } from "@mui/material";
import dayjs from "dayjs";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceSummary } from "./InvoiceSummary";
import { InvoiceGeneralInformation } from "./InvoiceGeneralInformation";
import { AddProductToInvoice } from "./AddProductToInvoice";

const SignupSchema = Yup.object().shape({
    date: Yup.date().required('La fecha es requerida'),
    contactId: Yup.number().required('El contacto es requerido'),
    description: Yup.string(),
    items: Yup.array().of(Yup.object().shape({
        quantity: Yup.number().required('La cantidad es requerida'),
        unitPrice: Yup.number().required('El precio unitario es requerido'),
        total: Yup.number().required('El total es requerido'),
        description: Yup.string(),
        discount: Yup.number(),
        tax: Yup.number(),
    })),
});

const initialValues = {
    date: '',
    contactId: '',
    description: '',
    items: []
};

export const InvoiceForm = () => {
    const { handleSubmit, errors, touched, isValid, isSubmitting, values, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 400);
        },
    })

    console.log(values);

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ padding: 4, backgroundColor: '#fff', borderRadius: 2 }}>
                <InvoiceGeneralInformation />
                <Divider />
                <Stack spacing={1}>
                    <InvoiceHeader />
                    <Stack>
                        {Array.from({ length: 3 }).map((_, index) => (<InvoiceItem key={index} />))}
                    </Stack>
                    <AddProductToInvoice onSubmit={(product) => {
                        setFieldValue('items', [...values.items, product])
                    }} />
                    <InvoiceSummary />
                </Stack>
                <Divider />
                <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
                    <Button variant="outlined">
                        Descargar PDF
                    </Button>
                    <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                        Guardar
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}
