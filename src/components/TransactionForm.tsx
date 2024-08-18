import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Formik } from "formik";
import * as Yup from 'yup';

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

export const TransactionForm = () => {
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
                    <DatePicker
                        label="Basic date picker"
                        onChange={(value)=>{
                            console.log(value);
                           // handleChange("date")(dayjs());
                        }}
                        value={values.date}
                    />
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
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Tipo de transacción</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            row
                            onChange={handleChange}
                            value={values.type}
                        >
                            <FormControlLabel value="debit" control={<Radio />} label="Debito" />
                            <FormControlLabel value="credit" control={<Radio />} label="Credito" />
                        </RadioGroup>
                    </FormControl>
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

                    <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                        Guardar
                    </Button>
                </form>
            )}
        </Formik>
    )
}
