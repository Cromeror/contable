import { FormHelperText, TextField } from "@mui/material"
import { ExtraInformationTypes } from "../PersonTypeSelector"

type Props = {
    getFieldProps?: any,
    extraInformationType: ExtraInformationTypes,
    errors: any,
    touched: any,
}

const fieldsNames = {
    [ExtraInformationTypes.NAME]: "firstName",
    [ExtraInformationTypes.LAST_NAME]: "lastName",
    [ExtraInformationTypes.NIT]: "NO_AVAILABLE",
    [ExtraInformationTypes.CC]: "NO_AVAILABLE",
    [ExtraInformationTypes.ADDRESS]: "address",
}

export const DynamicFields = ({ getFieldProps, errors, touched, extraInformationType }: Props) => {
    const fieldProps = getFieldProps(fieldsNames[extraInformationType])
    const error = errors[fieldsNames[extraInformationType]]
    const touchedField = touched[fieldsNames[extraInformationType]]


    switch (extraInformationType) {
        case ExtraInformationTypes.NAME:
            return (
                <>
                    <TextField
                        label="Nombre"
                        name="firstName"
                        error={!!(touchedField && error)}
                        {...fieldProps}
                    />
                    <FormHelperText error={!!(touchedField && error)}>
                        {error}
                    </FormHelperText>
                </>
            )
        case ExtraInformationTypes.LAST_NAME:
            return (
                <>
                    <TextField
                        label="Apellido"
                        name="lastName"
                        error={!!(touchedField && error)}
                        {...fieldProps}
                    />
                    <FormHelperText error={!!(touchedField && error)}>
                        {error}
                    </FormHelperText>
                </>
            )
        case ExtraInformationTypes.ADDRESS:
            return (
                <>
                    <TextField
                        label="Dirección"
                        name="address"
                        error={!!(touchedField && error)}
                        multiline
                        rows={2}
                        {...fieldProps}
                    />
                    <FormHelperText error={!!(touchedField && error)}>
                        {error}
                    </FormHelperText>
                </>
            )
    }
}