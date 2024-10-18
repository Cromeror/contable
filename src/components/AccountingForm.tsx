import { Button, FormHelperText, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { InfinityAutoCompleteInput } from "./InfinityAutoCompleteInput";
import { useCreatePucMutation } from "@/queries/pucQueries";

const PucSchema = Yup.object().shape({
    account: Yup.string().required('El número de la subcuenta es requerido'),
    concept: Yup.string().required('El concepto es requerido'),
    parentId: Yup.string()
});

const initialValues = {
    account: '',
    concept: '',
    parentId: '',
};

type Props = {
    controls?: any,
    defaultValue?: any,
}

export const AccountingForm = ({ controls, defaultValue }: Props) => {
    const { mutate } = useCreatePucMutation()

    const { setFieldValue, getFieldProps, errors, touched, handleSubmit, isValid, isSubmitting, values } = useFormik({
        initialValues: defaultValue || initialValues,
        validationSchema: PucSchema,
        onSubmit: (values, { setSubmitting }) => {
            mutate({
                code: values.account,
                description: values.concept,
                parentId: defaultValue?.id,
            } as any)
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    })

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <InfinityAutoCompleteInput
                    label="Cuenta principal"
                    {...getFieldProps('parentId')}
                    value = {values?.parentId}
                    onChage={(value) => setFieldValue('parentId', value)}
                />
                <TextField
                    label="Subcuenta"
                    error={!!(errors.account && touched.account && errors.account)}
                    {...getFieldProps('account')}
                />
            </Stack>
            <FormHelperText error={!!(errors.account && touched.account && errors.account)}>
                <> {touched.account && errors.account}</>
            </FormHelperText>
            <TextField
                label="Concepto"
                error={!!(errors.concept && touched.concept && errors.concept)}
                multiline
                rows={3}
                {...getFieldProps('concept')}
            />
            <FormHelperText error={!!(errors.concept && touched.concept && errors.concept)}>
                <>{touched.concept && errors.concept}</>
            </FormHelperText>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
                {controls}
                <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                    Guardar
                </Button>
            </Stack>
        </form>
    )
}
