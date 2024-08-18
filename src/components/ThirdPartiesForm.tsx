import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    identification: Yup.string().required('La identificación es requerida'),
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    address: Yup.string().required('La dirección es requerida'),
});

const initialValues = {
    identification: "",
    firstName: '',
    lastName: '',
    address: '',
    type: 'legal',
};

export const ThirdPartiesForm = () => {
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
                        label="Identificación"
                        name="identification"
                        error={!!(errors.identification && touched.identification && errors.identification)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.identification}
                    />
                    <FormHelperText error={!!(errors.identification && touched.identification && errors.identification)}>
                        {errors.identification && touched.identification && errors.identification}
                    </FormHelperText>
                    <FormControl>
                        <FormLabel id="type-thrid-parties-field">Tipo de transacción</FormLabel>
                        <RadioGroup
                            aria-labelledby="type-thrid-parties-field"
                            name="type"
                            row
                            onChange={handleChange}
                            value={values.type}
                        >
                            <FormControlLabel value="legal" control={<Radio />} label="Debito" />
                            <FormControlLabel value="natural" control={<Radio />} label="Credito" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label="Nombre"
                        error={!!(errors.firstName && touched.firstName && errors.firstName)}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />
                    <FormHelperText error={!!(errors.firstName && touched.firstName && errors.firstName)}>
                        {errors.firstName && touched.firstName && errors.firstName}
                    </FormHelperText>
                    <TextField
                        label="Apellido"
                        error={!!(errors.lastName && touched.lastName && errors.lastName)}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                    />
                    <FormHelperText error={!!(errors.lastName && touched.lastName && errors.lastName)}>
                        {errors.lastName && touched.lastName && errors.lastName}
                    </FormHelperText>
                    <TextField
                        label="Dirección"
                        error={!!(errors.address && touched.address && errors.address)}
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        multiline
                        rows={2}
                    />
                    <FormHelperText error={!!(errors.address && touched.address && errors.address)}>
                        {errors.address && touched.address && errors.address}
                    </FormHelperText>

                    <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                        Guardar
                    </Button>
                </form>
            )}
        </Formik>
    )
}
