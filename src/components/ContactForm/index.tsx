import { Button, FormControl, FormHelperText, InputLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { DocumentTypeOption, DocumentTypeOptions, DocumentTypeSelector, DocumentTypesValues } from "../DocumentTypeSelector";
import { ExtraInformationTypes, PersonTypeOption, PersonTypeSelector } from "../PersonTypeSelector";
import { DynamicFields } from "./DynamicFields";
import { IdentificationNumber, IdentificationValue } from "../IdentificationNumber";

type Schema = {
    personType?: PersonTypeOption,
    documentType?: DocumentTypeOption,
    identification: IdentificationValue,
    firstName: string,
    lastName: string,
    address: string,
}

const SignupSchema = Yup.object().shape({
    personType: Yup.object().required('El tipo de persona es requerido'),
    documentType: Yup.object().required('El tipo de documento es requerido'),
    identification: Yup.string().required('La identificación es requerida'),
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    address: Yup.string().required('La dirección es requerida'),
});

const initialValues: Schema = {
    identification: {
        value: "",
    },
    firstName: '',
    lastName: '',
    address: '',
};

export const ContactForm = () => {
    const {
        values,
        errors,
        touched,
        setFieldValue,
        setValues,
        handleChange,
        handleBlur,
        handleSubmit,
        getFieldProps,
        isValid,
        isSubmitting,
    } = useFormik({
        initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

    const onChangeValue = (name: string, value: any) => {
        switch (name) {
            case "personType":
                const personTypeValue = value as PersonTypeOption
                const documentValue = personTypeValue.extraInformation?.find(e => e === ExtraInformationTypes.NIT || e === ExtraInformationTypes.CC) as DocumentTypesValues | undefined;
                const documentType = DocumentTypeOptions.find(option => {
                    return option.value === documentValue
                })

                setValues({
                    ...values,
                    personType: personTypeValue,
                    documentType
                })
                break;
            case "documentType":
                setFieldValue("documentType", value);
                break;
            case "identification":
                setFieldValue("identification", value);
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[400px]">
            <FormControl fullWidth>
                <InputLabel>Tipo</InputLabel>
                <PersonTypeSelector
                    name="personType"
                    label="Tipo"
                    error={!!(errors.personType && touched.personType && errors.personType)}
                    onChange={(v) => onChangeValue("personType", v)}
                />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Tipo de documento</InputLabel>
                <DocumentTypeSelector
                    name="documentType"
                    label="Tipo de documento"
                    value={values.documentType}
                    error={errors.documentType}
                    onChange={(v) => onChangeValue("documentType", v)}
                />
            </FormControl>
            <IdentificationNumber
                label="Identificación"
                name="identification"
                documentType={values.documentType?.value}
                error={errors.identification}
                onChange={(v) => onChangeValue("identification", v)}
                value={values.identification}
            />

            {values.personType?.extraInformation?.map((value, i) => (
                <DynamicFields
                    key={i}
                    extraInformationType={value}
                    errors={errors}
                    touched={touched}
                    getFieldProps={getFieldProps}
                />
            ))}

            <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                Guardar
            </Button>
        </form>
    )
}
