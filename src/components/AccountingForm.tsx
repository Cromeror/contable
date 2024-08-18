import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';
import { ErrorField } from "./ErrorField";

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
                isSubmitting,
                /* and other goodies */
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
                    <ErrorField>
                        {errors.account && touched.account && errors.account}
                    </ErrorField>
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
                    <ErrorField>
                        {errors.concept && touched.concept && errors.concept}
                    </ErrorField>

                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                        Guardar
                    </Button>
                </form>
            )}
        </Formik>
    )
}
