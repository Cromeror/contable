import { Autocomplete, Box, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Icon, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Formik } from "formik";
import * as Yup from 'yup';
import { BillDocumentTypeSelector } from "./BillDocumentTypeSelector";
import { Table } from "./Table";
import { ProviderSelector } from "./ProviderSelector";
import { Check, Edit } from "@mui/icons-material";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceSummary } from "./InvoiceSummary";

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

export const InvoiceForm = () => {
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px] min-h-[75vh] justify-between">
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                <Stack direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                                        09/09/2023
                                    </Typography>
                                    <IconButton>
                                        <Edit sx={{ color: 'gray', fontSize: 16 }} />
                                    </IconButton>
                                </Stack>
                                <Typography sx={{ fontStyle: 'italic', color: 'gray', fontWeight: 'bold' }}>
                                    Factura #123456
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <ProviderSelector dataSource={[
                                    {
                                        label: 'Proveedor1',
                                        name: 'Cristobal Romero',
                                        contact: {
                                            name: 'Cristobal Romero',
                                            email: 'cristobal.romero@gmail.com',
                                            phone: '+56 987654321',
                                        },
                                    },
                                    {
                                        label: 'Proveedor2',
                                        name: 'Cristobal Romero',
                                        contact: {
                                            name: 'Cristobal Romero',
                                            email: 'cristobal.romero@gmail.com',
                                            phone: '+56 987654321',
                                        },
                                    },
                                    {
                                        label: 'Proveedor3',
                                        name: 'Cristobal Romero',
                                        contact: {
                                            name: 'Cristobal Romero',
                                            email: 'cristobal.romero@gmail.com',
                                            phone: '+56 987654321',
                                        }
                                    }
                                ]} />
                                <FormHelperText error={!!(errors.concept && touched.concept && errors.concept)}>
                                    {errors.concept && touched.concept && errors.concept}
                                </FormHelperText>
                                <BillDocumentTypeSelector />
                                {/*                                 <DatePicker
                                    label="Basic date picker"
                                    onChange={(value) => {
                                        console.log(value);
                                        // handleChange("date")(dayjs());
                                    }}
                                    value={values.date}
                                /> */}
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="IVA / Impoconsumo incluido" />
                                </Stack>
                            </Stack>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Formas de pago
                            </Typography>
                            {/*                     <TextField
                        label="Número de cuenta"
                        name="account"
                        error={!!(errors.account && touched.account && errors.account)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account}
                    />
                    <FormHelperText error={!!(errors.account && touched.account && errors.account)}>
                        {errors.account && touched.account && errors.account}
                    </FormHelperText> */}
                        </Grid>
                        <Grid item xs={8} >
                            <Stack spacing={2} sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 4 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} variant="h6">
                                        Productos
                                    </Typography>
                                </Stack>
                                <Card sx={{ p: 2, minHeight: 500, borderRadius: 4 }}>
                                    <Stack spacing={1}>
                                        <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                                            Factura #123456
                                        </Typography>
                                        <Box>
                                            <InvoiceHeader />
                                            <Stack>
                                                {
                                                    Array.from({ length: 10 }).map((_, index) => (
                                                        <InvoiceItem key={index} />
                                                    ))
                                                }
                                            </Stack>
                                        </Box>
                                        <InvoiceSummary />
                                    </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                        Guardar
                    </Button>
                </form>
            )}
        </Formik>
    )
}
