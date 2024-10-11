import { Autocomplete, Box, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Icon, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Formik } from "formik";
import * as Yup from 'yup';
import { BillDocumentTypeSelector } from "./BillDocumentTypeSelector";
import { Table } from "./Table";
import { ProviderSelector } from "./ProviderSelector";
import { Add, Check, Edit } from "@mui/icons-material";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceSummary } from "./InvoiceSummary";
import { InvoiceGeneralInformation } from "./InvoiceGeneralInformation";
import { AddProductToInvoice } from "./AddProductToInvoice";

const SignupSchema = Yup.object().shape({
    date: Yup.date().required('La fecha es requerida'),
    account: Yup.string().required('El número de cuenta es requerido'),
    concept: Yup.string().required('El concepto es requerido'),
});

const initialValues = {
    date: dayjs(),
    account: '',
    concept: '',
    type: 'debit',
};

export const PreviewInvoice = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} sx={{ padding: 4, backgroundColor: '#fff', borderRadius: 2 }}>
                        <InvoiceGeneralInformation />
                        <Divider />
                        <Stack spacing={1}>
                            <InvoiceHeader />
                            <Stack>
                                {Array.from({ length: 3 }).map((_, index) => (<InvoiceItem key={index} />))}
                            </Stack>
                            <AddProductToInvoice />
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
            )}
        </Formik>
    )
}
