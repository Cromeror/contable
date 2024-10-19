import { Button, Divider, FormHelperText, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";
import { useCreateProduct } from "@/queries/productsQueries";

const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    pucId: Yup.number().required('Debe seleccionar una cuenta principal'),
    unitPrice: Yup.number().required('El precio unitario es requerido'),
    description: Yup.string(),
});

type FormValues = {
    name: string,
    description: string,
    pucId: number,
    unitPrice: number,
}

const initialValues = {
    name: '',
    description: '',
    pucId: '',
    unitPrice: ''
};

type Props = {
    controls?: any,
    defaultValue?: FormValues,
}

export const ProductForm = ({ controls, defaultValue }: Props) => {
    const { mutate: createProduct } = useCreateProduct()

    const { handleSubmit, errors, touched, isValid, isSubmitting, values, setFieldValue, getFieldProps } = useFormik({
        initialValues: { ...initialValues, ...defaultValue },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            createProduct({
                name: values.name,
                description: values.description,
                pucId: values.pucId as number,
                unitPrice: values.unitPrice as number,
            })
        },
    })

    return (
        <Stack spacing={2} sx={{ padding: 4, backgroundColor: '#fff', borderRadius: 2 }}>
            <Stack direction={"row"} spacing={2}>
                <InfinityAutoCompleteInput
                    label={values.pucId ? 'Cuenta principal' : 'Selecciona una cuenta principal'}
                    {...getFieldProps('pucId')}
                    value={values?.pucId}
                    onChage={(value) => {
                        setFieldValue('pucId', value)
                    }}
                />
                <TextField
                    label="Subcuenta"
                    onChange={() => {
                        console.log("Ingreso cuenta secundaria");
                    }}
                />
            </Stack>
            <FormHelperText error={!!errors.pucId}>
                {errors.pucId}
            </FormHelperText>
            <TextField
                label="Nombre del producto/servicio"
                error={!!(errors.name && touched.name)}
                {...getFieldProps('name')}
            />
            <FormHelperText error={!!(touched.name && errors.name)}>
                {errors.name && touched.name && errors.name}
            </FormHelperText>
            <TextField label="Descripción" multiline rows={2} {...getFieldProps('description')} />
            <TextField
                label="Precio unitario"
                error={!!(errors.name && touched.name)}
                {...getFieldProps('unitPrice')}
                sx={{ width: '30%' }}
            />
            <FormHelperText error={!!(touched.unitPrice && errors.unitPrice)}>
                {errors.unitPrice && touched.unitPrice && errors.unitPrice}
            </FormHelperText>

            <Divider />
            <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
                {controls}
                <Button
                    type="submit"
                    variant="contained"
                    disabled={!isValid || isSubmitting}
                    onClick={() => handleSubmit()}
                >
                    Guardar
                </Button>
            </Stack>
        </Stack>
    )
}
