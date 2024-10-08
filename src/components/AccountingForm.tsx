import { Button, FormHelperText, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    account: Yup.string().required('El número de cuenta es requerido'),
    concept: Yup.string().required('El concepto es requerido'),
});

const initialValues = {
    account: '',
    concept: '',
};

export const AccountingForm = () => {
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
                    <TextField
                        label="Número de cuenta"
                        name="account"
                        error={!!(errors.account && touched.account && errors.account)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account}
                    />
                    <FormHelperText error={!!(errors.account && touched.account && errors.account)}>
                        {errors.account && touched.account && errors.account}
                    </FormHelperText>
                    <TextField
                        label="Concepto"
                        error={!!(errors.concept && touched.concept && errors.concept)}
                        name="concept"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        multiline
                        rows={3}
                        value={values.concept}
                    />
                    <FormHelperText error={!!(errors.concept && touched.concept && errors.concept)}>
                        {errors.concept && touched.concept && errors.concept}
                    </FormHelperText>

                    <Button type="submit" variant="contained" disabled={isValid || isSubmitting}>
                        Guardar
                    </Button>
                </form>
            )}
        </Formik>
    )
}
