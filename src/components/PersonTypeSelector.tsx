import { MenuItem, Select, SelectProps } from "@mui/material"
import { DocumentTypesValues } from "./DocumentTypeSelector";

export enum ExtraInformationTypes {
    NAME = "NAME",
    LAST_NAME = "LAST_NAME",
    NIT = DocumentTypesValues.NIT,
    CC = DocumentTypesValues.CC,
    ADDRESS = "ADDRESS",
}

export type PersonTypeOption = {
    value: number;
    label: string;
    extraInformation?: ExtraInformationTypes[]
}

const options: PersonTypeOption[] = [
    {
        value: 1,
        label: "Persona Natural",
        extraInformation: [
            ExtraInformationTypes.CC,
            ExtraInformationTypes.NAME,
            ExtraInformationTypes.LAST_NAME,
            ExtraInformationTypes.ADDRESS
        ]
    },
    {
        value: 2,
        label: "Persona Jurídica",
        extraInformation: [
            ExtraInformationTypes.NIT,
            ExtraInformationTypes.NAME,
            ExtraInformationTypes.ADDRESS
        ]
    }
].sort((a, b) => a.label.localeCompare(b.label));
type Props = SelectProps<PersonTypeOption>
    & { onChange?: (value: PersonTypeOption) => void }

export const PersonTypeSelector = ({ onChange, ...props }: Props) => (
    <Select {...props}>
        {options.map(option => (
            <MenuItem
                key={option.value}
                value={option.value}
                onClick={() => onChange?.(option)}
            >
                {option.label}
            </MenuItem>
        ))}
    </Select>
)
