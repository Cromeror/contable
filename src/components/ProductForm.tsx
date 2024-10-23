import { Button, CircularProgress, Divider, FormControl, FormHelperText, InputLabel, Stack, TextField } from "@mui/material";
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
    onSuccess?: (response: any) => void,
    onError?: (error: any) => void,
}

export const ProductForm = ({ controls, defaultValue, onSuccess = () => { }, onError }: Props) => {
    const { mutateAsync, isPending } = useCreateProduct()
    const { handleSubmit, errors, touched, isValid, isSubmitting, values, setFieldValue, getFieldProps } = useFormik({
        initialValues: { ...initialValues, ...defaultValue },
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            try {
                onSuccess(
                    await mutateAsync({
                        name: values.name,
                        description: values.description,
                        pucId: values.pucId as number,
                        unitPrice: values.unitPrice as number,
                    }))
            } catch (error) {
                onError && onError(error)
            }
        },
    })

    return (
        <Stack spacing={1} sx={{ backgroundColor: '#fff', borderRadius: 2 }}>
            <TextField
                label="Nombre del producto/servicio"
                error={!!(errors.name && touched.name)}
                {...getFieldProps('name')}
            />
            <FormHelperText error={!!(touched.name && errors.name)}>
                {errors.name && touched.name && errors.name}
            </FormHelperText>

            <Stack direction={"row"} spacing={2}>
                <InfinityAutoCompleteInput
                    label={values.pucId ? 'Cuenta principal' : 'Selecciona una cuenta principal'}
                    value={values?.pucId}
                    onChage={(value) => {
                        setFieldValue('pucId', value.id)
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
            <TextField label="Descripción" multiline rows={2} {...getFieldProps('description')} />
            <FormHelperText error={!!(touched.name && errors.name)}></FormHelperText>
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
                    {isPending && <CircularProgress size={16} sx={{ mr: 1 }} />}  Guardar
                </Button>
            </Stack>
        </Stack>
    )
}
